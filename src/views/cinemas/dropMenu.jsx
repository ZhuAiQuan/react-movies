/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-31 10:08:18
 * @LastEditTime: 2022-04-01 09:51:51
 * @LastEditors: zaq
 * @Reference:
 */
import React, { forwardRef, useState } from "react";
import { Dropdown } from "antd-mobile";
import { CheckOutline } from 'antd-mobile-icons'
import "./dropMenu.less";

const DropMenu = forwardRef((props, ref) => {
  const { menuList } = props;
  return (
    <Dropdown ref={ref}>
      {menuList.map((item) => (
        <Dropdown.Item key={`${item.key}+${item.title}`} title={item.title}>
          {item.children}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
});

export const CityItem = (props) => {
  const { city, onChange, MenuKey, title } = props;
  const onChangeItem = (item) => {
    onChange(MenuKey, item);
  };
  const checkItem = title(MenuKey);
  return (
    <div className="city-content">
      {city.map((item) => (
        <div
          key={item}
          onClick={() => onChangeItem(item)}
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

export const AppPay = ({app, onChange, MenuKey, title}) => {
  const checkItem = title(MenuKey);
  const onChangeItem = (item) => {
    onChange(MenuKey, item)
  }
  return (
    <div className="app-content">
      {
        app.map(item => (
          <div key={item} onClick={() => onChangeItem(item)} className={`app-content-item ${checkItem === item ? 'app-content-item-active' : ''}`}>
            {
              checkItem === item && <CheckOutline className='show-check' />
            }
            {item}
          </div>
        ))
      }
    </div>
  )
};

export default DropMenu;
