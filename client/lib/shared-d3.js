import { extent } from 'd3-array';
import { scaleLinear as linear, scalePoint as point } from 'd3-scale';
import { scaleTime, select } from 'd3';

export const defaultColors = [
  '#3F4C55',
  '#E3A51A',
  '#F4E956',
  '#AAAC84'
];

export const defaultStyles = {
  '.bar': {
    fill: 'blue',
    transition: 'x 0.35s ease-in, y 0.35s ease-in, height 0.5s ease-in, width 0.5s ease-in',
    opacity: 1
  },
  '.bar:hover': {
    opacity: 0.8
  },
  '.axis': {
    'font-family': 'dobra-light,Arial,sans-serif',
    'font-size': '9px'
  },
  '.axis .label': {
    'font-size': '14px',
    'font-family': 'dobra-light,Arial,sans-serif',
    fill: '#000'
  },
  '.axis path, .axis line': {
    fill: 'none',
    strokeWidth: 1,
    'shape-rendering': 'crispEdges'
  },
  'x.axis path': {
    display: 'none',
    stroke: 'lightgrey'
  },
  '.tick line': {
    stroke: 'lightgrey',
    strokeWidth: 1,
    opacity: '0.7'
  }
};

export function reduce(...args) {
  let rVal = args[0];
  for (let i = 1; i < args.length; i++) {
    rVal -= args[i];
  }
  return rVal;
}

export function createValueGenerator(scale, type, parseDate) {
  const dataIndex =
    (scale === 'x')
      ? 'x'
      : 'y';
  return (d) => d[dataIndex];
}

export function createCircularTicks(containerElement) {
  select(containerElement)
    .select('svg')
    .selectAll('.tick-circle')
    .remove();

  const ticks = select(containerElement)
    .select('svg')
    .selectAll('.tick');

  function circleAppender() {
    select(this)
      .append('circle')
      .attr('class', 'tick-circle');
  }
  ticks.each(circleAppender);
}

export function getAxisStyles(grid, verticalGrid, yAxisOrientRight) {
  return {
    '.x circle.tick-circle ': {
      fill: 'lightgrey'
    },
    '.y circle.tick-circle': {
      cx: '-8px',
      fill: 'lightgrey'
    },
    '.y.axis line': {
      display: 'none',
      stroke: 'lightgrey'
    }
  };
}

export function calculateMargin(axes, margin, yAxisOrientRight, y2) {
  if (margin) return margin;
  if (yAxisOrientRight) {
    return (axes)
      ? { top: 20, right: 50, bottom: 50, left: (y2) ? 50 : 20 }
      : { top: 0, right: 0, bottom: 0, left: 0 };
  }
  return (axes)
    ? { top: 20, right: (y2) ? 50 : 20, bottom: 50, left: 50 }
    : { top: 0, right: 0, bottom: 0, left: 0 };
}

/* eslint no-shadow: 0 */
export function textDomainRange(d, s) {
  const a = [];

  d.forEach((d) => {
    d.forEach((d, i) => {
      const v = d[s];
      if (!a.includes(v)) a.splice(i, 0, v);
    });
  });

  return a;
}

export function calculateExtent(data, accessor) {
  let lo; // Low
  let hi; // High
  data.forEach((item) => {
    const [LO, HI] = extent(item, accessor);
    lo = lo < LO ? lo : LO;
    hi = hi > HI ? hi : HI;
  });
  return [lo, hi];
}

export function createDomainRangeGenerator(scale, domainRange, data, type, length, parseDate) {
  let axis;

  switch (type) {
    case 'text':
      axis = point();
      axis
        .domain(
          Array.isArray(domainRange)
            ? domainRange
            : textDomainRange(data, scale))
          .range([0, length])
          .padding(0);
      break;
    case 'linear':
      axis = linear();
      axis
        .domain(
          Array.isArray(domainRange)
            ? domainRange
            : calculateExtent(data, createValueGenerator(scale, type, parseDate)))
        .range(
          (scale === 'x')
            ? [0, length]
            : [length, 0]);
      break;
    default:
      break;
  }
  return axis;
}