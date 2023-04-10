import "./style.scss";
const PopupCard = ({
  onClick,
  name,
  image,
  status,
  gender,
  origin,
  location,
}) => {
  return (
    <div className="modal-wrapper" onClick={onClick}>
      <div className="modal">
        <div className="modal-image">
          <img src={image} />
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
            {origin}
          </p>
          <p className="modal-text">
            <strong>Location: </strong>
            {location}
          </p>
        </div>
        <svg onClick={onClick} height="200" viewBox="0 0 200 200" width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      </div>
    </div>
  );
};

export default PopupCard;
