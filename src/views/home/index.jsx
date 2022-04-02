/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:19
 * @LastEditTime: 2022-04-02 10:34:50
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useState, useEffect } from "react";
import { Tabs } from "antd-mobile";
import ListContent from "./content";
import Banner from "./banner";
import "./index.less";
import { useDispatch, useSelector } from "react-redux";
import { getGeolocate } from "@/api";

export default function Home() {
  const [activeKey, setActiveKey] = useState(1);
  const { cityId, name: cityName } = useSelector(({ app }) => app.locate);
  const dispatch = useDispatch();
  const tabs = [
    {
      type: 1,
      title: "正在热映",
    },
    {
      type: 2,
      title: "即将上映",
    },
  ];
  useEffect(() => {
    if (!cityId) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { longitude, latitude } = coords;
          dispatch({
            type: "photo_list",
            data: {
              geoInfo: { longitude, latitude },
            },
          });
          getGeolocate(longitude, latitude).then((res) => {
            if (!res.status) {
              const { city: locate } = res.data;
              dispatch({
                type: "photo_list",
                data: {
                  locate,
                },
              });
            }
          });
          // test().then(res => {
          //   console.log(res)
          // })
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, []);
  return (
    <>
      <Banner city={{cityName}} />
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        className="tab-container"
      >
        {tabs.map(({ title, type }, index) => (
          <Tabs.Tab
            title={title}
            key={type}
            className={+activeKey === index + 1 ? "active-tab" : ""}
          />
        ))}
      </Tabs>
      <ListContent type={activeKey} />
    </>
  );
}
