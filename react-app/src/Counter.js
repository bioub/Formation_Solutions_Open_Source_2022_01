import { Component, useState } from 'react';

// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   handleClick = (event) => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     const count = this.state.count;

//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {count}
//       </button>
//     );
//   }
// }

function Counter() {
  //    [0    , () => {}]
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="Counter" onClick={handleClick}>
      {count}
    </button>
  );
}

export default Counter;
