import React from "react";
import { CountryList } from "./../../helpers/CountryList";
import { CityList } from "./../../helpers/CityList";

class FormSelectAddress extends React.Component<{}, {}> {
  render() {
    return (
      <div className="formbold-input-flex">
        <div>
          <label className="formbold-form-label"> Country </label>
          <select className="formbold-form-input">
            {CountryList.map(({ id, nameCountry }) => (
              <option key={id}>{nameCountry}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="formbold-form-label"> City </label>
          <select className="formbold-form-input">
            {CityList.map(({ id, nameCity }) => (
              <option key={id}>{nameCity}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default FormSelectAddress;
