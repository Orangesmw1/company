import React from "react";
import { SlackOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Header.css";

import DropdownLanguage from "./Dropdown/DropdownLanguage/DropdownLanguage";
import DropdownCoin from "./Dropdown/DropdownCoin/DropdownCoin";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const Header = () => {
  return (
    <div className="header">
      <div className="container mx-auto px-20">
        <header>
          <div className="box-header-left">
            <div className="header-logo">
              <span className="logo">
                <SlackOutlined className="text-red-500" />
              </span>
              <span className="name-company text-orange-400">SlackOut</span>
            </div>
            <div className="header-search">
              <Search
                placeholder="Tìm theo điểm đến, hoạt động"
                onSearch={onSearch}
                style={{
                  width: 250,
                }}
              />
            </div>
          </div>

          <div className="box-header-right">
            <ul>
              <li className="header-change-language">
                <DropdownLanguage />
              </li>
              <li className="header-change-money">
                <DropdownCoin />
              </li>
              <li className="header-open-app">Mở ứng dụng</li>
              <li className="header-help">Trợ giúp</li>
              <li className="header-btn-register">Đăng ký</li>
              <li className="header-btn-login ">Đăng nhập</li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
