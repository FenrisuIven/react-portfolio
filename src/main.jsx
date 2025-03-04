import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import IndexPage from "./components/indexPage/IndexPage.jsx";
import Background from "./components/background/Background.jsx";

const outerSvgProps = {
  width: "100%",
  height: "100vh",
  style: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -10,
  },
};

// const defsPatternProps = {
//   width: 400,
//   height: 400
// };

// const svgPatternProps = {
//   width: 400,
//   height: 400,
//   fill: 'var(--root-highlight-green)',
//   fillOpacity: 0.25
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background containerProps={outerSvgProps} seed="7329664" />
    <IndexPage />
  </StrictMode>
);
