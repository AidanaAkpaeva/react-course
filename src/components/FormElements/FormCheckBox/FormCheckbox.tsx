import React from "react";
import { checkboxProps } from "./interface";

const FormCheckbox: React.FC<checkboxProps> = ({ register, errors }) => {
  return (
    <div className="formbold-checkbox-wrapper">
      <label className="formbold-checkbox-label">
        <div className="formbold-relative">
          <input
            {...register("checkbox", {
              required: "Please, check this box if you want to proceed",
            })}
            type="checkbox"
            id="supportCheckbox"
            className="formbold-input-checkbox"
          />
        </div>
        I agree to the defined
        <a href="#"> terms, conditions, and policies</a>
      </label>
      {errors?.checkbox && (
        <label className="formbold-form-label form-error">
          {errors.checkbox.message}
        </label>
      )}
    </div>
  );
};

export default FormCheckbox;
