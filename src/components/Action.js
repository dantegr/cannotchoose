import React from 'react';

const Action = (props) => {
  
  return (
    <div>
      <button onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      Will you choose for me?</button>
    </div>

  );

};

export default Action;