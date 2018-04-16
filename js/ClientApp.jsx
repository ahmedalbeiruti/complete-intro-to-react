import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', { style: { color: props.color } }, props.title)
  );
};
const MyFirstComponent = function() {
  return React.createElement('div', null, [
    React.createElement(MyTitle, {
      title: 'Game of thrones',
      color: 'YellowGreen'
    }),
    React.createElement(MyTitle, {
      title: 'Stranger things',
      color: 'GreenYellow'
    }),
    React.createElement(MyTitle, { title: 'Rick and Morty', color: 'Lime' }),
    React.createElement(MyTitle, { title: 'House of cards', color: 'peru' })
  ]);
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
