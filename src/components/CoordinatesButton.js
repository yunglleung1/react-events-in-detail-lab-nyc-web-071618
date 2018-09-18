// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onReceiveCoordinates: this.props.onReceiveCoordinates
    }
  }

  handleClick = (event) => {
    this.state.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton
