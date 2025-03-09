import PropTypes from "prop-types";
import { createContext, useState } from "react";

import { ProjClockwork } from "../../utils/index";

const CardsContext = createContext();

function ProjectCardsDisplay({ children }) {
  const projs = [ProjClockwork, ProjClockwork, ProjClockwork];
  const [currentPageIdx, setCurrentIdx] = useState(0);

  const moveToNext = () => {
    if (currentPageIdx === projs.length - 1) return;
    setCurrentIdx((prevState) => prevState + 1);
  };

  const moveToPrev = () => {
    if (currentPageIdx === 0) return;
    setCurrentIdx((prevState) => prevState - 1);
  };

  return (
    <>
      <CardsContext.Provider
        value={{
          projs,
          currentPageIdx,
          moveToNext,
          moveToPrev,
        }}
      >
        {children}
      </CardsContext.Provider>
    </>
  );
}

ProjectCardsDisplay.propTypes = {
  refs: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.element,
};

export { ProjectCardsDisplay, CardsContext };
