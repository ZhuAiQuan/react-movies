/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-28 17:15:58
 * @LastEditTime: 2022-03-28 17:40:53
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useLayoutEffect, useRef } from "react";
import FootBar from "_c/foot-bar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGeolocate } from "@/api";

function Layouts() {
  const geo = navigator.geolocation;
  const { longitude, latitude } = useSelector(({ app }) => app.geoInfo);
  const dispatch = useDispatch();
  const push = useNavigate();
  const state = useRef(true);

  function getLocation() {
    const { latitude, longitude } = sessionStorage.getItem("geoInfo")
      ? JSON.parse(sessionStorage.getItem("geoInfo"))
      : { latitude: 0, longitude: 0 };
    if (longitude && latitude) {
      dispatch({
        type: "geoLocationPosition",
        data: {
          latitude,
          longitude,
        },
      });
      geolocate(latitude, longitude);
    } else {
      // 获取定位信息
      geo.getCurrentPosition(
        ({ coords: { latitude, longitude }, coords }) => {
          console.log(`latitude: ${latitude}, longitude: ${longitude}`, coords)
          dispatch({
            type: "geoLocationPosition",
            data: {
              latitude,
              longitude,
            },
          });
          sessionStorage.setItem(
            "geoInfo",
            JSON.stringify({ latitude, longitude })
          );
          geolocate(latitude, longitude);
        },
        () => {
          push("/geo", { replace: true });
        }
      );
    }
  }
  // 根据定位信息获取城市信息
  async function geolocate(latitude, longitude) {
    const { cityId, isHot, name, pinyin } = sessionStorage.getItem("locate")
      ? JSON.parse(sessionStorage.getItem("locate"))
      : { cityId: 0, isHot: 0, name: "", pinyin: "" };

    if (cityId && name) {
      dispatch({
        type: "geoLocateInfo",
        data: { cityId, isHot, name, pinyin },
      });
    } else {
      if (!latitude && !longitude) return
      const { data, status } = await getGeolocate(latitude, longitude);
      if (!status) {
        const {
          city: { cityId, isHot, name, pinyin },
        } = data;
        sessionStorage.setItem(
          "locate",
          JSON.stringify({ cityId, isHot, name, pinyin })
        );
        dispatch({
          type: "geoLocateInfo",
          data: { cityId, isHot, name, pinyin },
        });
      }
    }
  }
  useLayoutEffect(() => {
    if (state.current) {
      state.current = false;
      if (!longitude && !latitude) getLocation();
    }
    
  });
  return (
    <div className="App">
      <div className="content">
        <Outlet />
      </div>
      <FootBar />
    </div>
  );
}

export default Layouts;
