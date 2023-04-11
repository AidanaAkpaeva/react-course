import CloseSVG from "./CloseSVG";
import "./style.scss";
const PopupCard = ({ onClick, info, active }) => {
  return (
    <div className="modal-wrapper" onClick={onClick}>
      {info?.map(({ id, name, image, status, gender, origin, location }) => {
        if (active == id) {
          return (
            <div className="modal">
              <div className="modal-image">
                <img src={image} alt={name} />
              </div>
              <div className="modal-descr">
                <p className="modal-text">
                  <strong>Name: </strong>
                  {name}
                </p>
                <p className="modal-text">
                  <strong>Status: </strong>
                  {status}
                </p>
                <p className="modal-text">
                  <strong>Gender: </strong>
                  {gender}
                </p>
                <p className="modal-text">
                  <strong>Origin: </strong>
                  {origin.name}
                </p>
                <p className="modal-text">
                  <strong>Location: </strong>
                  {location.name}
                </p>
              </div>
              <CloseSVG onClick={onClick} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default PopupCard;
