/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-30 13:17:41
 * @LastEditTime: 2022-03-30 13:55:14
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import { RightOutline } from 'antd-mobile-icons'

export default function CellGroup(props) {
  const {
    list,
    onTap
  } = props
  return (
    <div className='cell-group'>
      {
        list.map(item => (
          <div className='cell-item' key={item.title} onClick={onTap(item)}>
            <div className='cell-icon'>
              <img src={item.icon} />
            </div>
            <div className='cell-title'>{item.title}</div>
            <div className='cell-link'>
              {
                item.price ? <span className='price'>{item.price}</span> : ''
              }
              <RightOutline fontSize={9} className='icon-cs' />
            </div>
          </div>
        ))
      }
    </div>
  )
}
