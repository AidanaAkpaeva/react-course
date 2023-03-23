const FormInputContacts = ({ refEmail, refPhone }) => {
    return (
      <div className="formbold-input-flex">
        <div>
          <label className="formbold-form-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            className="formbold-form-input"
            ref={refEmail}
          />
        </div>
        <div>
          <label className="formbold-form-label"> Phone number </label>
          <input
            type="tel"
            name="phone"
            pattern="/\+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}/"
            id="phone"
            className="formbold-form-input"
            ref={refPhone}
          />
        </div>
      </div>
    );
}

export default FormInputContacts;