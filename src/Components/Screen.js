import React from "react";

const Screen = (props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Screen;
