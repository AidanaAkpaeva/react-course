import "./style.scss";

const FormCardItem = ({FirstName, LastName, Email, Phone, Country, City, StreetAddress}) => {
  return (
    <div className="container formCardItem-container-wrapper">
      <div className="formCardItem-container">
        <h2 className="formCardItem-title">Your data:</h2>
        <p className="formCardItem-wrapper">
          Fullname:&nbsp;
          <span className="formCardItem-inner">{FirstName}&nbsp;{LastName}</span>
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
          <span className="formCardItem-inner">{Country} {City} {StreetAddress}</span>
        </p>
      </div>
    </div>
  );
};

export default FormCardItem;
