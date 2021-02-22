import React from 'react';

const Greetings = (props) => {
  let greet;
  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'it':
      greet = 'Ciao';
      break;
    default:
      return;
  }
  return (
    <div>
      <h2>
        {greet} 
        {props.children}
      </h2>
    </div>
  );
};

export default Greetings;
