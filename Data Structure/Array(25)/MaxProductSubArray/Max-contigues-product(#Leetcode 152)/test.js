function Counter({ name, value }) {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      {name}: {value}
    </div>
  );
}

const Counter = React.memo(
  function Counter({ name, value }) {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      {name}: {value}
    </div>
  );
});