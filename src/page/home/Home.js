import { Fragment } from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="screen">
        <div className="center">
          <h1>HOME</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit sint facere quidem fugiat animi tempora, dolores
            pariatur, iste magnam, eveniet ipsa? Corporis cupiditate iste earum,
            consectetur eligendi aperiam exercitationem corrupti.
          </p>
          <div className="w3-content w3-justify w3-padding-64" id="about">
            <h2>My Name</h2>
            <p>
              Some text about me. Some text about me. I am lorem ipsum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
