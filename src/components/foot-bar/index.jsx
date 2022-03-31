/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:02:23
 * @LastEditTime: 2022-03-31 14:33:20
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useState, useEffect } from "react";
import { TabBar } from "antd-mobile";
import {
  MovieOutline,
  UserSetOutline,
  KoubeiOutline,
  ShopbagOutline,
} from "antd-mobile-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.less";

export default function FootBar() {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState("home");
  const navigate = useNavigate();
  const tabs = [
    {
      key: "home",
      title: "电影",
      icon: <MovieOutline />,
    },
    {
      key: "cinemas",
      title: "影院",
      icon: <ShopbagOutline />,
    },
    {
      key: "info",
      title: "资讯",
      icon: <KoubeiOutline />,
    },
    {
      key: "mine",
      title: "我的",
      icon: <UserSetOutline />,
    },
  ];
  const onChange = (key) => {
    setActiveKey((activeKey) => {
      if (activeKey === key) return activeKey;
      else {
        navigate(key);
        return key;
      }
    });
  };
  useEffect(() => {
    setActiveKey(location.pathname.substring(1));
  }, [location.pathname]);
  return (
    <div className="foot-bar">
      <TabBar activeKey={activeKey} onChange={onChange}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            title={item.title}
            icon={item.icon}
          ></TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
}
