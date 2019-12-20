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
import { Image, Form } from 'semantic-ui-react'
import CommonButtons from '../../common/CommonButton'
import ResetPassword from './ResetPassword'
import CommonInput from '../../common/CommonInput'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  const [link, setlink] = useState(true)

  return (
    <div className="login-container">
      <div className="login-img"></div>
      <div className="login-form-container">
        {link ? (
          <Form className="login-form">
            <Image
              src={require('../../assets/svg/login-logo.svg')}
              className="logo"
            />
            <h2>Sign in</h2>
            <p>Welcome to Treasury Debt Issuance</p>
            <Form.Field className="form-field">
              <CommonInput
                inputStyle="login-cred"
                icon="user"
                placeholder="Enter User ID"
                iconPosition="left"
              />
            </Form.Field>
            <Form.Field className="form-field">
              <CommonInput
                icon="lock"
                inputStyle="login-cred"
                placeholder="Enter Password"
                iconPosition="left"
                type="password"
              />
            </Form.Field>
            <a onClick={() => setlink(false)}>Forgot Password?</a>

            <CommonButtons
              onClick={() => {
                window.location.href = '/#/dashboard'
              }}
              content="SIGN IN"
            />
          </Form>
        ) : (
          <ResetPassword />
        )}
      </div>
    </div>
  )
}

export default LoginPage
