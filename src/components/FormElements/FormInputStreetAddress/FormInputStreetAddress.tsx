import React from "react";
import { inputSteetAddressProps } from "./interface";

const FormInputStreetAddress: React.FC<inputSteetAddressProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="formbold-mb-3">
      <label className="formbold-form-label">Street Address</label>
      <input
        {...register("streetAddress", {
          required: "The field is required",
        })}
        type="text"
        id="address"
        className="formbold-form-input"
      />
      {errors?.streetAddress && (
        <label className="formbold-form-label form-error">
          {errors.streetAddress.message}
        </label>
      )}
    </div>
  );
};

export default FormInputStreetAddress;
