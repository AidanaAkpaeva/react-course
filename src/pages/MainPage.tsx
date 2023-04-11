import { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "../components/ListProducts/ListProducts";
import "./style.scss";
import PageLoader from "../components/PageLoader/PageLoader";
import Searchbar from "../components/Searchbar/Searchbar";

const HomePage = () => {
  const [appState, setAppState] = useState(null);
  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [press, setPress] = useState(false);

  const BASE_PATH = "https://rickandmortyapi.com/api";
  const CHARACTER_PATH = "/character";

  useEffect(() => {
    setLoading(true);
    axios.get(BASE_PATH + CHARACTER_PATH).then((data) => {
      setAppState(data.data.results);
    });
    setLoading(false);
  }, [setAppState]);

  const handleChange = (event) => setInputValue(event.target.value);

  const onKeyPress = (event) => {
    event.key === "Enter" ? setPress(true) : setPress(false);
  };

  const handleReset = () => {
    setPress(false);
    setInputValue("");
  };

  return (
    <div className="container-home container">
      <Searchbar
        onChange={handleChange}
        onKeyPress={onKeyPress}
        handleReset={handleReset}
        value={inputValue}
      />
      {loading === true ? (
        <PageLoader />
      ) : (
        <ListProducts data={appState} inputValue={inputValue} press={press} />
      )}
    </div>
  );
};

export default HomePage;
