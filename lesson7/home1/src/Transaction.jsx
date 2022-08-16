import React, { Component } from 'react';
import moment from 'moment';

class Transaction extends Component {
  render() {
    const formatter = new Intl.NumberFormat('en-GB');
    return (
      <li className="transaction">
        <span className="transaction__date">{moment(this.props.time).format('DD MMM')}</span>
        <span className="transaction__time">{moment(this.props.time).format('HH:mm')}</span>
        <span className="transaction__assets">
          {this.props.from} → {this.props.to}
        </span>
        <span className="transaction__rate">{formatter.format(this.props.rate)}</span>
        <span className="transaction__amount">{formatter.format(this.props.amount)}</span>
      </li>
    );
  }
}
export default Transaction;
