/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:32:52
 * @LastEditTime: 2022-02-21 17:05:35
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react'
import { DotLoading } from 'antd-mobile'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <DotLoading color='primary' />
      </div>
    )
  }
}
