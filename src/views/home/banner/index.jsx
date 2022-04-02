/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-28 14:46:37
 * @LastEditTime: 2022-04-02 10:34:06
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import { Swiper, Toast } from 'antd-mobile';
import { DownOutline } from 'antd-mobile-icons'
import './index.less'

function Banner({cityName}) {
  return (
    <div className='banner-container'>
      <SelectBtn cityName={cityName} />
      <Swiper className="banner-content">{items}</Swiper>
    </div>
  )
}
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className='banner-item'
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {/* {index + 1} */}
    </div>
  </Swiper.Item>
))
const SelectBtn = ({cityName}) => {
  return (
    <div className='geolocation'>
      {cityName || '深圳'}
      <DownOutline className="icon-down" fontSize={10} />
    </div>
  )
}

export default Banner