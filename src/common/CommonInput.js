/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React from 'react'
import { Input } from 'semantic-ui-react'

const CommonInput = ({
  onChange,
  onClick = null,
  name,
  type = 'text',
  background,
  value,
  inputStyle = '',
  placeholder = '',
  icon = '',
  iconPosition = null,
  required = false
}) => {
  return (
    <div className="input-wrapper">
      <Input
        onClick={onClick}
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        icon={icon}
        iconPosition="left"
        placeholder={placeholder}
        iconPosition={iconPosition}
        className={`input-${background} ${inputStyle}`}
        required={required}
      />
    </div>
  )
}

export default CommonInput
