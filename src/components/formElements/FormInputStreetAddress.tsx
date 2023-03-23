const FormInputStreetAddress = ({ refStreetAddress }) => {
  return (
    <div className="formbold-mb-3">
      <label className="formbold-form-label">Street Address</label>
      <input
        type="text"
        name="address"
        id="address"
        className="formbold-form-input"
        ref={refStreetAddress}
      />
    </div>
  );
};

export default FormInputStreetAddress;
