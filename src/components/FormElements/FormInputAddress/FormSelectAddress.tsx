import React from "react";
import { selectProps } from "./interface";
import { countryList } from "../../../helpers/CountryList";
import { cityList } from "../../../helpers/CityList";

const FormSelectAddress: React.FC<selectProps> = ({ register, errors }) => {
  const isValid = (value) => {
    return value !== "Not selected" || "The field is required";
  };

  return (
    <div className="formbold-input-flex">
      <div>
        <label className="formbold-form-label"> Country </label>
        <select
          {...register("country", {
            validate: (value) => isValid(value),
          })}
          className="formbold-form-input"
        >
          {countryList.map(({ id, nameCountry }) => (
            <option key={id}>{nameCountry}</option>
          ))}
        </select>
        {errors?.country && (
          <label className="formbold-form-label form-error">
            Select a country
          </label>
        )}
      </div>
      <div>
        <label className="formbold-form-label"> City </label>
        <select
          {...register("city", {
            validate: (value) => isValid(value),
          })}
          className="formbold-form-input"
        >
          {cityList.map(({ id, nameCity }) => (
            <option key={id}>{nameCity}</option>
          ))}
        </select>
        {errors?.city && (
          <label className="formbold-form-label form-error">
            Select a city
          </label>
        )}
      </div>
    </div>
  );
};

export default FormSelectAddress;
