import React, { Component } from "react";
import ReactDOM from "react-dom";

class FruitCard extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div>Quantity: {this.state.quantity}</div>
        <button
          onClick={() => {
            this.setState({
              quantity: this.state.quantity + 1
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              quantity: this.state.quantity - 1
            });
          }}
        >
          -
        </button>
        <hr />
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

const App = () => (
  <div>
    <FruitCard name={"Orange"} price={5.0} />
    <FruitCard name={"Pineapple"} price={1.5} />
    <FruitCard name="Apple" price={3.3} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
