/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:19
 * @LastEditTime: 2022-03-28 16:44:10
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useState } from 'react'
import { Tabs } from 'antd-mobile'
import ListContent from './content'
import Banner from './banner'
import './index.less'

export default function Home() {
  const [activeKey, setActiveKey] = useState(1)
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