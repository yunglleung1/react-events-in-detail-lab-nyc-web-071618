// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onDelayedClick: this.props.onDelayedClick,
      delay: this.props.delay
    }
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.state.onDelayedClick(event)
    }, this.state.delay)
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}

export default DelayedButton
