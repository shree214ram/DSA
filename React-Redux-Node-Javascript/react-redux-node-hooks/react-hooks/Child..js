import React from "react";

const child = (props) => {
  const { myCallBack } = props;
  console.log("child re render");
  return (
    <div>
      child componenet
      <button
        onClick={() => {
          myCallBack();
        }}
      >
        Add +1
      </button>
    </div>
  );
};

export default React.memo(child);
