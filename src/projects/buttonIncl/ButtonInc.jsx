import React, { useState } from "react";

function ButtonInc() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <a href="#">Home</a> |
          </li>
          <li>
            <a href="#">Exercise 1</a> |
          </li>
          <li>
            <a href="#">Exercise 2</a> |
          </li>
          <li>
            <a href="#">Exercise 3</a> |
          </li>
          <li>
            <a href="#">Exercise 4</a> |
          </li>
          <li>
            <a href="#">Exercise 5</a> |
          </li>
          <li>
            <a href="#">Exercise 6</a> |
          </li>
          <li>
            <a href="#">Exercise 7</a> |
          </li>
          <li>
            <a href="#">Exercise 8</a> |
          </li>
          <li>
            <a href="#">Exercise 9</a>
          </li>
        </ul>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {counter < 1 ? (
          <p>Button has been clicked : {counter} time</p>
        ) : (
          <p>Button has been clicked : {counter} times</p>
        )}{" "}
        <br />
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}

export default ButtonInc;
