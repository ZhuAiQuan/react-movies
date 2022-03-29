/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 17:41:48
 * @LastEditTime: 2022-03-29 17:56:58
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import {LeftOutline} from 'antd-mobile-icons';
import {useNavigate} from 'react-router-dom'
import './index.less'

export default function AllPhotos() {
  const router = useNavigate()
  return (
    <div className='photos-content'>
      <div className='title'>
        <LeftOutline className="back-icon" fontSize={20} onClick={() => router(-1)} />
        剧照()
      </div>
      <div className='content'>
        <div className=''></div>
      </div>
    </div>
  )
}
