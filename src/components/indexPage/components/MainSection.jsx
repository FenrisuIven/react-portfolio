import PropTypes from "prop-types";

import ScrollButton from "./ScrollButton";
import { forwardRef } from "react";

function MainSection({ scrollToRef, scrollDirection, children, style }, ref) {
  return (
    <div
      className={
        "main-section__container " +
        (scrollDirection === "toTop" ? "reverse" : "")
      }
      ref={ref}
      style={style}
    >
      <div></div>
      {children}
      <ScrollButton
        targetSectionRef={scrollToRef}
        direction={scrollDirection}
      />
    </div>
  );
}

MainSection.propTypes = {
  scrollToRef: PropTypes.ref,
  scrollDirection: PropTypes.oneOf(["toTop", "toBottom"]),
  children: PropTypes.element,
  style: PropTypes.object,
};

export default forwardRef(MainSection);
