import PropTypes from "prop-types";
import { useRef } from "react";

import "./page.css";
import Profile from "../profile/Profile";
import MainSection from "./components/MainSection";

function IndexPage({ profileData, profileDescription, children }) {
  const mainSectionTop = useRef(null);
  const mainSectionBot = useRef(null);

  return (
    <>
      <main>
        <MainSection
          ref={mainSectionTop}
          scrollToRef={mainSectionBot}
          scrollDirection="toBottom"
        >
          <Profile profileData={profileData} description={profileDescription} />
        </MainSection>
        <div></div>
        <MainSection
          ref={mainSectionBot}
          scrollToRef={mainSectionTop}
          scrollDirection="toTop"
          style={{ justifyContent: "flex-start" }}
        >
          {children}
        </MainSection>
      </main>
    </>
  );
}

IndexPage.propTypes = {
  profileData: PropTypes.object,
  profileDescription: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default IndexPage;
