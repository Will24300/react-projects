import React from "react";

function Click() {
  const handleClick = () => {
    window.alert("Clicked");
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}

export default Click;
