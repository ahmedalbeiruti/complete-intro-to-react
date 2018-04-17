import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement('h1', { style: { color: props.color } }, props.title)
  // );
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};
const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of thrones" color="YellowGreen" />
      <MyTitle title="Stranger things" color="GreenYellow" />
      <MyTitle title="Rick and Morty" color="burlywoodßwe" />
      <MyTitle title="House of cards" color="peru" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
