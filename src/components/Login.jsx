import { useRef, useState } from "react";
export default function Login() {
  // Require less code than with useState().
  const email = useRef();
  const password = useRef();
  // Validation
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  // Submit
  function handleSubmit(evt) {
    evt.preventDefault();
    const entEmail = email.current.value;
    const entPassword = password.current.value;
    if (!entEmail.includes("@")) {
      setIsInvalidEmail(true);
      // Stop submit logic.
      return;
    }

    console.log(entEmail, entPassword);
  }
  function handleEmailFocus() {
    // Reset
    setIsInvalidEmail(false);
  }

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
            ref={email}
            onFocus={handleEmailFocus}
          />
          {isInvalidEmail && (
            <div className="control-error">
              Please enter a valid email address
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
