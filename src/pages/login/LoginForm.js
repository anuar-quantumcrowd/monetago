/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/user/userActions'
import { Form } from 'semantic-ui-react'
import CommonButtons from '../../common/CommonButton'
import CommonInput from '../../common/CommonInput'

const LoginForm = props => {
  const { loginStep } = props

  const [user, setUser] = useState({ userId: '', pswd: '' })
  const accounts = useSelector(state => state.organization.accounts)
  const dispatch = useDispatch()

  const onChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const onSubmitLog = () => {
    console.log(user)
    if (user.userId && user.pswd) {
      dispatch(login(user.userId, user.pswd))
    }
  }

  return (
    <div>
      <Form className="login-form">
        <img
          src={require('../../assets/svg/login-logo.svg')}
          alt="Logo"
          className="logo"
        />
        <h2 className="login-form-title form-title">Sign in</h2>
        <div className="login-form-subtitle form-subtitle">
          Welcome to Treasury Debt Issuance
        </div>
        <Form.Field className="form-field">
          <CommonInput
            inputStyle="common-input"
            name="userId"
            onChange={onChangeInput}
            icon="user"
            placeholder="Enter User ID"
            iconPosition="left"
          />
        </Form.Field>
        <Form.Field className="form-field">
          <CommonInput
            icon="lock"
            name="pswd"
            onChange={onChangeInput}
            inputStyle="common-input"
            placeholder="Enter Password"
            iconPosition="left"
            type="password"
          />
        </Form.Field>
        <div
          className="login-form-link form-link-text"
          onClick={() => loginStep('forgotPassword')}
        >
          Forgot Password?
        </div>

        <CommonButtons
          onClick={onSubmitLog}
          content="SIGN IN"
          btnClass="login-form-btn btn-blue"
        />
      </Form>
    </div>
  )
}

export default LoginForm
