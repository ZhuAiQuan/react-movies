/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:02:23
 * @LastEditTime: 2022-02-21 16:53:53
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile'
import { MovieOutline, UserSetOutline, KoubeiOutline, ShopbagOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import './index.less'

export default function FootBar() {
  const [activeKey, setActiveKey] = useState('home');
  const navigate = useNavigate();
  const tabs = [
    {
      key: 'home',
      title: '电影',
      icon: <MovieOutline />,
    },
    {
      key: 'cinemas',
      title: '影院',
      icon: <ShopbagOutline />,
    },
    {
      key: 'info',
      title: '资讯',
      icon: <KoubeiOutline />,
    },
    {
      key: 'mine',
      title: '我的',
      icon: <UserSetOutline />,
    }
  ];
  useEffect(() => {
    // 切换路由
    navigate(activeKey)
  }, [activeKey])
  return (
    <div className='foot-bar'>
      <TabBar activeKey={activeKey} onChange={setActiveKey}>
        {
          tabs.map(item => (<TabBar.Item key={item.key} title={item.title} icon={item.icon}></TabBar.Item>))
        }
      </TabBar>
    </div>
  )
}
