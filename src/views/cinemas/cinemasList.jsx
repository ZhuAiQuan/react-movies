/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 09:59:09
 * @LastEditTime: 2022-04-01 10:23:36
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react'

export default function CinemasList({list}) {
  return (
    <div className='cinemas-list-content'>
      {
        list.map(item => (
          <div className='cinemas-list-content-item-body' key={item.cinemaId}>
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
