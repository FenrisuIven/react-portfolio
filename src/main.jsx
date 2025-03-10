import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import "./assets/styles/colors.css";

import Page from "./components/indexPage/Page.jsx";
import Background from "./components/background/Background.jsx";
import Header from "./components/header/Header.jsx";

import parseGitHubProfile from "./utils/parseGitHubProfile.js";
import profileDescription from "./assets/data/profile_data.md";
import ProjectCard from "./components/projectCard/ProjectCard.jsx";
import {
  CardsContext,
  ProjectCardsDisplay,
} from "./components/ProjectCardsDisplay/ProjectCardsDisplay.jsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

// const widthHeight = {
//   width: 800,
//   height: 800,
// };

// const fractalNoiseProps = {
//   containerProps,
//   seed: "7329664",
// };

// const topographyProps = {
//   containerProps,
//   defsPatternProps: widthHeight,
//   svgPatternProps: {
//     ...widthHeight,
//     fill: "var(--root-highlight-green)",
//     fillOpacity: 0.25,
//   },
// };

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

function RootComponent() {
  const { projs, currentPageIdx, moveToNext, moveToPrev } =
    useContext(CardsContext);

  return (
    <>
      <StrictMode>
        <Background type="picture" props={pictureProps} />
        <Header profileData={profileData} />
        <Page profileData={profileData} profileDescription={profileDescription}>
          <div className="proj-card__container">
            {projs.map((proj, idx) => {
              const isNext = currentPageIdx + 1 === idx;
              const isPrev = currentPageIdx - 1 === idx;

              const disabled = isPrev || isNext;
              const first = idx === 0;
              const last = idx === projs.length - 1;
              const isActive = currentPageIdx === idx;
              const hide = !isNext && !isPrev && !isActive;

              const projLeft_ImageUrl = proj.left;
              const ProjDescriptionRight = proj.right;

              console.log(proj.colors.primaryRGB);

              return (
                <ProjectCard
                  key={idx}
                  disabled={disabled}
                  first={first}
                  last={last}
                  active={isActive}
                  hide={hide}
                  isPrev={isPrev}
                  isNext={isNext}
                  moveToNext={moveToNext}
                  moveToPrev={moveToPrev}
                  style={{
                    background: `color-mix(in srgb, ${proj.colors.primary} 40%, ${proj.colors.white} 10%)`,
                  }}
                >
                  <div className="proj-card__left">
                    <div
                      className="proj-card__left-img"
                      data-primary-color={proj.colors.primaryRGB}
                      style={{
                        backgroundImage: `url(${projLeft_ImageUrl})`,
                      }}
                    ></div>
                  </div>
                  <div className="separator vertical"></div>
                  <div className="proj-card__right">
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h2: ({ children }) => {
                          return <h2 className="proj-title">{children}</h2>;
                        },
                        p: ({ children }) => {
                          return (
                            <p
                              style={{
                                padding: "0.3rem 0",
                                textAlign: "justify",
                              }}
                            >
                              {children}
                            </p>
                          );
                        },
                        hr: () => {
                          return (
                            <div
                              className="separator"
                              style={{ margin: "1rem 0", opacity: "0.5" }}
                            />
                          );
                        },
                      }}
                    >
                      {ProjDescriptionRight}
                    </Markdown>
                  </div>
                </ProjectCard>
              );
            })}
          </div>
        </Page>
      </StrictMode>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <ProjectCardsDisplay>
    <RootComponent />
  </ProjectCardsDisplay>
);
