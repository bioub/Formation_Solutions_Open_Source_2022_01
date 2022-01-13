function Hello({ name = 'Romain' }) {
  // const name = props.name ?? 'Romain';

  return (
    <div className="Hello">
      {name.replace('a', 'b')}
    </div>
  );
}

export default Hello;
