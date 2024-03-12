import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../Hooks/useInput";

export default function LoginUseState() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputValidation: handleEmailValidation,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputValidation: handlePasswordValidation,
    hasError: passwordHasError,
  } = useInput("test", (value) => hasMinLength(value, 6));

  // Submit
  function handleSubmit(evt) {
    evt.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailValidation}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email."}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordValidation}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={
            passwordHasError && "Password must have more than 6 characters."
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
