/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-31 10:08:18
 * @LastEditTime: 2022-03-31 16:36:07
 * @LastEditors: zaq
 * @Reference:
 */
import React, { forwardRef, useEffect, useState } from "react";
import { Dropdown } from "antd-mobile";
import "./dropMenu.less";

const DropMenu = forwardRef((props, ref) => {
  const { menuList } = props;
  return (
    <Dropdown ref={ref}>
      {menuList.map((item) => (
        <Dropdown.Item key={item.key} title={item.title}>
          {item.children}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
});

export const CityItem = (props) => {
  const { city, onChange, MenuKey } = props;
  const [checkItem, updateItem] = useState("全城");
  const onChangeItem = (MenuKey, item) => {
    updateItem(item);
    onChange(MenuKey, item);
  };
  return (
    <div className="city-content">
      {city.map((item) => (
        <div
          key={item}
          onClick={() => onChangeItem(MenuKey, item)}
          className={`city-content-item ${
            checkItem === item ? "city-content-item-active" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export const AppPay = () => <div>app pay order</div>;

export const LastGo = () => <div> last go </div>;

export default DropMenu;
