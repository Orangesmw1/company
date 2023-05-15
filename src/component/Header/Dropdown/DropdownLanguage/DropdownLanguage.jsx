import React from "react";
import logoVN from "../../../../image/Ensign/vietnam.svg";
import logoUS from "../../../../image/Ensign/US.svg";
import LabelDropdownLanguage from "./LabelDropdownLanguage";
import { Dropdown } from "antd";

const items = [
  {
    label: <LabelDropdownLanguage logo={logoVN} name={"Vietnam"} />,
    key: "0",
  },
  {
    label: <LabelDropdownLanguage logo={logoUS} name={"US"} />,
    key: "1",
  },
];

const DropdownLanguage = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["hover"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <img src={logoVN} alt="" />
      </a>
    </Dropdown>
  );
};

export default DropdownLanguage;
