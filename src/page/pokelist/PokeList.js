import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

const PokeList = () => {
  const [list, setList] = useState([]);
  let srcPokemon = "";

  //Array list of Pokemon
  useEffect(() => {
    axios({
      url: "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0",
    })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [list]);

  return (
    <Fragment>
      <Navbar></Navbar>
      {list.map((item, index) => {
        list[index].index = index;
        srcPokemon =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          (1 + index) +
          ".png";
        return (
          <aside key={index} className="list">
            <p>{item.name}</p>
            <p>{item.index}</p>
            <img src={srcPokemon} />
          </aside>
        );
      })}
    </Fragment>
  );
};

export default PokeList;
