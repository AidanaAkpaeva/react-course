import { Component } from "react";

import { countryList } from "../../../helpers/CountryList";
import { cityList } from "../../../helpers/CityList";

import { selectProps } from "./interface";

class FormSelectAddress extends Component<selectProps> {
  constructor(props: selectProps) {
    super(props);
  }

  render() {
    return (
      <div className="formbold-input-flex">
        <div>
          <label className="formbold-form-label"> Country </label>
          <select
            className={
              this.props.addressError.countryError !== false
                ? "formbold-form-input"
                : "formbold-form-input form-error-border"
            }
            ref={this.props.refCountry}
          >
            {countryList.map(({ id, nameCountry }) => (
              <option key={id}>{nameCountry}</option>
            ))}
          </select>
          {this.props.addressError.countryError === false && (
            <label className="formbold-form-label form-error">
              Select a country
            </label>
          )}
        </div>
        <div>
          <label className="formbold-form-label"> City </label>
          <select
            className={
              this.props.addressError.cityError !== false
                ? "formbold-form-input"
                : "formbold-form-input form-error-border"
            }
            ref={this.props.refCity}
          >
            {cityList.map(({ id, nameCity }) => (
              <option key={id}>{nameCity}</option>
            ))}
          </select>
          {this.props.addressError.cityError === false && (
            <label className="formbold-form-label form-error">
              Select a city
            </label>
          )}
        </div>
      </div>
    );
  }
}

export default FormSelectAddress;
