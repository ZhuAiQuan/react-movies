/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-30 14:08:56
 * @LastEditTime: 2022-03-30 15:00:21
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import { CloseOutline } from 'antd-mobile-icons'

export default function LoginInput({children, mobile, code, onChange}) {
  const key = mobile !== undefined ? 'mobile' : 'code';
  const value = mobile !== undefined ? mobile : code;
  const onClear = () => {
    onChange('', key)
  }
  return (
    <div className='input-content'>
      <input className='login-input' value={value} onChange={e => onChange(e.target.value, key)} placeholder={`${mobile !== undefined ? '手机号' : '验证码'}`} />
      {
        value && (
          <div className='close-icon' onClick={onClear}>
            <CloseOutline color="#fff" />
          </div>
        )
      }
      {children}
    </div>
  )
}
