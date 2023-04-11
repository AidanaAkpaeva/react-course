import { useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import PopupCard from "../PopupCard/PopupCard";

import "./style.scss";

const ListProducts = ({ data, inputValue, press }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [info, setInfo] = useState(null);

  const BASE_PATH = "https://rickandmortyapi.com/api";
  const CHARACTER_PATH = "/character";

  const clickClose = (event) => {
    setOpen(false);
    setActive(event.target.id);
  };

  const clickOpen = (event) => {
    setOpen(true);
    setActive(event.target.id);
    axios.get(BASE_PATH + CHARACTER_PATH).then((data) => {
      setInfo(data.data.results);
    });
  };

  return (
    <>
      {(!data || data.length === 0) && (
        <h3 className="notFound">No data, sorry</h3>
      )}
      <ul className="products">
        {data?.map(({ id, name, image }) => {
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
                  onClick={clickOpen}
                />
                {open === true && active == id && (
                  <PopupCard info={info} onClick={clickClose} active={active} />
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
