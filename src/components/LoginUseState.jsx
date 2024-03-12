import { useState } from "react";
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
  // Submit
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(enteredValues);
  }
  // Email
  /*  function handleEmailChange(evt) {
    setEnteredEmail(evt.target.value);
  } */
  // Password
  /* function handlePasswordChange(evt) {
    setEnteredPassword(evt.target.value);
  } */
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputValidation("email")}
            onChange={(evt) => handleInputChange("email", evt.target.value)}
            value={enteredValues.email}
          />
          {isInvalidEmail && (
            <div className="control-error">
              Please enter a valid email address
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(evt) => handleInputChange("password", evt.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
