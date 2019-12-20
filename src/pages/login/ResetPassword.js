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
import { Image, Header } from 'semantic-ui-react'
import CommonInput from '../../common/CommonInput'
import CommonButton from '../../common/CommonButton'

const ResetPassword = () => {
  const [forgotEmail, setForgotEmail] = useState('')
  return (
    <div>
      <div className="form-container">
        <div className="form-content">
          <Image src={require('../../assets/images/monetaGo-logo.png')} />
          <Header as="h2" className="forgot-password-header">
            FORGOT PASSWORD?
          </Header>
          <p className="header-message">
            Kindly enter your registered email and we will get back to you with
            a reset password link and OTP confirmation.
          </p>
          <CommonInput
            icon="mail"
            iconPosition="left"
            placeholder="Enter Email Address"
            inputStyle="forgot-email"
            type="email"
            onChange={e => setForgotEmail(e.target.value)}
          />
          <CommonButton content="REQUEST RESET PASSWORD" />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
