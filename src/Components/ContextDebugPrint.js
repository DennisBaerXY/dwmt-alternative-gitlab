import React, { useContext } from "react";
import { userContext } from "../context/userContext";
const ContextDebugPrint = () => {
  return (
    <div>
      <h1>ContextDebugPrint</h1>
      <p>
        <code>{JSON.stringify(useContext(userContext), null, 2)}</code>
      </p>
    </div>
  );
};

export default ContextDebugPrint;
