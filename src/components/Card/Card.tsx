import { useEffect, useState } from "react";
import axios from "axios";

import PopupCard from "../PopupCard/PopupCard";

import { CardProps } from "./interface";
import { BASE_PATH, CHARACTER_PATH } from "../../helpers/Constants";
import "./style.scss";

const Card: React.FC<CardProps> = ({ id, image, name }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [info, setInfo] = useState(null);

  const clickOpen = async (event) => {
    setOpen(true);
    setActive(event.target.id);
    await axios.get(BASE_PATH + CHARACTER_PATH).then((data) => {
      setInfo(data.data.results);
    });
  };

  const clickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const escClickClose = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", escClickClose);
    return () => window.removeEventListener("keydown", escClickClose);
  }, []);

  return (
    <>
      <li key={id} className="product-wrapper">
        <div id={id} className="product-item" onClick={clickOpen}>
          <img src={image} className="product-image" />
          <div className="product-list">
            <div className="product-content">
              <h4 className="product-descr">{name}</h4>
            </div>
          </div>
        </div>
      </li>

      {open === true && active == id && (
        <PopupCard info={info} onClickClose={clickClose} active={active} />
      )}
    </>
  );
};

export default Card;
