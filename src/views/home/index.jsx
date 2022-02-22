/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:19
 * @LastEditTime: 2022-02-21 17:21:33
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useState } from 'react'
import { Tabs } from 'antd-mobile'
import ListContent from './content'
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
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        {
          tabs.map(({title, type}) => (
            <Tabs.Tab title={title} key={type} />
          ))
        }
      </Tabs>
      <ListContent type={activeKey} />
    </>
  )
}