/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-31 09:49:33
 * @LastEditTime: 2022-03-31 09:49:34
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useLayoutEffect, useState } from "react";
import { NavBar, Toast } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocate } from "@/api";
import "./index.less";

export default function GeoLocation() {
  const [cities, getCities] = useState([]);
  const { name, cityId } = useSelector(({ app }) => app.locate);
  const push = useNavigate();
  const dispatch = useDispatch();

  function onBack() {
    push(-1);
  }
  function getData() {
    getAllLocate().then((res) => {
      if (!res.status) {
        getCities(res.data.cities);
      } else {
        getCities([]);
        Toast.show({
          content: "暂无城市数据",
          duration: 3000,
        });
      }
    });
  }

  useLayoutEffect(() => {
    getData();

    if (!name && !cityId) {
      const { cityId, isHot, name, pinyin } = sessionStorage.getItem("locate")
        ? JSON.parse(sessionStorage.getItem("locate"))
        : { cityId: 0, isHot: 0, name: "", pinyin: "" };
      dispatch({
        type: "geoLocateInfo",
        data: { cityId, isHot, name, pinyin },
      });
    }
  }, []);
  return (
    <div className="geo">
      <NavBar backArrow={<CloseOutline />} onBack={onBack}>
        当前城市 - {name}
      </NavBar>
    </div>
  );
}
