import React, { useState } from "react";
import logoVN from "../../../../image/Ensign/vietnam.svg";
import logoUS from "../../../../image/Ensign/US.svg";
import LabelDropdownLanguage from "./LabelDropdownLanguage";
import { Dropdown } from "antd";

const DropdownLanguage = () => {
  const [logo, setLogo] = useState(logoVN);

  const handleSetLanguage = (name) => {
    if (name === "Vietnam") {
      setLogo(logoVN);
    } else {
      setLogo(logoUS);
    }
  };

  const items = [
    {
      label: (
        <LabelDropdownLanguage
          handleSetLanguage={handleSetLanguage}
          logo={logoVN}
          name={"Vietnam"}
        />
      ),
      key: "0",
    },
    {
      label: (
        <LabelDropdownLanguage
          handleSetLanguage={handleSetLanguage}
          logo={logoUS}
          name={"US"}
        />
      ),
      key: "1",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["hover"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <img src={logo} alt="" />
      </a>
    </Dropdown>
  );
};

export default DropdownLanguage;
