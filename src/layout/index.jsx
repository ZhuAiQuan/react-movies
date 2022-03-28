/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-28 17:15:58
 * @LastEditTime: 2022-03-28 17:40:53
 * @LastEditors: zaq
 * @Reference: 
 */
import React from "react";
import FootBar from "_c/foot-bar";
import { Outlet } from 'react-router-dom'

function Layouts(props) {
  return (
    <div className="App">
      <div className="content">
        <Outlet />
      </div>
      <FootBar />
    </div>
  )
}

export default Layouts;