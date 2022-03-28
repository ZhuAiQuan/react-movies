/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-28 17:04:48
 * @LastEditTime: 2022-03-28 17:54:22
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import './index.less'

export default function FilmDetail() {
  const {id} = useParams();
  return (
    <div className='film-container'>
      <div className='back'></div>
      <div className='film-bg'></div>
    </div>
  )
}