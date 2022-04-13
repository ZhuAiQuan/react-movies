/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 09:59:09
 * @LastEditTime: 2022-04-13 17:10:02
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function CinemasList({list}) {
  const push = useNavigate();
  function onPush() {
    push('/cinema-film/8506')
  }
  return (
    <div className='cinemas-list-content'>
      {
        list.map(item => (
          <div className='cinemas-list-content-item-body' key={item.cinemaId} onClick={onPush}>
            <div className='cinemas-list-content-item'>
              <div className='item-left'>
                <div className='cinemas-name'>{item.name}</div>
                <div className='cinemas-address'>{item.address}</div>
              </div>
              <div className='item-right'>
                <div className='cinemas-price'>{item.lowPrice}</div>
                <div className='cinemas-distance'>{item.Distance}</div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
