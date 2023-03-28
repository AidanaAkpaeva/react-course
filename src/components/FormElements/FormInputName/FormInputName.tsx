import { Component } from "react";
import { inputNameProps, inputNameState } from "./interface";

class FormInputName extends Component<inputNameProps, inputNameState> {
  constructor(props: inputNameProps) {
    super(props);
  }

  render() {
    return (
      <div className="formbold-input-flex">
        <div>
          <label className="formbold-form-label">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className={
              this.props.nameError.firstNameError !== false
                ? "formbold-form-input"
                : "formbold-form-input form-error-border"
            }
            ref={this.props.refFirstName}
          />
          {this.props.nameError.firstNameError === false && (
            <label className="formbold-form-label form-error">
              Enter the First name with a uppercase letter
            </label>
          )}
        </div>
        <div>
          <label className="formbold-form-label"> Last name </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className={
              this.props.nameError.lastNameError !== false
                ? "formbold-form-input"
                : "formbold-form-input form-error-border"
            }
            ref={this.props.refLastName}
          />
          {this.props.nameError.lastNameError === false && (
            <label className="formbold-form-label form-error">
              Enter the Last name with a uppercase letter
            </label>
          )}
        </div>
      </div>
    );
  }
}

export default FormInputName;
