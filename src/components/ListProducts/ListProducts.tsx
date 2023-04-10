import { useState } from "react";
import Card from "../Card/Card";
import PopupCard from "../PopupCard/PopupCard";
import Searchbar from "../Searchbar/Searchbar";
import "./style.scss";

const ListProducts = ({ data }) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [press, setPress] = useState(false);
  if (!data || data.length === 0) {
    return <h3 className="notFound">No data, sorry</h3>;
  }

  const clickOpen = (id) => {
    setOpen(true);
    setActive(id);
  };

  const clickClose = (id) => {
    setOpen(false);
    setActive(id);
  };

  const onKeyPress = (event) => {
    event.key === "Enter" ? setPress(true) : setPress(false);
  };

  const handleReset = () => {
    setPress(false);
    setInputValue("");
  };

  return (
    <>
      <Searchbar
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={onKeyPress}
        handleReset={handleReset}
        value={inputValue}
      />
      <ul className="products">
        {data.map(({ id, name, image, status, gender, origin, location }) => {
          if (
            inputValue !== "" &&
            press === true &&
            name.toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return (
              <>
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  onClick={() => clickOpen(id)}
                />
                {open && id === active && (
                  <PopupCard
                    name={name}
                    image={image}
                    status={status}
                    gender={gender}
                    origin={origin.name}
                    location={location.name}
                    onClick={() => clickClose(id)}
                  />
                )}
              </>
            );
          }
        })}
      </ul>
    </>
  );
};

export default ListProducts;
