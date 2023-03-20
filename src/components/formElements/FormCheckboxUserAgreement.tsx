import React from "react";

class FormCheckboxUserAgreement extends React.Component<{}, {}> {
  render() {
    return (
      <div className="formbold-checkbox-wrapper">
      <label className="formbold-checkbox-label">
        <div className="formbold-relative">
          <input
            type="checkbox"
            id="supportCheckbox"
            className="formbold-input-checkbox"
          />
        </div>
        I agree to the defined
        <a href="#"> terms, conditions, and policies</a>
      </label>
    </div>
    );
  }
}

export default FormCheckboxUserAgreement;