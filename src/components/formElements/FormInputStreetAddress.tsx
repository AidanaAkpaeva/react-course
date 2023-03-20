import React from "react";

class FormInputStreetAddress extends React.Component<{}, {}> {
  render() {
    return (
      <div className="formbold-mb-3">
        <label className="formbold-form-label">Street Address</label>
        <input
          type="text"
          name="address"
          id="address"
          className="formbold-form-input"
        />
      </div>
    );
  }
}

export default FormInputStreetAddress;