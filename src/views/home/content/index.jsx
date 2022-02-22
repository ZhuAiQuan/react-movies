/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:17:52
 * @LastEditTime: 2022-02-22 10:40:49
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useEffect, useState } from 'react'
import List from '_c/list'
import './index.less'

export default function ListContent(props) {
  const [info, setInfo] = useState([1,2,3, 4]);
  useEffect(() => {
    // request api 
    console.log(props.type)
  }, [props.type])
  return (
    <div className='list-container'>
      <List data={info} />
    </div>
  )
}
