/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 17:41:48
 * @LastEditTime: 2022-03-30 10:25:10
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useState} from 'react';
import {LeftOutline} from 'antd-mobile-icons';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ViewImage from '_c/viewImage'
import './index.less'

export default function AllPhotos() {
  const router = useNavigate();
  const photos = useSelector(({app}) => app.photos);
  const [showPhotos, updateSrc] = useState({
    show: false,
    src: '',
    imgList: [],
  })
  const onClose = () => {
    updateSrc({
      ...showPhotos,
      show: false,
      src: '',
    })
  }
  const onPrev = i => {
    return () => {
      const src = photos[i];
      updateSrc({
        ...showPhotos,
        src,
        imgList: photos,
        show: true,
      })
    }
  }
  return (
    <div className='photos-content'>
      <div className='title'>
        <LeftOutline className="back-icon" fontSize={20} onClick={() => router(-1)} />
        剧照({photos.length})
      </div>
      <div className='content'>
        {
          photos.map((item, i) => (
            <div className={`photo-item ${(i+1)%3 === 2 && 'mg-img'}`} key={item} style={{backgroundImage: `url(${item})`}} onClick={onPrev(i)}>
              {/* <img src={item} className={(i+1)%3 === 2 ? 'mg-img' : ''} /> */}
            </div>
          ))
        }
      </div>
      <ViewImage {...showPhotos} onClose={onClose} />
    </div>
  )
}
