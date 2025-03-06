import PropTypes from "prop-types";

import ScrollButton from "./ScrollButton";
import { forwardRef } from "react";

function MainSection({ scrollToRef, scrollDirection, children }, ref) {
  return (
    <div
      id="main-section-1"
      className={
        "main-section__container " +
        (scrollDirection === "toTop" ? "reverse" : "")
      }
      ref={ref}
    >
      <div />
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
};

export default forwardRef(MainSection);
