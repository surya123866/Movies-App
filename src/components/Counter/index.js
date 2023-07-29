import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({count: count - 1})
    }
  }

  onIncrement = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-element">
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div className="counter-item">{count}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
