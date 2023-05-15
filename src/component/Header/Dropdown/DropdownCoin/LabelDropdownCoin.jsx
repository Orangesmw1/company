import React from "react";

const LabelDropdownCoin = (props) => {
  const { content } = props;
  return (
    <div>
      <p className="flex content-drop-coin">{content}</p>
    </div>
  );
};

export default LabelDropdownCoin;
