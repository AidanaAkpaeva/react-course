import React from "react";

class FormInputContacts extends React.Component<{}, {}> {
  render() {
    return (
      <div className="formbold-input-flex">
        <div>
          <label className="formbold-form-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            className="formbold-form-input"
          />
        </div>
        <div>
          <label className="formbold-form-label"> Phone number </label>
          <input
            type="tel"
            name="phone"
            pattern="+7 (ddd) ddd-dd-dd"
            id="phone"
            className="formbold-form-input"
          />
        </div>
      </div>
    );
  }
}

export default FormInputContacts;