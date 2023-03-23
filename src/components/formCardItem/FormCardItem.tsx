import "./style.scss";

const FormCardItem = ({
  Firstname,
  Lastname,
  Email,
  Phone,
  Country,
  City,
  AddressStreet,
}) => {
  return (
    <li className="formCardItem-item">
      <div className="formCardItem-content">
        <h2 className="formCardItem-title">Your data:</h2>
        <p className="formCardItem-wrapper">
          Fullname:&nbsp;
          <span className="formCardItem-inner">
            {Firstname} {Lastname}
          </span>
        </p>

        <p className="formCardItem-wrapper">
          Email:&nbsp;
          <span className="formCardItem-inner">{Email}</span>
        </p>

        <p className="formCardItem-wrapper">
          Number phone:&nbsp;
          <span className="formCardItem-inner">{Phone}</span>
        </p>

        <p className="formCardItem-wrapper">
          Address:&nbsp;
          <span className="formCardItem-inner">
            {Country}, {City}, {AddressStreet}
          </span>
        </p>
      </div>
    </li>
  );
};

export default FormCardItem;
