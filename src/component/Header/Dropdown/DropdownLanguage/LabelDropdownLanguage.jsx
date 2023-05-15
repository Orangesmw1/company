import React from "react";

const LabelDropdownLanguage = (props) => {
  const { logo, name } = props;
  return (
    <div>
      <p className="flex content-drop-language">
        <img src={logo} alt="" />
        <span>{name}</span>
      </p>
    </div>
  );
};

export default LabelDropdownLanguage;
