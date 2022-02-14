import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const PokeList = () => {
  const [list, setList] = useState([]);
  let srcPokemon = "";

  //Array list of Pokemon
  useEffect(() => {
    axios({
      url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="screen">
        {list.map((item, index) => {
          list[index].index = index;
          srcPokemon =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            (1 + index) +
            ".png";
          return (
            <Link to={`/${item.name}`} key={index} state={item}>
              <section key={index} className="list">
                <p>{item.name}</p>
                <p>{item.index}</p>
                <img src={srcPokemon} />
              </section>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PokeList;
