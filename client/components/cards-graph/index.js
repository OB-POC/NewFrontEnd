import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import BarChart from './BarChart';
import ToolTip from './ToolTip';

import './style.css';

export default class GraphModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showToolTip: false,
            top: '0px',
            left: `0px`,
            y: 0,
            x: 0,
            img: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        let data = [];
        if(nextProps.data instanceof Array) {
            nextProps.data.map(card => {
              if (card.accounts[0].accountType !== 'M') {     // filtering out Mortgage data
                let temp = {};
                temp['x'] = card.bankName;
                nextProps.iscredit ?
                temp['y'] = +(card.accounts[0].totalBalanceDue):
                temp['y'] = +(card.accounts[0].availableBalance);
                let path = `../../../../images/cards/${nextProps.iscredit?'Credit':'debit'}/${card.bankName}.png`;
                temp['tooltext'] = `<img src=${path} />`;
                data.push(temp);
              }
            });
        }
        this.setState({data});
    }

    mouseOverHandler = (d, e) => {
        this.setState({
          showToolTip: true,
          top: `${e.layerY - 10}px`,
          left: `${e.layerX + 10}px`,
          y: d.y,
          x: d.x,
          img: d.tooltext
        });
    }
    
    mouseMoveHandler = (e) => {
        if (this.state.showToolTip) {
            this.setState({top: `${e.offsetY - 10}px`, left: `${e.offsetX + 10}px`});
        }
    }
    
    mouseOutHandler = () => {
        this.setState({showToolTip: false});
    }
    
    createTooltip() {
        if (this.state.showToolTip) {
            return (
            <ToolTip
                top={this.state.top}
                left={this.state.left}
            >
                <div className="tooltip-wrapper">
                    <div className='tooltip-img' dangerouslySetInnerHTML={{__html: this.state.img}}></div>
                    <div className='tooltip-bank'>Bank: {this.state.x}</div> 
                    <div className='tooltip-bal'>Balance: {this.state.y}</div> 
                </div>
            </ToolTip>
            );
        }
        return false;
    }

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header>
                    <Modal.Title>
                        <div>Graphical view of the {!this.props.iscredit?'Debit':'Credit'} cards</div>
                        <span className="sub-title">Balances in £(sterling pounds)</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BarChart
                        axisLabels={{x: 'Banks', y: `${!this.props.iscredit?'Balance':'Balance due'}`}}
                        axes
                        colorBars
                        height={400}
                        width={780}
                        data={this.state.data}
                        mouseOverHandler={this.mouseOverHandler}
                        mouseOutHandler={this.mouseOutHandler}
                        mouseMoveHandler={this.mouseMoveHandler}
                    />
                    {this.createTooltip()}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
