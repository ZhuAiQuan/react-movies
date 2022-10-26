/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-28 14:46:37
 * @LastEditTime: 2022-04-02 10:34:06
 * @LastEditors: zaq
 * @Reference:
 */
import React from "react";
import { NavBar } from "antd-mobile";
import { DownOutline } from "antd-mobile-icons";
import "./index.less";

function Banner({ cityName, changeGeo, list }) {
  return (
    <div className={`banner-container banner-fixed`}>
      <SelectBtn cityName={cityName} change={changeGeo} />
      <NavBar children={'电影'} back={null} />
    </div>
  );
}

const SelectBtn = ({ cityName, change }) => {
  return (
    <div className={`geolocation show-geo`} onClick={change}>
      {cityName || ""}
      <DownOutline className="icon-down" fontSize={10} />
    </div>
  );
};

export default Banner;
