import { Fragment } from "react";
import Navbar from "../components/Navbar";
import lookFor from "../img/LookFor.png";

const LookFor = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="screen">
        <div className="center flex">
          <img src={lookFor} />
          <label>
            Write the name of the Pokemon
            <input type="text" />
          </label>
        </div>
      </div>
    </Fragment>
  );
};
export default LookFor;
