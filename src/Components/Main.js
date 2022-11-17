import { useEffect, useState } from "react";

import Card from "./Card";
import axios from "axios";

const Main = () => {
  // [variable, funcionLlenaVariable ]
  const numerPokemon = 200;  
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${numerPokemon}`);

  const pokeFun = async () => {
    const res = await axios.get(url);
    setPokeData(res.data.results);
    setLoading(false);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Pokemon App
        </a>
      </nav>
      <div className="container"> 
        <Card pokemon={pokeData} loading={loading} ></Card>
      </div>
    </>
  );
};

export default Main;
