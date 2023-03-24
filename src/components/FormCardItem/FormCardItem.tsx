import "./style.scss";

const FormCardItem = ({
  firstName,
  lastName,
  email,
  phone,
  country,
  city,
  addressStreet,
}) => {
  return (
    <li className="formCardItem-item">
      <div className="formCardItem-content">
        <h2 className="formCardItem-title">Your data:</h2>
        <p className="formCardItem-wrapper">
          Fullname:&nbsp;
          <span className="formCardItem-inner">
            {firstName} {lastName}
          </span>
        </p>

        <p className="formCardItem-wrapper">
          Email:&nbsp;
          <span className="formCardItem-inner">{email}</span>
        </p>

        <p className="formCardItem-wrapper">
          Number phone:&nbsp;
          <span className="formCardItem-inner">{phone}</span>
        </p>

        <p className="formCardItem-wrapper">
          Address:&nbsp;
          <span className="formCardItem-inner">
            {country}, {city}, {addressStreet}
          </span>
        </p>
      </div>
    </li>
  );
};

export default FormCardItem;
