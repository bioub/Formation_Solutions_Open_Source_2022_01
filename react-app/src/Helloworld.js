import React, { Component } from 'react';

export class Helloworld extends Component {
  state = {
    prenom: 'Romain',
  };

  handleChange = (event) => {
    this.setState({
      prenom: event.target.value,
    });
  }

  render() {
    // const prenom = this.state.prenom;
    const { prenom } = this.state;

    return (
      <div className="Helloworld">
        <div>
          Prénom : <input value={prenom} onChange={this.handleChange} />
        </div>
        <p>Hello {prenom}!</p>
      </div>
    );
  }
}

export default Helloworld;
