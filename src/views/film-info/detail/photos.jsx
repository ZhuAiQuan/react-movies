/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 15:02:11
 * @LastEditTime: 2022-03-29 17:44:42
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useState} from 'react';
import {RightOutline} from 'antd-mobile-icons';
import ViewImage from '_c/viewImage';
import {useNavigate} from 'react-router-dom'

export default function FilmPhotos(props) {
  const router = useNavigate();
  const [prevImages, updatePrev] = useState({
    show: false,
    src: '',
    imgList: []
  })
  const onPreview = (src) => {
    return function() {
      updatePrev(imgs => {
        return {
          ...imgs,
          show: true,
          src,
          imgList: props.photos
        }
      })
    }
  }
  const onClose = () => {
    updatePrev(imgs => {
      return {
        ...imgs,
        show: false,
        src: '',
        imgList: []
      }
    })
  }
  const onPush = () => {
    router('/photos')
  }
  return (
    <div className='photos'>
      <div className='photos-title'>
        <div className='all-photos' onClick={onPush}>
          全部({props.photos.length})
          <RightOutline />
        </div>
      </div>
      <div className='photos-body'>
        <div className='photos-content'>
          {
            props.photos.map(item => <img src={item} key={item} onClick={onPreview(item)} />)
          }
        </div>
      </div>
      <ViewImage {...prevImages} onClose={onClose} />
    </div>
  )
}
