import React from "react";

const FormInputName = React.forwardRef<HTMLInputElement>(({}, {refFirstName, refLastName}) => {
    return (
      <div className="formbold-input-flex">
        <div>
          <label htmlFor="firstname" className="formbold-form-label">
            First name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="formbold-form-input"
            ref={refFirstName}
          />
        </div>
        <div>
          <label className="formbold-form-label"> Last name </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="formbold-form-input"
            ref={refLastName}
          />
        </div>
      </div>
    );
  })
export default FormInputName;
