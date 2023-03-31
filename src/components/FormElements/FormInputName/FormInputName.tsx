import React from "react";
import { inputNameProps } from "./interface";

const FormInputName: React.FC<inputNameProps> = ({ register, errors }) => {
  return (
    <div className="formbold-input-flex">
      <div>
        <label className="formbold-form-label">First name</label>
        <input
          {...register("firstName", {
            required: "The field is required",
            pattern: {
              value: /^[A-Z]+[a-zA-Z]*$/,
              message: "Enter the First name with a uppercase letter",
            },
          })}
          type="text"
          id="firstname"
          className="formbold-form-input"
        />
        {errors?.firstName && (
          <label className="formbold-form-label form-error">
            {errors.firstName.message}
          </label>
        )}
      </div>
      <div>
        <label className="formbold-form-label"> Last name </label>
        <input
          {...register("lastName", {
            required: "The field is required",
            pattern: {
              value: /^[A-Z]+[a-zA-Z]*$/,
              message: "Enter the Last name with a uppercase letter",
            },
          })}
          type="text"
          id="lastName"
          className="formbold-form-input"
        />
        {errors?.lastName && (
          <label className="formbold-form-label form-error">
            {errors.lastName.message}
          </label>
        )}
      </div>
    </div>
  );
};

export default FormInputName;
