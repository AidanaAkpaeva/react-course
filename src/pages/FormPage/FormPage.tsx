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
      formItems: [],
      dataSave: false,
    };
  }

  checkValidForm() {
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

    return this.state.formError;
  }

  form = () => {
    return {
      firstName: this.refFirstName.current!.value,
      lastName: this.refLastName.current!.value,
      email: this.refEmail.current!.value,
      phone: this.refPhone.current!.value,
      country: this.refCountry.current!.value,
      city: this.refCity.current!.value,
      streetAddress: this.refStreetAddress.current!.value,
      checkbox: this.refCheckbox.current!.checked,
    };
  };

  setForm = () => {
    this.setState((prevState) => ({
      ...prevState,
      formItems: [...this.state.formItems, this.form()],
    }));
  };

  handleClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let validForm = Object.values(this.checkValidForm()).every(
      (value) => value === true
    );
    if (validForm === true) {
      await this.setState(
        (prevState) => ({
          ...prevState,
          form() {},
          dataSave: true,
        }),
        this.setForm
      );
      this.handleClear();
    } else {
      this.setState((prevState) => ({
        ...prevState,
        form() {},
        dataSave: false,
      }));
    }
  };

  handleClear = () => {
    (this.refFirstName.current!.value = ""),
      (this.refLastName.current!.value = ""),
      (this.refEmail.current!.value = ""),
      (this.refPhone.current!.value = ""),
      (this.refCountry.current!.value = "Not selected"),
      (this.refCity.current!.value = "Not selected"),
      (this.refStreetAddress.current!.value = ""),
      (this.refCheckbox.current!.checked = false);
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
              {this.state.dataSave === true && (
                <div className="form-message-save">Data saving!</div>
              )}
            </form>
          </div>
        </div>
        <FormCardList formItems={this.state.formItems} />
      </>
    );
  }
}

export default FormPage;
