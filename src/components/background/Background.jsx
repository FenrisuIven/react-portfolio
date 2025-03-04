import PropTypes from "prop-types";

//import BgImage from "../../assets/svg/topography.svg?react";

function Background({ containerProps, seed }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" {...containerProps}>
        {/* <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" {...defsPatternProps}>
            <BgImage {...svgPatternProps}/> 
          </pattern>  
        </defs> */}
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.002" numOctaves="1" seed={seed} />

          <feComponentTransfer>
            <feFuncA type="discrete" tableValues=".1 .9 .6 .9 .3 .9 .6 .9 .6 .1 .1" />

            <feFuncR type="discrete" tableValues=".2" />
            <feFuncB type="discrete" tableValues=".4" />
          </feComponentTransfer>

          <feGaussianBlur stdDeviation="8" />
        </filter>
        <rect width="100%" height="100%" filter="url(#filter)" />
      </svg>
    </>
  );
}
Background.propTypes = {
  containerProps: PropTypes.object,
  seed: PropTypes.string,
};

// Background.propTypes = {
//   outerSvgProps: PropTypes.object,
//   defsPatternProps: PropTypes.object,
//   svgPatternProps: PropTypes.object,
//   rectProps: PropTypes.object
// }

export default Background;
