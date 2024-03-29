/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:33
 * @LastEditTime: 2022-04-02 10:41:46
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {getFilmsInfo} from '@/api'
import './index.less'

export default function Info() {
  const router = useNavigate();
  const [infoData, updateInfo] = useState([])
  // 解析html富文本数据成对象
  function toParseNode(str) {
    return str
      .substring(3, str.length - 4)
      .split("</a>")
      .map((item) => {
        let start;
        let last;
        let id = 0;
        let url = "";
        let src = "";
        if (item.includes("filmId:")) {
          start = item.indexOf("filmId:") + 8;
          last = item.substring(start).indexOf(`'})`);
          id = +item.substring(start, start + last);
        } else {
          start = item.indexOf(`{url:'`) + 6;
          last = item.substring(start).indexOf(`'})`);
          url = item.substring(start, start + last).trim();
        }
        start = item.indexOf('src="') + 5;
        last = item.substring(start).indexOf('" style');
        src = item.substring(start, start + last);
        return {
          id,
          url,
          src,
        };
      });
  }
  function toRouterPush(item) {
    return () => {
      const {id, url} = item;
      if (id) router(`/film-detail/${id}`)
      else window.open(url)
    }
  }
  useEffect(() => {
    // request api sync
    getFilmsInfo().then(res => {
      if (!res.status) {
        const {content} = res.data.data;
        updateInfo(() => toParseNode(content))
      }
    })
  }, []);
  return (
    <div className="info-content">
      <div className="info-title"></div>
      {
        infoData.map(item => (
          <div className="info-item" onClick={toRouterPush(item)} key={item.src}>
            <img src={item.src} />
          </div>
        ))
      }
    </div>
  )
}
