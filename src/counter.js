import { Component } from "react"

import "./index.css"
import "./styles.css";

class Counter extends Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }
  onReset=()=>{
    this.setState((prevState)=> ({count:0}))
  }
  render() {
    const { count } = this.state
    return (
      <div className="container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" onClick={this.onDecrement}>
          Decrease
        </button>
        <button className="button1" onClick={this.onReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Counter