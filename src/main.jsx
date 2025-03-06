import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import IndexPage from "./components/indexPage/Page.jsx";
import Background from "./components/background/Background.jsx";
import Header from "./components/header/Header.jsx";

import parseGitHubProfile from "./utils/parseGitHubProfile.js";
import profileDescription from "./assets/data/profile_data.md";

if (!localStorage["userData"]) {
  console.log("re-fetch");
  localStorage["userData"] = await parseGitHubProfile(
    "https://api.github.com/users/FenrisuIven"
  ).then((data) => JSON.stringify(data));
}
const profileData = JSON.parse(localStorage["userData"]);
console.log({ localStorage });

const containerProps = {
  width: "100%",
  height: "100vh",
  style: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -10,
  },
};
const widthHeight = {
  width: 800,
  height: 800,
};

const fractalNoiseProps = {
  containerProps,
  seed: "7329664",
};

const topographyProps = {
  containerProps,
  defsPatternProps: widthHeight,
  svgPatternProps: {
    ...widthHeight,
    fill: "var(--root-highlight-green)",
    fillOpacity: 0.25,
  },
};

const pictureProps = {
  containerProps: {
    style: {
      width: "100vw",
      height: "100vh",
      backgroundPositionX: "center",
      backgroundPositionY: "80%",
      backgroundSize: "fit",
      ...containerProps.style,
    },
  },
  imageProps: {
    style: {
      width: "100%",
    },
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background type="picture" props={pictureProps} />
    <Header profileData={profileData} />
    <IndexPage
      profileData={profileData}
      profileDescription={profileDescription}
    />
  </StrictMode>
);
