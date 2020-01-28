import React, { Component } from "react";

class FruitCard extends Component {
  state = {
    quantity: 0
  };

  add = () =>
    this.setState({
      quantity: this.state.quantity + 1
    });

  remove = () =>
    this.setState({
      quantity: this.state.quantity - 1
    });

  clear = () =>
    this.setState({
      quantity: 0
    });

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div>Quantity: {this.state.quantity}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
        <button onClick={this.clear}>Clear</button>
        <hr />
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

export default FruitCard;
