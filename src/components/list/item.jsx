/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:29:55
 * @LastEditTime: 2022-03-30 09:29:45
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useEffect, useContext } from "react";
import "./index.less";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd-mobile'
import { context } from '../../views/home/content'
import { useNavigate } from 'react-router-dom'

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
  // const token = useSelector(state => {
  //   debugger
  // });
  const router = useNavigate();
  const { type } = useContext(context)
  // useEffect(() => {
  //   console.log(token, new Date().getTime())
  // }, [token])
  
  // const dispatch = useDispatch()
  function updateData() {
    // dispatch({
    //   type: 'increment',
    //   data: {
    //     token: 'yyds有一点骚'
    //   }
    // });
    router(`/film-detail/0`)
  }
  return (
    <div className="list-item" onClick={updateData}>
      <div className="avatar">
        <img />
      </div>
      <div className="film-info">
        <div className="film-name">
          <span>电影名称</span>
          <span>2D</span>
        </div>
        { 
          +type === 1 && <div className="grade">
            观众评分 
            <span>7.5</span>
          </div>
        }
        <div className="actors">
          主演：
          <span>
            马特·里夫斯 罗伯特·帕丁森 佐伊·克拉维兹 科林·法瑞尔 保罗·达诺
          </span>
        </div>
        {
          +type === 1 ? <div className="detail">
            <span>美国</span>
            <span>180分钟</span>
          </div>
          : <div className="detail">
            上映日期：
            <i>周六 4月2号</i>
          </div>
        }
        
      </div>
      <div className="buy">
        <Button color='warning' fill='outline' size='mini'>
          {
            +type === 1 ? '购买' : '预购'
          }
        </Button>
      </div>
    </div>
  );
}
