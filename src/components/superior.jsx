import React from "react";

const withHighlight = (WrappedComponent) => {
  return (props) => (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withHighlight;
