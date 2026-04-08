import React from "react";

function Button({ text }) {
  return (
    <div>
      <button onClick={() => window.alert(`You clicked on ${text}`)}>
        {text}
      </button>
    </div>
  );
}

export default Button;
