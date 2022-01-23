import React from "react";
import { useContext } from "react";
import "./ChangeMonthToButton.sass";

import { userContext } from "../../context/userContext";

const ChangeMonthToButton = ({ month }) => {
  const { changeMonth, getMonthDisplayName } = useContext(userContext);

  return (
    <button onClick={() => changeMonth(month)} className='monthButton'>
      {getMonthDisplayName(month)}
    </button>
  );
};

export default ChangeMonthToButton;
