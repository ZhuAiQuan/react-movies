/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:29:55
 * @LastEditTime: 2022-02-22 10:40:16
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useEffect } from "react";
import "./index.less";
import { useSelector, useDispatch } from 'react-redux'

export default function Item(props) {
  // const {
  //   poster,
  //   name,
  //   filmType: { name: filmTypeName },
  //   grade,
  //   actors,
  //   nation,
  //   premiereAt,
  //   type,
  // } = props;
  const token = useSelector(state => state.token);
  useEffect(() => {
    console.log(token, new Date().getTime())
  }, [token])
  
  const dispatch = useDispatch()
  function updateData() {
    dispatch({
      type: 'increment',
      data: {
        token: 'yyds有一点骚'
      }
    });
  }
  return <div className="list-item" onClick={updateData}>item</div>;
}
