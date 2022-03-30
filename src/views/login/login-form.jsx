/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-30 14:06:05
 * @LastEditTime: 2022-03-30 15:21:32
 * @LastEditors: zaq
 * @Reference: 
 */
import React, {useState, useEffect} from 'react';
import LoginInput from './input'

export default function LoginForm(props) {
  const [form, updateForm] = useState({
    mobile: '',
    code: '',
    mobile_active: false
  })
  const changeForm = (value, key) => {
    const obj = {};
    obj[key] = value;
    updateForm({
      ...form,
      ...obj
    })
  }
  useEffect(() => {
    const reg = /^1[3456789]\d{9}$/;
    if (reg.test(form.mobile)) {
      form.mobile_active = true
    } else {
      form.mobile_active = false
    }
  }, [form.mobile])
  return (
    <div className='login-form'>
      <LoginInput mobile={form.mobile} onChange={changeForm}>
        <div className={`seedcode ${form.mobile_active ? 'seedcode-active' : ''}`}>获取验证码</div>
        {
          (form.mobile && !form.mobile_active) && <div className='check-value'>请输入11位正确的手机号码</div>
        }
      </LoginInput>
      <LoginInput code={form.code} onChange={changeForm} />
      {props.children}
    </div>
  )
}
