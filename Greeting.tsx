// src/components/Greeting.js
import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to our website. We hope you have a great experience!</p>
    </div>
  );
};

export default Greeting;
