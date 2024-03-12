import { useState } from "react";
export function useInput(defaultValue, validationFct) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFct(enteredValue);

  // All values in once.
  function handleInputChange(event) {
    // Parenthesis pour do an Object return.
    setEnteredValue(event.target.value);
    // Reset Input validation (onBlur)
    setDidEdit(false);
  }
  /// VALIDATION ///
  function handleInputValidation() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    handleInputChange,
    handleInputValidation,
    hasError: didEdit && !valueIsValid,
  };
}
