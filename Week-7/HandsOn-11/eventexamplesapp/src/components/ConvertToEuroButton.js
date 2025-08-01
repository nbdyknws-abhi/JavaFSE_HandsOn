import React from 'react';

const ConvertToEuroButton = ({ onClick, value }) => {
  return (
    <button onClick={() => onClick(value)} >
      Convert {value} INR to EURO
    </button>
  );
};

export default ConvertToEuroButton;