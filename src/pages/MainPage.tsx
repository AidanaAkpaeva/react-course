import { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "../components/ListProducts/ListProducts";
import "./style.scss";
import PageLoader from "../components/PageLoader/PageLoader";

const HomePage = () => {
  const [appState, setAppState] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_PATH = "https://rickandmortyapi.com/api";
  const CHARACTER_PATH = "/character";

  useEffect(() => {
    setLoading(true);
    axios.get(BASE_PATH + CHARACTER_PATH).then((data) => {
      setAppState(data.data.results);
    });
    setLoading(false);
  }, [setAppState]);

  return (
    <div className="container-home container">
      {loading === true ? <PageLoader /> : <ListProducts data={appState} />}
    </div>
  );
};

export default HomePage;
