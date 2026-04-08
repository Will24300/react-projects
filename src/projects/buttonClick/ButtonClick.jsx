import React from "react";
import Button from "../../components/Button";

function ButtonClick() {
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
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Button text="Button 1" /> <Button text="Button 2" />{" "}
        <Button text="Button 3" />
      </div>
    </>
  );
}

export default ButtonClick;
