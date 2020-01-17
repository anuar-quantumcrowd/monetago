import React, { useState } from 'react'
import LoginFormIPA from './LoginFormIPA'
import ForgotPassword from './ForgotPassword'

const IPALogin = () => {
  const [loginStep, setLoginStep] = useState('loginForm')

  const loginComponents = {
    loginForm: LoginFormIPA,
    forgotPassword: ForgotPassword
  }

  const ActiveComponent = loginComponents[loginStep]

  return (
    <div className="login-body">
      <ActiveComponent loginStep={setLoginStep} />
    </div>
  )
}

export default IPALogin
