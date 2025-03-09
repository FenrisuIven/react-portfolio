import PropTypes from "prop-types";

import "./scrollButton.css";
import ArrowSVG from "../../../assets/svg/arrow.svg?react";

function ScrollButton({ targetSectionRef, direction }) {
  const style = {
    transform: direction === "toTop" ? "rotate(180deg)" : "",
  };
  return (
    <button
      className="scroll-button"
      onClick={() => {
        targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <ArrowSVG width="85px" height="45px" strokeWidth="1" style={style} />
    </button>
  );
}

ScrollButton.propTypes = {
  targetSectionRef: PropTypes.object,
  direction: PropTypes.oneOf(["toTop", "toBottom"]),
};

export default ScrollButton;
