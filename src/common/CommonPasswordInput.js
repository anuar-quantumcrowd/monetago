/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState, useEffect } from 'react'

import { Input, Icon } from 'semantic-ui-react'

const CommonPasswordInput = ({
  onChange,
  disabled,
  background,
  value,
  name,
  inputStyle,
  placeholder,
  icon,
  iconPosition,
  required,
  title,
  passwordMetrics,
  callbackPasswordMetrics
  // statusMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  let passwordMethods = {
    meetsMinimumLength: password => password.length >= 8,
    hasNumber: password => new RegExp(/[0-9]/).test(password),
    hasSpecial: password =>
      new RegExp(/[-!@#$%^&*(),.?":{}|<>_~`/;]/).test(password)
  }

  const { meetsMinimumLength, hasNumber, hasSpecial } = passwordMetrics

  const passwordChecklist = [
    {
      label: 'Minimum 8 charaters',
      fullfilled: meetsMinimumLength
    },
    {
      label: 'One number',
      fullfilled: hasNumber
    },
    {
      label: 'One special character',
      fullfilled: hasSpecial
    }
  ]

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  //Check password status
  useEffect(() => {
    let newPasswordMetrics = {}

    Object.keys(passwordMethods).forEach(method => {
      let testResult = passwordMethods[method](value)

      newPasswordMetrics[method] = testResult
    })

    callbackPasswordMetrics({ ...passwordMetrics, ...newPasswordMetrics })
  }, [value])

  return (
    <div className="input-wrapper">
      {title && <label className="default-text input-title">{title}</label>}
      <div className="input-password-holder">
        <Input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          required={required}
          icon={icon}
          iconPosition={iconPosition}
          className={`input-${background} ${inputStyle}`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
        <div className="input-password-action">
          <div></div>
          <div onClick={handleShowPassword} className="input-password-icon">
            <Icon name={showPassword ? 'unhide' : 'hide'} size="large" />
          </div>
        </div>
      </div>
      {/* {status === false && <div className="input-message">{statusMessage}</div>} */}
    </div>
  )
}

export default CommonPasswordInput
