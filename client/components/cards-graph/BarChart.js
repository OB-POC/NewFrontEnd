import React, { PureComponent } from 'react';
import { scaleBand as band, scaleLinear as linear } from 'd3-scale';
import {
  event as lastEvent,
  select,
  axisBottom,
  axisLeft,
  scaleOrdinal,
  schemeCategory10,
  range,
  max
} from 'd3';
import {
  reduce,
  calculateMargin,
  createCircularTicks
} from '../../lib/shared-d3';
import ReactFauxDOM from 'react-faux-dom';
import PropTypes from 'prop-types';

const colorScale = scaleOrdinal(schemeCategory10).domain(range(0, 10));

export default class BarChart extends PureComponent {
  static get propTypes() {
    return {
      data: PropTypes.array.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
      margin: PropTypes.object,
      mouseOverHandler: PropTypes.func,
      mouseOutHandler: PropTypes.func,
      mouseMoveHandler: PropTypes.func,
      colorBars: PropTypes.bool,
      axes: PropTypes.bool,
      axisLabels: PropTypes.shape({
        x: PropTypes.string,
        y: PropTypes.string
      }),
      xType: PropTypes.string,
      yType: PropTypes.string,
      barWidth: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      width: 400,
      height: 200,
      axes: false,
      xType: 'text',
      yType: 'linear',
      mouseOverHandler: () => {},
      mouseOutHandler: () => {},
      mouseMoveHandler: () => {},
      axisLabels: {
        x: '',
        y: ''
      }
    };
  }

  componentDidMount() {
    const ref = this.refs.barChart;
    createCircularTicks(ref);
  }

  componentDidUpdate() {
    const ref = this.refs.barChart;
    createCircularTicks(ref);
  }

  createDomainRangeGenerator(axesType, domainRange, data, type, length) {
    const dataIndex = axesType === 'x' ? 'x' : 'y';
    const barPadding = (length / data.length) > 40 ? 0.02 : 0.04;
    
    let axis;
    switch (type) {
      case 'text':
        axis = band();
        axis
          .domain(data.map((d) => d[dataIndex]))
          .range([0, length])
          .padding(barPadding);
        break;
      case 'linear':
        axis = linear();
        axis
          .domain(
            Array.isArray(domainRange)
              ? domainRange
              : [0, max(data, (d) => d[dataIndex])])
          .range(
            (axesType === 'x')
              ? [0, length]
              : [length, 0]
          );
        break;
      default:
        break;
    }
    return axis;
  }

  defineColor(i, d, colorBars) {
    if (d.color) return d.color;
    if (colorBars) return colorScale(i);
    return null;
  }

  createSvgNode({ m, w, h }) {
    const node = new ReactFauxDOM.Element('svg');
    node.setAttribute('width', w + m.left + m.right);
    node.setAttribute('height', h + m.top + m.bottom);
    return node;
  }

  createSvgRoot({ node, m }) {
    return select(node)
      .append('g')
      .attr('transform', `translate(${m.left}, ${m.top})`);
  }

  createXAxis({ root, m, w, h, x }) {
    const {
      axisLabels: { x: label }
    } = this.props;

    const axis = axisBottom(x);
    axis
      .tickSize(0)
      .tickPadding(15);

    const group = root
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${h})`);

    group.call(axis);
    group
        .append('text')
        .attr('class', 'label')
        .attr('x', w)
        .attr('y', m.bottom - 10)
        .style('text-anchor', 'end')
        .text(label);
  }

  createYAxis({ root, m, w, y }) {
    const {
      axisLabels: { y: label }
    } = this.props;

    const axis = axisLeft(y).tickPadding(10);
    const group = root
      .append('g')
      .attr('class', 'y axis');

    group.call(axis);
    group
        .attr('transform', 'translate(0, 0)')
        .append('text')
        .attr('class', 'label')
        .attr('transform', 'rotate(-90)')
        .attr('x', 0)
        .attr('y', 5 - m.left)
        .attr('dy', '.9em')
        .attr('width', 30)
        .attr('height', 100)
        .style('text-anchor', 'end')
        .text(label);
  }

  createBarChart({ root, h, x, y }) {
    const {
      data,
      mouseOverHandler,
      mouseOutHandler,
      mouseMoveHandler,
      colorBars,
      width
    } = this.props;

    const calculateFill = (d, i) => this.defineColor(i, d, colorBars);
    
    const calculateX = (d) => (x(d.x)+width/((data.length*2)+1))
    const calculateY = (d) => y(d.y);
    const calculateH = (d) => h - y(d.y);

    const mouseover = (d) => mouseOverHandler(d, lastEvent);
    const mouseout = (d) => mouseOutHandler(d, lastEvent);
    const mousemove = (d) => mouseMoveHandler(d, lastEvent);

    const group = root
      .selectAll('rect') // '.bar'
      .data(data);

    group
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .style('fill', calculateFill)
      .attr('x', calculateX)
      .attr('y', calculateY)
      .attr('width', 60)
      .attr('height', calculateH)
      .on('mouseover', mouseover)
      .on('mouseout', mouseout)
      .on('mousemove', mousemove);

    group
      .exit()
      .remove();
  }

  calculateChartParameters() {
    const {
      data,
      axes,
      xType,
      yType,
      margin,
      width,
      height
    } = this.props;

    const m = calculateMargin(axes, margin, false, false);
    const w = reduce(width, m.left, m.right);
    const h = reduce(height, m.top, m.bottom);
    const x = this.createDomainRangeGenerator('x', false, data, xType, w);
    const y = this.createDomainRangeGenerator('y', false, data, yType, h);

    const node = this.createSvgNode({ m, w, h });
    const root = this.createSvgRoot({ node, m });

    return { m, w, h, x, y, node, root };
  }

  render() {
    const p = this.calculateChartParameters();

    this.createXAxis(p);
    this.createYAxis(p);
    this.createBarChart(p);
    const { node } = p;

    return (
      <div ref="barChart">
        {node.toReact()}
      </div>
    );
  }
}