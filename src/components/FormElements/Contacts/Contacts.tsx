import React from "react";
import { contactsProps } from "./interface";

const Contacts: React.FC<contactsProps> = ({ register, errors }) => {
  return (
    <div className="formbold-input-flex">
      <div>
        <label className="formbold-form-label"> Email </label>
        <input
          {...register("email", {
            required: "The field is required",
            pattern: {
              value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
              message: "Enter the correct email address",
            },
          })}
          type="email"
          id="email"
          className="formbold-form-input"
        />
        {errors?.email && (
          <label className="formbold-form-label form-error">
            {errors.email.message}
          </label>
        )}
      </div>
      <div>
        <label className="formbold-form-label"> Phone number </label>
        <input
          {...register("phone", {
            required: "The field is required",
            pattern: {
              value:
                /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g,
              message: "Enter the correct phone number",
            },
          })}
          type="tel"
          id="phone"
          className="formbold-form-input"
        />
        {errors?.phone && (
          <label className="formbold-form-label form-error">
            {errors.phone.message}
          </label>
        )}
      </div>
    </div>
  );
};

export default Contacts;
