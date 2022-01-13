import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Helloworld from './Helloworld';
import MultiStateButton from './MultiStateButton';
import Select from './Select';
import Todos from './Todos';
import UserForm from './UserForm';

function Demo() {
  /*
  <div class="Demo">
    <h2>hello</h2>
  </div>
  */
  //  const divEl = document.createElement('div');
  //  divEl.className = 'Demo';

  //  const h2El = document.createElement('h2');
  //  h2El.append('hello');

  //  divEl.append(h2El);

  //  return divEl;
  // return React.createElement('div', { className: 'Demo' },
  //   React.createElement('h2', {}, 'hello'),
  // );

  return (
    <div className="Demo">
      <h2>hello</h2>
      <Hello name={"Bob"} />
      <Hello name="Bob" />
      <h2 className="menu">counter</h2>
      <Counter />
      <h2>user-form</h2>
      <UserForm />
      <h2>helloworld</h2>
      <Helloworld />
      <h2>multi-state-button</h2>
      <MultiStateButton items={['Un', 'Deux', 'Trois']} />
      <h2>select</h2>
      <Select />
      <h2>todos</h2>
      <Todos />
    </div>
  );
}

export default Demo;

/*
class Demo extends Component {
  render() {

  }
}
*/
