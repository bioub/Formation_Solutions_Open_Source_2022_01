import React, { Component } from 'react'

export class MultiStateButton extends Component {
  state = {
    index: 0,
  }
  handleClick = () => {
    // const items = this.props.items ?? [];
    const { items = [] } = this.props;
    const index = this.state.index;
    this.setState({
      index: (index + 1) % items.length,
    });
  }
  render() {
    // const items = this.props.items ?? [];
    const { items = [] } = this.props;

    const index = this.state.index;

    return (
      <button className="MultiStateButton" onClick={this.handleClick}>
        {items[index]}
      </button>
    )
  }
}

export default MultiStateButton
