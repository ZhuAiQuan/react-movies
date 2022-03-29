/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 14:23:41
 * @LastEditTime: 2022-03-29 14:59:24
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import ActorsListItem from './actors-list'

export default function ActorsList(props) {
  return (
    <div className='actors-container'>
      <div className='actors-title'></div>
      <div className='actors-context'>
        <div className='actors-list' style={{ width: `calc(${props.actors.length}*95px)` }}>
          {
            props.actors.map(item => <ActorsListItem key={`${item.name}+${item.role}+${item.avatarAddress}`} {...item} />)
          }
        </div>
      </div>
    </div>
  )
}
