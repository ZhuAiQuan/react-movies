/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 14:34:18
 * @LastEditTime: 2022-03-29 14:52:46
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react'

export default function ActorsList(props) {
  const {
    avatarAddress,name,role
  } = props
  return (
    <div className='actors-item'>
      <img src={avatarAddress} />
      <div>
        {name}
      </div>
      <div title={role}>
        {role}
      </div>
    </div>
  )
}
