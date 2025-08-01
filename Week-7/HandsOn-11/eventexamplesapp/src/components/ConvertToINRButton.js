import React from 'react';

const ConvertToINRButton = ({ onClick, value }) => {
  return (
    <button onClick={() => onClick(value)} s>
      Convert {value} EURO to INR
    </button>
  );
};

export default ConvertToINRButton;