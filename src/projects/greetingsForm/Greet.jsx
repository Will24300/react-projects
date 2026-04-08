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
        <form action={handleSubmit}>
          <input type="text" placeholder="first name" name="firstName" />
          <input type="text" placeholder="last name" name="lastName" />
          <button>GREET ME</button>
        </form>
      </div>
    </>
  );
}

export default Greet;
