/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-30 13:59:00
 * @LastEditTime: 2022-03-30 15:20:50
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react';
import './index.less';
import logo from '@/assets/images/logo.png';
import LoginForm from './login-form';
import {Button} from 'antd-mobile'

export default function LoginPage() {
  return (
    <div className='login-content'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <LoginForm>
        <Button block color='warning' size='large' style={{marginTop: '30px'}}>登录</Button>
        <div className='tips'>收不到验证码</div>
      </LoginForm>
    </div>
  )
}
