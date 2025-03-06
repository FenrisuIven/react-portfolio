import PropTypes from "prop-types";
import { useRef } from "react";

import "./page.css";
import Profile from "../profile/Profile";
import MainSection from "./components/MainSection";

function IndexPage({ profileData, profileDescription }) {
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

        <MainSection
          ref={mainSectionBot}
          scrollToRef={mainSectionTop}
          scrollDirection="toTop"
        >
          <Profile profileData={profileData} description={profileDescription} />
        </MainSection>
      </main>
    </>
  );
}

IndexPage.propTypes = {
  profileData: PropTypes.object,
  profileDescription: PropTypes.object,
};

export default IndexPage;
