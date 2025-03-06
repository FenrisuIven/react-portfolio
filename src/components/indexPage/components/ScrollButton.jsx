import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function ScrollButton({ targetSectionRef, direction }) {
  const content = direction === "toTop" ? "▲" : "▼";
  return (
    <button
      className="scroll-button"
      onClick={() => {
        targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {content}
    </button>
  );
}

ScrollButton.propTypes = {
  targetSectionRef: PropTypes.object,
  direction: PropTypes.oneOf(["toTop", "toBottom"]),
};

export default ScrollButton;
