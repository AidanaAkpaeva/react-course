import "./style.scss";

const FormCardItem = ({ Firstname, Lastname }) => {
  return (
    <div className="container formCardItem-container-wrapper">
      <div className="formCardItem-container">
        <h2 className="formCardItem-title">Your data:</h2>
        <p className="formCardItem-wrapper">  
          Fullname:&nbsp;
          <span className="formCardItem-inner">
            {Firstname} {Lastname}
          </span>
        </p>

        <p className="formCardItem-wrapper">
          Email:&nbsp;
          <span className="formCardItem-inner"></span>
        </p>

        <p className="formCardItem-wrapper">
          Number phone:&nbsp;
          <span className="formCardItem-inner"></span>
        </p>

        <p className="formCardItem-wrapper">
          Address:&nbsp;
          <span className="formCardItem-inner"></span>
        </p>
      </div>
    </div>
  );
};

export default FormCardItem;
