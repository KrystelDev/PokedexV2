import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const SelectedPokemon = () => {
  // Data pokemon Selected
  const location = useLocation();
  const baseDataURL = "https://pokeapi.co/api/v2/pokemon/";
  const completedDataUR = baseDataURL + location.state.name;
  const [pokemon, setPokemon] = useState();
  //IMAGES
  //front:
  const baseImgFrontURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const [completedImgFrontURL, setCompletedImgFrontURL] = useState();
  //Back:
  const baseImgBackURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
  const [completedImgBackURL, setCompletedImgBackURL] = useState();
  //ShinyFront
  const baseImgShinyFrontURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
  const [completedImgShinyFrontURL, setCompletedImgShinyFrontURL] = useState();
  //ShinyBack
  const baseImgShinyBacktURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/";
  const [completedImgShinyBackURL, setCompletedImgShinyBackURL] = useState();

  //Array list of Pokemon
  https: useEffect(() => {
    axios({
      url: completedDataUR,
    })
      .then((response) => {
        setPokemon(response.data);
        setCompletedImgFrontURL(baseImgFrontURL + response.data.id + ".png");
        setCompletedImgBackURL(baseImgBackURL + response.data.id + ".png");
        setCompletedImgShinyFrontURL(
          baseImgShinyFrontURL + response.data.id + ".png"
        );
        setCompletedImgShinyBackURL(
          baseImgShinyBacktURL + response.data.id + ".png"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setPokemon]);

  return pokemon ? (
    <Fragment>
      <Navbar></Navbar>
      <div className="screen">
        <div>
          <p className="name">{pokemon.name}</p>
        </div>
        <div className="images">
          <div className="imgFront">
            <img src={completedImgFrontURL} />
          </div>
          <div className="imgOther">
            <img src={completedImgBackURL} />
            <img src={completedImgShinyFrontURL} />
            <img src={completedImgShinyBackURL} />
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Height</th>
                <th>Weight</th>
                <th>Type</th>
              </tr>
              <tr>
                <td>
                  <sup>{pokemon.height / 100} m</sup>
                </td>
                <td>
                  <sup>{pokemon.weight / 10} kg</sup>
                </td>
                <td>
                  {pokemon.types.map((item, index) => {
                    return (
                      <sup key={index} className="type">
                        {item.type.name}
                      </sup>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  ) : (
    <div></div>
  );
};

export default SelectedPokemon;
