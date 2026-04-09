import React from "react";
import "./greet.css";

function Greet() {
  const handleSubmit = (formData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    window.alert(`Hello ${firstName} ${lastName}!`);
  };
  return (
    <>
      <div>
        <form action={handleSubmit} className="myF">
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            className="myI"
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            className="myI"
          />
          <button className="myB">GREET ME</button>
        </form>
      </div>
    </>
  );
}

export default Greet;
