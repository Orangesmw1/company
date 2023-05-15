import React from "react";

const LabelDropdownLanguage = (props) => {
  const { logo, name, handleSetLanguage } = props;
  return (
    <div>
      <p
        className="flex content-drop-language"
        onClick={() => handleSetLanguage(name)}
      >
        <img src={logo} alt="" />
        <span>{name}</span>
      </p>
    </div>
  );
};

export default LabelDropdownLanguage;
