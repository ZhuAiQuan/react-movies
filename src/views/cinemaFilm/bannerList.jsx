/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-13 14:01:27
 * @LastEditTime: 2022-04-13 16:50:20
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useState, useEffect } from "react";
import { data } from "./films.json?json";
const { films } = data;

export default function BannerList(props) {
  // const films = [
  //   {
  //     poster: "https://pic.maizuo.com/usr/movie/46015aa8e08a661e7c559b6e7407ce08.jpg",
  //     name: "神奇动物:邓布利多之谜",
  //     category: "奇幻|冒险",
  //     director: "大卫·叶茨",
  //     runtime: 143,
  //     grade: "7.8",
  //   }
  // ]
  const [loopIndex, updateLoopIndex] = useState(0);
  const [translateX, updateTranslateX] = useState("50%");
  const [moveData, changeData] = useState({
    state: false,
    startX: 0,
    moveX: 0,
    translateX: 0,
    defaultX: 0,
    maxX: 0
  })
  useEffect(() => {
    changeData(move => {
      return {
        ...move,
        translateX: document.body.offsetWidth / 2 - 45,
        defaultX: document.body.offsetWidth / 2 - 45,
        maxX: ((films.length - 1) * 88 - (document.body.offsetWidth / 2 - 45)) * -1
      }
    })
  }, []);
  function touchStart(e) {
    changeData(Object.assign(moveData, {state: true, startX: e.targetTouches[0].clientX}))
  }
  function touchEnd() {
    changeData(data => {
      return {
        ...data,
        state: false,
        translateX: data.translateX - data.moveX > data.defaultX ? fixLoopIndex(data.defaultX) : data.translateX - data.moveX < data.maxX ? fixLoopIndex(data.maxX) : calcLateX(data.translateX - data.moveX),
        moveX: 0,
        startX: 0,
      }
    })
  }
  function touchMove(e) {
    if (moveData.state) {
      
      changeData(moveData => {
        return {
          ...moveData,
          moveX: moveData.startX - e.targetTouches[0].clientX,
        }
      })
    }
  }
  // 精准计算移动几个图片 并获取索引值
  function calcLateX(count) {
    const i = Math.round((moveData.defaultX - count - 18)/88);
    updateLoopIndex(i)
    return moveData.defaultX - i*88
  }
  // 补丁 修复在banner首尾时的处理
  function fixLoopIndex(count) {
    if (count === moveData.defaultX) {
      updateLoopIndex(0)
    } else if (count === moveData.maxX) {
      updateLoopIndex(films.length - 1)
    }
    return count
  }
  return (
    <div className="banner-list">
      <div className="banner-swiper">
        <div
          className="swiper-bg"
          style={{ backgroundImage: `url(${films[loopIndex].poster})` }}
        ></div>
        <div
          className="swiper-ctx"
          style={{
            width: `calc((88px * ${films.length-1}) + 106px)`,
            transform: `translateX(${moveData.translateX - moveData.moveX}px)`,
          }}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          {films.map((item, i) => {
            return (
              <div className={`swiper-item ${i === loopIndex ? 'swiper-actived' : ''}`} key={item.poster}>
                <img src={item.poster} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
