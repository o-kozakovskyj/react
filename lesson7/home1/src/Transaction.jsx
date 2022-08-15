import React, { Component } from 'react';
import Moment from 'react-moment';

class Transaction extends Component {
  render() {
    const formatter = new Intl.NumberFormat('en-GB');
    return (
      <li className="transaction">
        <span className="transaction__date">
          {<Moment format="DD MMM">{this.props.time}</Moment>}
        </span>
        <span className="transaction__time">
          {<Moment format="HH:mm">{this.props.time}</Moment>}
        </span>
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
