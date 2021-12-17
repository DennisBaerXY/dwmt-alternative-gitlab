import React from "react";
import Screen from "./Screen";
import SelectionBox from "./SelectionBox";
import "./SelectionScreen.sass";

const SelectionScreen = () => {
  return (
    <Screen>
      <div className='selectionScreen'>
        <h1 className='selectionScreenHeader'>
          Snap photos and share like never before
        </h1>
        <div className='flexContainerRow'>
          <SelectionBox />
          <SelectionBox />
        </div>
      </div>
    </Screen>
  );
};

export default SelectionScreen;
