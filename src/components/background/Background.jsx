import PropTypes from "prop-types";

import Topography from "./components/Topography";
import FractalNoise from "./components/FractalNoise";
import Picture from "./components/Picture";

//import BgImage from "../../assets/svg/topography.svg?react";

function Background({ type, props }) {
  let component;
  switch (type) {
    case "topography":
      component = <Topography {...props} />;
      break;
    case "fractalNoise":
      component = <FractalNoise {...props} />;
      break;
    case "picture":
      component = <Picture {...props} />;
      break;
  }
  return component;
}

Background.propTypes = {
  type: PropTypes.oneOf(["topography", "fractalNoise", "picture"]),
  props: PropTypes.object,
};

export default Background;
