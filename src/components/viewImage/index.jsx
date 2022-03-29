/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 09:21:04
 * @LastEditTime: 2022-03-29 17:29:50
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useState, useEffect} from 'react';
import './index.less';
import {Mask} from 'antd-mobile';
import {CloseOutline} from 'antd-mobile-icons'

export default function ViewImage(props) {
  const {
    show,
    onClose,
    imgList,
    src
  } = props
  const [visible, updateVisible] = useState(false);
  const [count, updateCount] = useState(0)
  useEffect(() => {
    if (show) {
      updateCount(imgList.indexOf(src) || 0);
      updateVisible(true);
    } else updateVisible(false)
  }, [show])
  return (
    <Mask opacity='thick' visible={visible}>
      <div className='prev-body'>
        {
          show && <div className='count-num'>
          {count+1}
          /{imgList.length}
        </div>
        }
        <div className='close-icon'>
          <CloseOutline fontSize={28} color='#fff' onClick={onClose} />
        </div>
        <img src={src} />
      </div>
    </Mask>
  )
}
