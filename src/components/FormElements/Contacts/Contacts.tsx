import React from "react";
import { contactsProps } from "./interface";

const Contacts: React.FC<contactsProps> = ({ register, errors }) => {
  enum messageError {
    empty = "The field is required",
    email = "Enter the correct email address",
    phone = "Enter the correct phone number",
  }

  const emailRegExp = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/g;

  return (
    <div className="formbold-input-flex">
      <div>
        <label className="formbold-form-label"> Email </label>
        <input
          {...register("email", {
            required: messageError.empty,
            pattern: {
              value: emailRegExp,
              message: messageError.email,
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
            required: messageError.empty,
            pattern: {
              value: phoneRegExp,
              message: messageError.phone,
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
