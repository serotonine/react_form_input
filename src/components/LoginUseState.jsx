import { useState } from "react";
import Input from "./Input";
export default function LoginUseState() {
  /* const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState(""); */
  const [enteredValues, setEnteredValues] = useState({
    email: "type your email",
    password: "type password",
  });
  // VALIDATION //
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;
  // Submit
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(enteredValues);
  }

  // All values in once.
  function handleInputChange(id, value) {
    // Parenthesis pour do an Object return.
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    // Reset Input validation (onBlur)
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: false,
    }));
  }
  /// VALIDATION ///
  function handleInputValidation(id) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: true,
    }));
  }
  const isInvalidEmail = didEdit.email && !enteredValues.email.includes("@");
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputValidation("email")}
          onChange={(evt) => handleInputChange("email", evt.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email."}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputValidation("password")}
          onChange={(evt) => handleInputChange("password", evt.target.value)}
          value={enteredValues.password}
          error={
            passwordIsInvalid && "Password must have more than 6 characters."
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
