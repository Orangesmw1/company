import React from "react";
import LabelDropdownCoin from "./LabelDropdownCoin";
import { Dropdown } from "antd";

const items = [
  {
    label: <LabelDropdownCoin content={"VND"} />,
    key: "0",
  },
  {
    label: <LabelDropdownCoin content={"USD"} />,
    key: "1",
  },
];
const DropdownCoin = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["hover"]}
    >
      <a onClick={(e) => e.preventDefault()}>VND</a>
    </Dropdown>
  );
};

export default DropdownCoin;
