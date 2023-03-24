import { Component } from "react";
import { inputSteetAddressProps, inputSteetAddressState } from "./interface";

class FormInputStreetAddress extends Component<
  inputSteetAddressProps,
  inputSteetAddressState
> {
  constructor(props: inputSteetAddressProps) {
    super(props);
  }

  render() {
    return (
      <div className="formbold-mb-3">
        <label className="formbold-form-label">Street Address</label>
        <input
          type="text"
          name="address"
          id="address"
          className={this.props.streetAddressError !== false ? "formbold-form-input" : "formbold-form-input form-error-border"}
          ref={this.props.refStreetAddress}
        />
        {this.props.streetAddressError === false ? (
          <label className="formbold-form-label form-error">
            Enter the street addredss
          </label>
        ) : null}
      </div>
    );
  }
}

export default FormInputStreetAddress;
