import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import './style.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default class GraphModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps(nextProps) {
        let data = [];
        if(nextProps.data instanceof Array) {
            nextProps.data.map(card => {
              if (card.accounts[0].accountType !== 'M') {     // filtering out Mortgage data
                let temp = {};
                temp['label'] = card.bankName;
                nextProps.iscredit ?
                temp['value'] = +(card.accounts[0].totalBalanceDue).replace(',', '') :
                temp['value'] = +(card.accounts[0].availableBalance).replace(',', '');
                temp['tooltext'] = `<img src="../../../../images/cards/${nextProps.iscredit?'Credit':'debit'}/${card.bankName}.png" />{br}Bank Name: ${card.bankName}{br}Balance ${nextProps.iscredit?'Due ':''}: ${temp.value}`;
                data.push(temp);
              }
            });
        }
        this.setState({data});
    }

    balanceValues() {
      /*
       * returns card balance value to the visuallyhidden div
       */
      return this.state.data.map(card => {
        return(
          <span> {card.label} : {card.value} </span>
        );
      });
    }

    render() {
      console.log('state - > ', this.state.data);

        const chartConfigs = {
            type: 'column2d',
            width: 780,
            height: 400,
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": `Graphical view of the ${!this.props.iscredit?'Debit':'Credit'} cards`,
                    "subCaption": "Balances in £(sterling pounds)",
                    "xAxisName": "Banks",
                    "yAxisName": `${!this.props.iscredit?'Balance':'Balance due'}`,
                    "theme": "fusion"
                },
                data: this.state.data
            },
        };
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Body>
                    <ReactFC {...chartConfigs} />
                    <div className="visuallyhidden">
                      {this.balanceValues()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
