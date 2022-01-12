function Hello(props) {
  const name = props.name ?? 'Romain';

  return (
    <div className="Hello">
      {name.replace('a', 'b')}
    </div>
  );
}

export default Hello;
