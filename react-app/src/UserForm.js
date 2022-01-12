import React, { Component } from 'react';

export class UserForm extends Component {
  state = {
    prenom: 'Romain',
    email: 'romain.bohdanowicz@gmail.com',
    isActive: true,
  };
  handleChange = (event) => {
    /** @type {HTMLElement} */
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form className="UserForm">
        <p>
          Prénom :
          <input
            type="text"
            name="prenom"
            value={this.state.prenom}
            onChange={this.handleChange}
          />
        </p>
        <p>
          Email :
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </p>
        <p>
          Compte actif :
          <input
            type="checkbox"
            name="isActive"
            checked={this.state.isActive}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <button>Envoyer</button>
        </p>
      </form>
    );
  }
}

export default UserForm;
