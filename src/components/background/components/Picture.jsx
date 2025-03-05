import PropTypes from "prop-types";

function Picture({ containerProps }) {
  return (
    <>
      <div style={{ ...containerProps.style, backgroundImage: `url(5.jpg)` }} />
    </>
  );
}

Picture.propTypes = {
  containerProps: PropTypes.object,
  imageProps: PropTypes.object,
};

export default Picture;
