/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-13 10:52:33
 * @LastEditTime: 2022-04-13 14:04:22
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import { LeftOutline, CloseOutline, RightOutline, EnvironmentOutline, PhoneFill } from 'antd-mobile-icons';
import BannerList from './bannerList';
import DateList from './dateList'
import './index.less'

export default function CinemaFilm() {
  const {id} = useParams();
  const push = useNavigate();
  const [showInfo, updateShowInfo] = useState(false);
  const services = [
    {
      description: "3D眼镜：自费购买, 5.0元每副",
      name: "3D眼镜"
    },
    {
      description: "1.3米一下免票无座，需成人陪同",
      name: "儿童票"
    }
  ]
  // console.log(id)
  return (
    <div className='film-content'>
      <div className='navigate-back'>
        {
          showInfo ? <CloseOutline onClick={() => updateShowInfo(false)} /> : <LeftOutline onClick={() => push(-1)} />
        }
        
      </div>
      <div className='cinema-name'>深圳中影开元国际影城</div>
      {
        showInfo 
          ? <ShowInfo services={services} />
          : <>
              <div className='cinema-description' onClick={() => updateShowInfo(true)}>
                {
                  services.map(item => <span key={item.name} className='cinema-description-name'>{item.name}</span>)
                }
                <span>
                  <RightOutline />
                </span>
              </div>
              <div className='cinema-address'>
                <div><EnvironmentOutline /></div>
                <div className='cinema-addr'>广东省深圳市龙岗区大鹏街道岭南路67号佳兆业广场三楼</div>
                <div className='tel-icon' ><PhoneFill /></div>
              </div>
              <BannerList />
              <DateList />
            </>
      }
    </div>
  )
}

function ShowInfo(props) {
  const { services } = props
  return (
    <div className='show-info-modal'>
      {
        services.map(item => {
          return (
            <div key={item.name} className='show-info-item'>
              <div className='item-name'>
                <span>{item.name}</span>
              </div>
              <div className='item-description'>{item.description}</div>
            </div>
          )
        })
      }
    </div>
  )
}
