import { Link } from "react-router-dom";
import firma from "../img/Firma.png";
import pokeList from "../img/PokeList.png";
import lookFor from "../img/LookFor.png";

const Navbar = () => {
  return (
    <nav className="w3-bar-block w3-hide-small w3-center">
      <Link to="/">
        <img src={firma} />
        HOME
      </Link>
      <Link to="/PokeList">
        <img src={pokeList} />
        POKELIST
      </Link>
      <Link to="/">
        <img src={lookFor} />
        LOOK FOR...
      </Link>
    </nav>
  );
};

export default Navbar;
