import { Component } from "react";
import { checkboxProps, checkboxState } from "./interface";

class FormCheckbox extends Component<checkboxProps, checkboxState> {
  constructor(props: checkboxProps) {
    super(props);
  }
  render() {
    return (
      <div className="formbold-checkbox-wrapper">
        <label className="formbold-checkbox-label">
          <div className="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              className="formbold-input-checkbox"
              ref={this.props.refCheckbox}
            />
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
        {this.props.checkboxError === false && (
          <label className="formbold-form-label form-error">
            Please, check this box if you want to proceed
          </label>
        )}
      </div>
    );
  }
}

export default FormCheckbox;
