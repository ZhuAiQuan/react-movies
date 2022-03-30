/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:44
 * @LastEditTime: 2022-03-30 15:23:00
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useState} from 'react';
import avatar from '@/assets/images/avatar.png';
import filmOrderIcon from '@/assets/images/film-order.png';
import storeOrderIcon from '@/assets/images/store-order.png';
import mzqcIcon from '@/assets/images/mzq.png';
import redbIcon from '@/assets/images/redb.png';
import yeIcon from '@/assets/images/ye.png';
import helpIcon from '@/assets/images/help.png';
import settingIcon from '@/assets/images/setting.png';
import CellGroup from './cellGroup';
import { useNavigate } from 'react-router-dom'
import './index.less'

export default function Mine() {
  const router = useNavigate();
  const [userinfo, updateInfo] = useState({
    name: '',
    avatar: ''
  })
  const navBar = [
    {
      title: '电影订单',
      src: filmOrderIcon
    },
    {
      title: '商品订单',
      src: storeOrderIcon
    }
  ]
  const tools = [
    {
      icon: mzqcIcon,
      title: '卖座券',
      price: 0
    },
    {
      icon: redbIcon,
      title: '组合红包',
      price: 0
    },
    {
      icon: yeIcon,
      title: '余额',
      price: '0'
    },
    {
      icon: helpIcon,
      title: '帮助与客服',
      price: 0
    },
    {
      icon: settingIcon,
      title: '设置',
      price: 0
    },
  ]
  const onTouchItem = item => {
    return () => {
      // do something
      if (userinfo.name) {
        // go page 
      } else {
        // login
        router('/login')
      }
    }
  }
  return (
    <div className='mine-content'>
      <div className='head'>
        <div className='avatar'>
          <img src={userinfo.avatar ? userinfo.avatar : avatar} />
        </div>
        <div className='username' onClick={onTouchItem()}>
          {
            userinfo.name 
              ? userinfo.name
              : '立即登录'
          }
        </div>
      </div>
      <div className='nav-bar'>
        {
          navBar.map(item => (
            <div className='nav-item' key={item.title}>
              <div className='nav-icon'>
                <img src={item.src} />
              </div>
              <div className='nav-title'>{item.title}</div>
            </div>
          ))
        }
      </div>
      <CellGroup list={tools} onTap={onTouchItem} />
    </div>
  )
}