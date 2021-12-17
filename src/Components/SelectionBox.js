import React from "react";
import "./SelectionBox.sass";

const SelectionBox = () => {
  return (
    <div className='selectionBox'>
      <button className='selectVegtableRound'></button>

      <h2 className='boxHeader'>Lorem, ipsum.</h2>
      <p className='boxDescription'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel corrupti
        officia harum ad distinctio mollitia temporibus porro fugit explicabo
        dolorum cum vero voluptatibus, atque neque libero, beatae modi molestiae
        deleniti.
      </p>

      <button className='learnMore'>Learn more</button>
    </div>
  );
};

export default SelectionBox;
