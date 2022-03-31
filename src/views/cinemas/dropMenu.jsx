/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-31 10:08:18
 * @LastEditTime: 2022-03-31 17:46:32
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
  const onChangeItem = (item) => {
    updateItem(item);
    onChange(MenuKey, item);
  };
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

export const AppPay = ({app, onChange, MenuKey}) => {
  const [checkItem, updateItem] = useState(MenuKey === 'app' ? "APP订票" : '最近去过');
  const onChangeItem = (item) => {
    updateItem(item)
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
