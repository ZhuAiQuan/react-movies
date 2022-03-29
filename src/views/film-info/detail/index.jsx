/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-28 17:04:48
 * @LastEditTime: 2022-03-29 17:39:13
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import {LeftOutline} from 'antd-mobile-icons';
import bg from '@/assets/images/batman.jpg'
import FilmInfo from './info';
import ActorsList from './actors';
import FilmPhotos from './photos';
import { useNavigate } from 'react-router-dom'
import './index.less'

export default function FilmDetail() {
  const {id} = useParams();
  const actors = [
    {
      name: '科林·法瑞尔',
      role: 'Oswald Cobblepot / The Penguin',
      avatarAddress: "https://pic.maizuo.com/usr/movie/3be2bb3d7f84dc0d39cde92dcc459ba7.jpg"
    },
    {
      name: '科林·法瑞尔1',
      role: 'Oswald Cobblepot / The Penguin',
      avatarAddress: "https://pic.maizuo.com/usr/movie/3be2bb3d7f84dc0d39cde92dcc459ba7.jpg"
    },
    {
      name: '科林·法瑞尔2',
      role: 'Oswald Cobblepot / The Penguin',
      avatarAddress: "https://pic.maizuo.com/usr/movie/3be2bb3d7f84dc0d39cde92dcc459ba7.jpg"
    },
    {
      name: '科林·法瑞尔3',
      role: 'Oswald Cobblepot / The Penguin',
      avatarAddress: "https://pic.maizuo.com/usr/movie/3be2bb3d7f84dc0d39cde92dcc459ba7.jpg"
    },
    {
      name: '科林·法瑞尔4',
      role: 'Oswald Cobblepot / The Penguin',
      avatarAddress: "https://pic.maizuo.com/usr/movie/3be2bb3d7f84dc0d39cde92dcc459ba7.jpg"
    },
    {
      name: '科林·法瑞尔5',
      role: 'Oswald Cobblepot / The Penguin',
      avatarAddress: "https://pic.maizuo.com/usr/movie/3be2bb3d7f84dc0d39cde92dcc459ba7.jpg"
    },
  ]
  const photos = [
    "https://pic.maizuo.com/usr/2022/1ab9ab172ea2ba195e012caa47c57fc4.jpg",
    "https://pic.maizuo.com/usr/2022/994acaac041b771e7137af69676299bf.jpg",
    "https://pic.maizuo.com/usr/2022/9a297ff5c119343daf507b57e366dd25.jpg",
    "https://pic.maizuo.com/usr/2022/c9bc84072c676395baa8ab39c5a6c753.jpg",
    "https://pic.maizuo.com/usr/2022/ef72eb0274770994e55d5f3616bed7f9.jpg",
  ]
  const router = useNavigate();
  return (
    <div className='film-container'>
      <div className='title'>
        <div className='back' onClick={() => router(-1)}>
          <LeftOutline fontSize={20} />
        </div>
        <div className='film-name'>title</div>
      </div>
      <div className='film-bg'>
        <img src={bg} />
      </div>
      <FilmInfo />
      <ActorsList actors={actors} />
      <FilmPhotos photos={photos} />
    </div>
  )
}