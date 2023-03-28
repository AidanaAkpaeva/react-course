import { Component } from "react";
import { contactsProps } from "./interface";

class Contacts extends Component<contactsProps> {
  constructor(props: contactsProps) {
    super(props);
  }

  render() {
    return (
      <div className="formbold-input-flex">
        <div>
          <label className="formbold-form-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            className={
              this.props.contactsError.emailError !== false
                ? "formbold-form-input"
                : "formbold-form-input form-error-border"
            }
            ref={this.props.refEmail}
          />
          {this.props.contactsError.emailError === false && (
            <label className="formbold-form-label form-error">
              Enter the correct email address
            </label>
          )}
        </div>
        <div>
          <label className="formbold-form-label"> Phone number </label>
          <input
            type="tel"
            name="phone"
            pattern="/\+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}/"
            id="phone"
            className={
              this.props.contactsError.phoneError !== false
                ? "formbold-form-input"
                : "formbold-form-input form-error-border"
            }
            ref={this.props.refPhone}
          />
          {this.props.contactsError.phoneError === false && (
            <label className="formbold-form-label form-error">
              Enter the correct phone number
            </label>
          )}
        </div>
      </div>
    );
  }
}

export default Contacts;
