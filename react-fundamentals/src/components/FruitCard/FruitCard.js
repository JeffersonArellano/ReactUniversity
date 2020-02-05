import React, { Component } from "react";
//import "./FruitCard.css";
import styles from "./FruitCard.module.css";

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
    const hasItems = this.state.quantity > 0;
    const activeClass = hasItems ? styles["card-active"] : "";
    const classes = styles.card + " " + activeClass;
    return (
      <div className={classes}>
        <h3>{this.props.name}</h3>
        <div>Quantity: {this.state.quantity}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
        <button onClick={this.clear}>Clear</button>
        <hr />
        <p>$ {this.props.price}</p>
        <p>Total Price: ${this.props.price * this.state.quantity}</p>
      </div>
    );
  }
}

export default FruitCard;
