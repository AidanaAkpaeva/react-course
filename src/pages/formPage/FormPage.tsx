import React, {createRef} from "react";
import "./../style.scss";
import { FormState } from "./interface";

import FormCardItem from "../../components/formCardItem/FormCardItem";
import FormInputName from "../../components/formElements/FormInputName";
import FormInputContacts from "../../components/formElements/FormInputContacts";
import FormInputStreetAddress from "../../components/formElements/FormInputStreetAddress";
import FormCheckboxUserAgreement from "../../components/formElements/FormCheckboxUserAgreement";
import FormSelectAddress from "../../components/formElements/FormSelectAddress";

class FormPage extends React.Component<{}, FormState> {
  private refFirstName = createRef<HTMLInputElement>();
  private refLastName = createRef<HTMLInputElement>();
  private refEmail = createRef<HTMLInputElement>();
  private refPhone = createRef<HTMLInputElement>();
  private refCountry = createRef<HTMLSelectElement>();
  private refCity = createRef<HTMLSelectElement>();
  private refStreetAddress = createRef<HTMLInputElement>();

  constructor(prors: {}) {
    super(prors);
    this.state = {
      inputTextFirstName: "",
      inputTextLastName: "",
      inputTextEmail: "",
      inputTextPhone: "",
      selectorCountry: "",
      selectorCity: "",
      inputTextStreetAddress: "",
      formItems: [],
    };
  }

  handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({
      inputTextFirstName: this.refFirstName.current!.value,
      inputTextLastName: this.refLastName.current!.value,
      inputTextEmail: this.refEmail.current!.value,
      inputTextPhone: this.refPhone.current!.value,
      selectorCountry: this.refCountry.current!.value,
      selectorCity: this.refCity.current!.value,
      inputTextStreetAddress: this.refStreetAddress.current!.value,
    });

    const temp = [...this.state.formItems];
    temp.push(1);
    this.setState({ formItems: temp });
  };

  render() {
    return (
      <>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form method="POST" onSubmit={this.handleClick}>
              <h2 className="formbold-form-title">Create your account now!</h2>
              {/* First and last name */}
              <FormInputName
                refFirstName={this.refFirstName}
                refLastName={this.refLastName}
              />
              {/* Email and phone*/}
              <FormInputContacts
                refEmail={this.refEmail}
                refPhone={this.refPhone}
              />

              {/* Country and city */}
              <FormSelectAddress
                refCountry={this.refCountry}
                refCity={this.refCity}
              />

              {/* Street adress */}
              <FormInputStreetAddress
                refStreetAddress={this.refStreetAddress}
              />

              {/* User agreement */}
              <FormCheckboxUserAgreement />

              <button className="formbold-btn">Register Now</button>
            </form>
          </div>
        </div>
        <ul className="container formCardItem-list">
          {this.state.formItems.map((_, index) => (
            <FormCardItem
              key={index}
              Firstname={this.state.inputTextFirstName}
              Lastname={this.state.inputTextLastName}
              Email={this.state.inputTextEmail}
              Phone={this.state.inputTextPhone}
              Country={this.state.selectorCountry}
              City={this.state.selectorCity}
              AddressStreet={this.state.inputTextStreetAddress}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default FormPage;
