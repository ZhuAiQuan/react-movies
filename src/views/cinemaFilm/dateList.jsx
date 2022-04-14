/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-13 14:03:47
 * @LastEditTime: 2022-04-14 13:56:47
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useEffect, useState} from 'react';
import bus from '../../libs/bus';
import { formatDate } from '../../libs/date';
import { Tabs } from 'antd-mobile'

export default function DateList(props) {
  const {films} = props;
  const [selectIndex, updateSelectIndex] = useState(0);
  const [showDate, updateDate] = useState([])
  useEffect(() => {
    updateDate(films[0].showDate.map(formatDate))
    bus.on('checkFilm', check => {
      updateDate([...films[check].showDate.map(formatDate)])
    })
  }, [])
  const onChange = key => {
    updateSelectIndex(+key)
  }
  return (
    <div>
      <Tabs defaultActiveKey={selectIndex} onChange={onChange}>
        {
          showDate.map((item, i) => {
            return (
              <Tabs.Tab key={i} title={item}></Tabs.Tab>
            )
          })
        }
      </Tabs>
    </div>
  )
}
