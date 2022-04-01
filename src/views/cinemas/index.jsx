/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:26:57
 * @LastEditTime: 2022-04-01 10:10:24
 * @LastEditors: zaq
 * @Reference:
 */
import React, {useState, useRef} from "react";
import { NavBar } from "antd-mobile";
import { DownOutline, SearchOutline } from "antd-mobile-icons";
import DropMenu, { CityItem, AppPay } from './dropMenu';
import CinemasList from './cinemasList'
import "./index.less";

export default function Cinemas() {
  const dropMenu = useRef();
  const city = ['全城', '1', '2', '3', '4', '5'];
  const app = ['APP订票', '前台兑换'];
  const last = ['最近去过', '离我最近'];
  const list = [
    {
      name: '英皇电影城（东海缤纷店）',
      address: '深圳市福田区东海缤纷天地商场B1层',
      Distance: 0.16443638831382237,
      lowPrice: 10900,
      cinemaId: 8119
    }
  ]
  const [selectKey, updateKey] = useState({
    city: '全城',
    app: 'APP订票',
    last: '最近去过'
  })
  const [menu, updateMenu] = useState([
    {
      title: '全城',
      key: 'city',
      children: <CityItem city={city} onChange={onCheckTitle} MenuKey='city' title={getKey} />
    },
    {
      title: 'APP订票',
      key: 'app',
      children: <AppPay app={app} onChange={onCheckTitle} MenuKey='app' title={getKey} />
    },
    {
      title: '最近去过',
      key: 'last',
      children: <AppPay app={last} onChange={onCheckTitle} MenuKey='last' title={getKey} />
    }
  ])
  
  function onCheckTitle(key, value) {
    updateMenu(data => {
      return data.map(item => {
        return {
          ...item,
          title: item.key === key ? value : item.title
        }
      })
    })
    updateKey(data => {
      data[key] = value
      return data
    })
    // 关闭下拉菜单
    dropMenu.current?.close();
    // filter筛选操作
  }
  // 必须通过函数返回值来传递当前选中的title 不然无法触发子组件的更新
  function getKey(key) {
    return selectKey[key]
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
      <CinemasList list={list} />
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
