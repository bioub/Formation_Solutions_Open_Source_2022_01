class Contact {
  name = 'Romain';

  handleClick = () => {
    console.log('Hello ' + this.name);
  }

  render() {
    // avec la fonction fléché, le this
    // de la fonction est le this d'ici (de la closure)
    setTimeout(this.handleClick, 1000);
  }
}

const romain = new Contact();
romain.render(); // Hello Romain
