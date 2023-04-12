import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import ListProducts from "../components/ListProducts/ListProducts";
import PageLoader from "../components/PageLoader/PageLoader";
import Searchbar from "../components/Searchbar/Searchbar";

import { BASE_PATH, CHARACTER_PATH } from "../helpers/Constants";

import "./style.scss";

const HomePage = () => {
  const [appState, setAppState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<number>();

  const [inputValue, setInputValue] = useState("");
  const [press, setPress] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      axios.get(BASE_PATH + CHARACTER_PATH).then((data) => {
        setAppState(data.data.results);
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.status);
      } else {
        console.error(error);
      }
    }
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
      {error && <div>{error}</div>}
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
