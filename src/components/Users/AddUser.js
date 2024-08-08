import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();

    if (
      enteredUsername.trim().length > 0 &&
      enteredAge.trim().length > 0 &&
      enteredAge > 0
    ) {
      
      props.onAddUser(enteredUsername, enteredAge);
      console.log(enteredUsername, enteredAge);
    }

    setEnteredUsername("");
    setEnteredAge("");
  }
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={(event) => setEnteredUsername(event.target.value)}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={(event) => setEnteredAge(event.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
