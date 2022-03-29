/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 09:51:38
 * @LastEditTime: 2022-03-29 14:11:22
 * @LastEditors: zaq
 * @Reference:
 */
import React, {useState, useRef, useEffect} from "react";
import { DownOutline } from 'antd-mobile-icons'

export default function FilmInfo(props) {
  const {
    synopsis,
    category,
    filmType,
    grade,
    name,
    nation,
    premiereAt,
    runtime,
  } = props;
  const [show, changeShow] = useState(true);
  const [height, setHeight] = useState(0);
  const context = useRef();
  useEffect(() => {
    setHeight(() => {
      return context.current.offsetHeight
    });
    if (show) onTaggle();
  }, [])
  const onTaggle = () => {
    changeShow(!show)
  }
  let desc =
    synopsis ||
    "布鲁斯·韦恩化身蝙蝠侠于哥谭市行侠仗义两年后，罪犯皆闻风丧胆，他也因此深入接触到哥谭市的阴暗面。他潜行于哥谭市腐败的政要名流关系网中，身边仅有的几个值得信赖的盟友——管家阿尔弗雷德·潘尼沃斯与詹姆斯·戈登警长。这位独行的“义警侠探”在哥谭市民心中已成为“复仇”二字最当仁不让的代名词。";
  return (
    <div className="info">
      <div className="film-title">
        <div className="name">
          name
          <span>filmType.name</span>
        </div>
        <div className="grade">grade</div>
      </div>
      <div className="category">category</div>
      <div className="premiereAt">premiereAt</div>
      <div className="runtime">nation | runtime</div>
      <div className={`film-description ${!show && 'film-description-close'}`} style={{ minHeight: height && show ? height : 36 }} ref={context}>{desc}</div>
      <div className={`up-down ${show && 'up-down-rorato'}`} onClick={onTaggle}>
        <DownOutline />
      </div>
    </div>
  );
}
