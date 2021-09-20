export const ColorTool = (props) => {

  // const colorListItems = [];

  // back in the 1980s
  // for (let x = 0; x < colors.length; x++) {
  //   colorListItems.push(<li key={colors[x].id}>{colors[x].name}</li>);
  // }

  // declarative approach, iterate over the items of an array and perform a side effect
  // colors.forEach(color => {
  //   colorListItems.push(<li key={color.id}>{color.name}</li>);
  // });

  // declarative, good semantic meaning, no side effect used
  // const colorListItems = colors.map(color => <li key={color.id}>{color.name}</li>);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );
};