/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:27:19
 * @LastEditTime: 2022-04-02 10:34:50
 * @LastEditors: zaq
 * @Reference:
 */
import React, { useState, useEffect } from "react";
import { Tabs } from "antd-mobile";
import ListContent from "./content";
import Banner from "./banner";
import "./index.less";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { getBannerInfo } from '@/api';
import { throuch } from '@/libs/tools'

export default function Home() {
  const [activeKey, setActiveKey] = useState(1);
  const [banner, getBannerList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finaily, setFinaily] = useState(false);
  const [page, setPages] = useState({
    pageNum: 1,
    pageSize: 10
  })

  const { cityId, name: cityName } = useSelector(({ app }) => app.locate);
  const dispatch = useDispatch();
  const push = useNavigate();

  const tabs = [
    {
      type: 1,
      title: "正在热映",
    },
    {
      type: 2,
      title: "即将上映",
    },
  ];
  // 去定位页面
  function changePositon() {
    push('/geo', { replace: cityName && cityId ? false : true })
  }
  function getBanner(id) {
    getBannerInfo(id).then(res => {
      if (!+res.status) {
        const {actionData, name, imgUrl} = res.data;
        getBannerList([{name, imgUrl, id: JSON.parse(actionData).businessId}])
      }
    })
  }
  function onScroll(e) {
    const { scrollTop, offsetHeight } = e.target;
    if (scrollTop / offsetHeight > 0.7 && !finaily) {// 判断快触底且计算后台字段数据不为空时 获取数据 /需要注意的是再向上滚动时不需要触发更新哦
      // 准备加载数据了
      setLoading(true);
      throuch(request)()
    }
  }
  function request() {
    debugger
    if (loading) {
      console.log(`first`)
    }
  }
  useEffect(() => {
    if (cityId) {
      getBanner(cityId)
    }
    const target = document.querySelector('.App>.content');
    target?.addEventListener('scroll', onScroll);
    return () => {
      target?.removeEventListener('scroll', onScroll)
    }
  }, [])
  useEffect(() => {
    const target = document.querySelector('.App>.content');
    target?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [activeKey])

  return (
    <>
      <Banner cityName={cityName} list={banner} changeGeo={changePositon} />
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        className="tab-container"
      >
        {tabs.map(({ title, type }, index) => (
          <Tabs.Tab
            title={title}
            key={type}
            className={+activeKey === index + 1 ? "active-tab" : ""}
          />
        ))}
      </Tabs>
      <ListContent type={activeKey} loading={loading} finaily={finaily} />
    </>
  );
}
