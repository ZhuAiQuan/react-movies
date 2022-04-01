/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:19
 * @LastEditTime: 2022-04-01 17:35:15
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd-mobile'
import ListContent from './content'
import Banner from './banner'
import './index.less'
import {useDispatch} from 'react-redux';
import {getGeolocate} from '@/api'

export default function Home() {
  const [activeKey, setActiveKey] = useState(1);
  const dispatch = useDispatch();
  const tabs = [
    {
      type: 1,
      title: '正在热映'
    },
    {
      type: 2,
      title: '即将上映'
    }
  ]
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      const {longitude, latitude} = coords;
      dispatch({
        type: 'photo_list',
        data: {
          geoInfo: {longitude, latitude}
        }
      })
      getGeolocate(longitude, latitude).then(res => {
        console.log(res)
      })
      // test().then(res => {
      //   console.log(res)
      // })
    }, err => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <Banner />
      <Tabs activeKey={activeKey} onChange={setActiveKey} className="tab-container">
        {
          tabs.map(({title, type}, index) => (
            <Tabs.Tab title={title} key={type} className={+activeKey === index + 1 ? 'active-tab' : ''} />
          ))
        }
      </Tabs>
      <ListContent type={activeKey} />
    </>
  )
}