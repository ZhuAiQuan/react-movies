/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:26:57
 * @LastEditTime: 2022-03-31 16:46:04
 * @LastEditors: zaq
 * @Reference:
 */
import React, {useState, useRef} from "react";
import { NavBar } from "antd-mobile";
import { DownOutline, SearchOutline } from "antd-mobile-icons";
import DropMenu, { CityItem, AppPay, LastGo } from './dropMenu'
import "./index.less";

export default function Cinemas() {
  const dropMenu = useRef();
  const city = ['全城', '1', '2', '3', '4', '5'];
  const app = ['APP订票', '前台兑换'];
  const last = ['最近去过', '离我最近'];
  const [menu, updateMenu] = useState([
    {
      title: '全城',
      key: 'city',
      children: <CityItem city={city} onChange={onCheckTitle} MenuKey='city' />
    },
    {
      title: 'APP订票',
      key: 'app',
      children: <AppPay app={app} onChange={onCheckTitle} MenuKey='app' />
    },
    {
      title: '最近去过',
      key: 'last',
      children: <LastGo />
    }
  ])
  
  function onCheckTitle(key, value) {
    const temp = menu.map(item => {
      return {
        ...item,
        title: item.key === key ? value : item.title
      }
    })
    updateMenu(temp);
    // 关闭下拉菜单
    dropMenu.current?.close();
    // filter筛选操作
  }
  return (
    <div className="cinemas-content">
      <NavBar
        left={<LeftSide />}
        right={<RightSide />}
        backArrow={false}
        className="title"
      >
        <div className="navbar-title">影院</div>
      </NavBar>
      <DropMenu menuList={menu} ref={dropMenu} />
    </div>
  );
}
function LeftSide() {
  return (
    <div>
      深圳
      <DownOutline fontSize={8} style={{marginLeft: '3px'}} />
    </div>
  );
}
function RightSide() {
  return (
    <div>
      <SearchOutline fontSize={18} />
    </div>
  );
}
