/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:29:04
 * @LastEditTime: 2022-02-22 10:38:12
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Fragment } from 'react'
import Item from './item'
import { Divider } from 'antd-mobile'

export default function List(props) {
  const {
    data
  } = props;
  return (
    <div className='list-ctx'>
      {
        data.map((item, i) => (
          <Fragment key={i}>
            <Item {...item} />
            { i + 1 !== data.length && <Divider style={{
              margin: 0
            }} /> }
          </Fragment>
        ))
      }
    </div>
  )
}
