import React from "react";
import "./style.scss";
import { CountryList } from "../helpers/CountryList";
import { CityList } from "../helpers/CityList";
import FormCardItem from "../components/formCardItem/FormCardItem";

interface inputTextProps {
  inputTextFirstName: any;
  inputTextLastName: any;
  inputTextEmail: any;
  inputTextPhone: any;
  selectorCountry: any;
  selectorCity: any;
  inputTextStreetAddress: any;
  btnRegister: any;
}

class FormPage extends React.Component<{}, inputTextProps> {
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
      btnRegister: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        counrty: "",
        city: "",
        streetAddress: "",
      },
    };
  }

  handleChangeInputTextFirstName = ({ target: { value } }) => {
    this.setState({
      inputTextFirstName: value,
    });
  };

  handleChangeInputTextLastName = ({ target: { value } }) => {
    this.setState({
      inputTextLastName: value,
    });
  };

  handleChangeInputTextEmail = ({ target: { value } }) => {
    this.setState({
      inputTextEmail: value,
    });
  };

  handleChangeInputTextPhone = ({ target: { value } }) => {
    this.setState({
      inputTextPhone: value,
    });
  };

  handleChangeSelectorCountry = ({ target: { value } }) => {
    this.setState({
      selectorCountry: value,
    });
  };

  handleChangeSelectorCity = ({ target: { value } }) => {
    this.setState({
      selectorCity: value,
    });
  };

  handleChangeInputStreetAddress = ({ target: { value } }) => {
    this.setState({
      inputTextStreetAddress: value,
    });
  };

  handleRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({
      inputTextFirstName: "",
      inputTextLastName: "",
      inputTextEmail: "",
      inputTextPhone: "",
      selectorCountry: "",
      selectorCity: "",
      inputTextStreetAddress: "",
      btnRegister: {
        firstName: this.state.inputTextFirstName,
        lastName: this.state.inputTextLastName,
        email: this.state.inputTextEmail,
        phone: this.state.inputTextPhone,
        country: this.state.selectorCountry,
        city: this.state.selectorCity,
        streetAddress: this.state.inputTextStreetAddress,
      },
    });
  };

  render() {
    return (
      <>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form method="POST">
              <div className="formbold-form-title">
                <h2 className="">Create your account right now!</h2>
              </div>

              {/* First and last name */}
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
                    value={this.state.inputTextFirstName}
                    onChange={this.handleChangeInputTextFirstName}
                    required
                  />
                </div>
                <div>
                  <label className="formbold-form-label"> Last name </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="formbold-form-input"
                    value={this.state.inputTextLastName}
                    onChange={this.handleChangeInputTextLastName}
                  />
                </div>
              </div>

              {/* Email and phone*/}
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label"> Email </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="formbold-form-input"
                    value={this.state.inputTextEmail}
                    onChange={this.handleChangeInputTextEmail}
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
                    value={this.state.inputTextPhone}
                    onChange={this.handleChangeInputTextPhone}
                  />
                </div>
              </div>

              {/* Country and city */}
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label"> Country </label>
                  <select
                    className="formbold-form-input"
                    value={this.state.selectorCountry}
                    onChange={this.handleChangeSelectorCountry}
                  >
                    {CountryList.map(({ id, nameCountry }) => (
                      <option key={id}>{nameCountry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="formbold-form-label"> City </label>
                  <select
                    className="formbold-form-input"
                    value={this.state.selectorCity}
                    onChange={this.handleChangeSelectorCity}
                  >
                    {CityList.map(({ id, nameCity }) => (
                      <option key={id}>{nameCity}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Street adress */}
              <div className="formbold-mb-3">
                <label className="formbold-form-label">Street Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="formbold-form-input"
                  value={this.state.inputTextStreetAddress}
                  onChange={this.handleChangeInputStreetAddress}
                />
              </div>

              {/* User agreement */}
              <div className="formbold-checkbox-wrapper">
                <label className="formbold-checkbox-label">
                  <div className="formbold-relative">
                    <input
                      type="checkbox"
                      id="supportCheckbox"
                      className="formbold-input-checkbox"
                    />
                  </div>
                  I agree to the defined
                  <a href="#"> terms, conditions, and policies</a>
                </label>
              </div>

              <button className="formbold-btn" onClick={this.handleRegister}>
                Register Now
              </button>
            </form>
          </div>
        </div>
        <FormCardItem
          FirstName={this.state.btnRegister.firstName}
          LastName={this.state.btnRegister.lastName}
          Email={this.state.btnRegister.email}
          Phone={this.state.btnRegister.phone}
          Country={this.state.btnRegister.country}
          City={this.state.btnRegister.city}
          StreetAddress={this.state.btnRegister.streetAddress}
        />
      </>
    );
  }
}

export default FormPage;
