import { forwardRef } from "react";
import PropTypes from "prop-types";

import "./projectCard.css";

function ProjectCard(
  {
    disabled = false,
    active = false,
    hide = false,
    first = false,
    last = false,
    isNext = false,
    isPrev = false,
    moveToPrev,
    moveToNext,
    children,
    style,
  },
  ref
) {
  return (
    <>
      <div
        ref={ref}
        className={`proj-card ${disabled ? "disabled " : ""}${active ? "active " : ""}${hide ? "hide " : ""}${first ? "first " : ""}${last ? "last " : ""}${isNext ? "next " : ""}${isPrev ? "prev" : ""}`.trim()}
        style={style}
      >
        <div className="proj-card__view-prev" onClick={moveToPrev}></div>
        {children}
        <div className="proj-card__view-next" onClick={moveToNext}></div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  hide: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  isNext: PropTypes.bool,
  isPrev: PropTypes.bool,
  moveToPrev: PropTypes.func,
  moveToNext: PropTypes.func,
  children: PropTypes.element,
  style: PropTypes.object,
};

export default forwardRef(ProjectCard);
