import { useEffect, useState } from "react";

import CardPokemon from "./CardPokemon";
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
        <CardPokemon pokemon={pokeData} loading={loading} ></CardPokemon>
      </div>
    </>
  );
};

export default Main;
