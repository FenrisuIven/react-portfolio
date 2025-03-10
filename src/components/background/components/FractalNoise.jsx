import PropTypes from "prop-types";

function FractalNoise({ containerProps, seed }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" {...containerProps}>
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.002"
            numOctaves="1"
            seed={seed}
          />

          <feComponentTransfer>
            <feFuncA
              type="discrete"
              tableValues=".1 .9 .6 .9 .3 .9 .6 .9 .6 .1 .1"
            />

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
FractalNoise.propTypes = {
  containerProps: PropTypes.object,
  seed: PropTypes.string,
};

export default FractalNoise;
