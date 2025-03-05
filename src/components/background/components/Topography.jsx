import PropTypes from "prop-types";

import BgImage from "../../../assets/svg/topography.svg?react";

function Topography({ containerProps, defsPatternProps, svgPatternProps }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" {...containerProps}>
        <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" {...defsPatternProps}>
            <BgImage {...svgPatternProps} />
          </pattern>
          <filter id="filter">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#bg)"
          filter="url(#filter)"
        />
      </svg>
    </>
  );
}

Topography.propTypes = {
  containerProps: PropTypes.object,
  defsPatternProps: PropTypes.object,
  svgPatternProps: PropTypes.object,
};

export default Topography;
