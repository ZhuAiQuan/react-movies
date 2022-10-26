/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:29:04
 * @LastEditTime: 2022-02-22 10:38:12
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Fragment, useContext } from 'react'
import Item from './item'
import { Divider, DotLoading } from 'antd-mobile'
import { context } from '@/views/home/content'

export default function List(props) {
  const {
    data
  } = props;
  const { loading, finaily } = useContext(context)
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
      {
        loading ? <Loading />: finaily ? <Ending /> : ''
      }
    </div>
  )
}
const Loading = () => (<div className='loading'>数据加载中<DotLoading color='primary'/></div>)
const Ending = () => (<div className='ending'>数据加载完成</div>)
