import { useState } from "react";
export default function Signup() {
  const [isMatchPwd, setIsMatchPwd] = useState(true);
  // Submit
  function handleSubmit(evt) {
    evt.preventDefault();
    // Reset
    setIsMatchPwd(true);
    // Use native feature.
    // All input elements must have the prop 'name'.
    const _form = new FormData(evt.target);
    // Get single input
    /* const  emailValue = _form.get('email') */
    // Get all inputs. return an object.
    const _values = Object.fromEntries(_form.entries());
    // Multiples inputs with same name are lost.
    // Return an Array.
    const _multipleValues = _form.getAll("acquisition");
    // Add it to the rest.
    _values.acquisition = _multipleValues;
    // VALIDATION //
    if (_values.password !== _values["confirm-password"]) {
      setIsMatchPwd(false);
      return;
    }
    // Native method reset.
    evt.target.reset();

    console.log(_values);
  }
  function handlePwdFocus() {
    setIsMatchPwd(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={8}
            onFocus={handlePwdFocus}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={8}
            onFocus={handlePwdFocus}
          />
          {!isMatchPwd && (
            <div className="control-error">Passwords must match!</div>
          )}
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
