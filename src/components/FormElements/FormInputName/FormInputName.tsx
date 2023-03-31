import React from "react";
import { inputNameProps } from "./interface";

const FormInputName: React.FC<inputNameProps> = ({ register, errors }) => {
  enum messageError {
    empty = "The field is required",
    upperCase = "Enter the Name with a uppercase letter",
  }

  const regExp = /^[A-Z]+[a-zA-Z]*$/;

  return (
    <div className="formbold-input-flex">
      <div>
        <label className="formbold-form-label">First name</label>
        <input
          {...register("firstName", {
            required: messageError.empty,
            pattern: {
              value: regExp,
              message: messageError.upperCase,
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
            required: messageError.empty,
            pattern: {
              value: regExp,
              message: messageError.upperCase,
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
