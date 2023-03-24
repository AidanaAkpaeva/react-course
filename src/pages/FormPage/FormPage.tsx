import React, { createRef } from "react";
import "./../style.scss";
import { FormState } from "./interface";

import FormInputName from "../../components/FormElements/FormInputName/FormInputName";
import Contacts from "../../components/FormElements/Contacts/Contacts";
import FormInputStreetAddress from "../../components/FormElements/FormInputStreetAddress/FormInputStreetAddress";
import FormCheckbox from "../../components/FormElements/FormCheckBox/FormCheckbox";
import FormSelectAddress from "../../components/FormElements/FormInputAddress/FormSelectAddress";
import FormCardList from "../../components/FormCardList/FormCardList";

class FormPage extends React.Component<{}, FormState> {
  private refFirstName = createRef<HTMLInputElement>();
  private refLastName = createRef<HTMLInputElement>();
  private refEmail = createRef<HTMLInputElement>();
  private refPhone = createRef<HTMLInputElement>();
  private refCountry = createRef<HTMLSelectElement>();
  private refCity = createRef<HTMLSelectElement>();
  private refStreetAddress = createRef<HTMLInputElement>();
  private refCheckbox = createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      form: {
        inputTextFirstName: "",
        inputTextLastName: "",
        inputTextEmail: "",
        inputTextPhone: "",
        selectorCountry: "",
        selectorCity: "",
        inputTextStreetAddress: "",
        inputCheckbox: false,
      },
      formError: {
        firstNameError: true,
        lastNameError: true,
        emailError: true,
        phoneError: true,
        countryError: true,
        cityError: true,
        streetAddressError: true,
        checkboxError: true,
      },
      // formItems: [],
    };
  }

  checkValidForm = () => {
    // checkFirstName
    this.refFirstName.current?.value !== "" &&
    this.refFirstName.current?.value[0] ===
      this.refFirstName.current?.value[0].toUpperCase()
      ? (this.state.formError.firstNameError = true)
      : (this.state.formError.firstNameError = false);

    // checkLastName
    this.refLastName.current?.value !== "" &&
    this.refLastName.current?.value[0] ===
      this.refLastName.current?.value[0].toUpperCase()
      ? (this.state.formError.lastNameError = true)
      : (this.state.formError.lastNameError = false);

    // checkEmail
    this.refEmail.current?.value !== "" &&
    this.refEmail.current?.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? (this.state.formError.emailError = true)
      : (this.state.formError.emailError = false);

    // checkPhone
    this.refPhone.current?.value !== "" &&
    this.refPhone.current?.value.match(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    )
      ? (this.state.formError.phoneError = true)
      : (this.state.formError.phoneError = false);

    // checkCountry
    this.refCountry.current?.value !== "Not selected"
      ? (this.state.formError.countryError = true)
      : (this.state.formError.countryError = false);
    // checkCity
    this.refCity.current?.value !== "Not selected"
      ? (this.state.formError.cityError = true)
      : (this.state.formError.cityError = false);

    // checkStreetAddress
    this.refStreetAddress.current?.value !== ""
      ? (this.state.formError.streetAddressError = true)
      : (this.state.formError.streetAddressError = false);

    // checkCheckbox
    this.refCheckbox.current?.checked === true
      ? (this.state.formError.checkboxError = true)
      : (this.state.formError.checkboxError = false);
  };

  handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({
      form: {
        inputTextFirstName: this.refFirstName.current!.value,
        inputTextLastName: this.refLastName.current!.value,
        inputTextEmail: this.refEmail.current!.value,
        inputTextPhone: this.refPhone.current!.value,
        selectorCountry: this.refCountry.current!.value,
        selectorCity: this.refCity.current!.value,
        inputTextStreetAddress: this.refStreetAddress.current!.value,
        inputCheckbox: this.refCheckbox.current!.checked,
      },
    });
    this.checkValidForm();

    // const temp = [...this.state.formItems];
    // temp.push(1);
    // this.setState({ formItems: temp });
  };

  render() {
    return (
      <>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form>
              <h2 className="formbold-form-title">Create your account now!</h2>
              {/* First and last name */}
              <FormInputName
                nameError={this.state.formError}
                refFirstName={this.refFirstName}
                refLastName={this.refLastName}
              />

              {/* Email and phone*/}
              <Contacts
                contactsError={this.state.formError}
                refEmail={this.refEmail}
                refPhone={this.refPhone}
              />

              {/* Country and city */}
              <FormSelectAddress
                addressError={this.state.formError}
                refCountry={this.refCountry}
                refCity={this.refCity}
              />

              {/* Street adress */}
              <FormInputStreetAddress
                streetAddressError={this.state.formError.streetAddressError}
                refStreetAddress={this.refStreetAddress}
              />

              {/* User agreement */}
              <FormCheckbox
                refCheckbox={this.refCheckbox}
                checkboxError={this.state.formError.checkboxError}
              />

              <button onClick={this.handleClick} className="formbold-btn">
                Register Now
              </button>
            </form>
          </div>
        </div>
        <FormCardList form={this.state.form} />
      </>
    );
  }
}

export default FormPage;
