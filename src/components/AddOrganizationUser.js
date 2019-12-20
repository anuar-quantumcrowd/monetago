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

import CommonInput from '../common/CommonInput'

import CommonDropdown from '../common/CommonDropdown'

import CommonButtons from '../common/CommonButton'

const AddOrganizationUser = ({ company }) => {
  const [state, setstate] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setstate({ ...state, [name]: value })
  }

  const handleDropDownChange = e => {
    const input = e.target.innerText
    setstate({ ...state, role: input })
  }

  const create_user = () => {
    if (state.password === state.confirmPass) {
      console.log('Password matched')
    } else {
      console.log(`Password did'nt match`)
    }
  }

  return (
    <div className="add-user-container">
      <div className="add-user-title">Add a User</div>
      {inputs.map((data, i) =>
        data.onContainer ? (
          <div className="fullname-container">
            {data.onContainer.map((dataCont, i) => {
              return (
                <dataCont.inputType
                  key={i}
                  icon={dataCont.icon}
                  iconPosition={dataCont.iconPos}
                  placeholder={dataCont.placeholder}
                  inputStyle={dataCont.inputStyle}
                  type={dataCont.type}
                  name={dataCont.name}
                  value={state.name}
                  onChange={e => handleChange(e)}
                />
              )
            })}
          </div>
        ) : (
          <data.inputType
            key={i}
            icon={data.icon}
            iconPosition={data.iconPos}
            placeholder={data.placeholder}
            inputStyle={data.inputStyle}
            type={data.type}
            name={data.name}
            options={roles}
            dropdownClass={data.dropClass}
            value={data.name === 'orgName' ? company : state.name}
            onChange={e => {
              data.inputType === CommonDropdown
                ? handleDropDownChange(e)
                : handleChange(e)
            }}
          />
        )
      )}
      <div className="actions">
        <CommonButtons content="CANCEL" btnClass="cancel-btn" />
        <CommonButtons
          content="CREATE ACCOUNT"
          btnClass="create-btn"
          onClick={create_user}
        />
      </div>
    </div>
  )
}

const inputs = [
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'text',
    icon: 'user',
    iconPos: 'left',
    placeholder: 'User ID',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'userId'
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'password',
    icon: 'lock',
    iconPos: 'left',
    placeholder: 'Password',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'password'
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'password',
    icon: 'lock',
    iconPos: 'left',
    placeholder: 'Confirm Password',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'confirmPass'
  },
  {
    onContainer: [
      {
        inputType: CommonInput,
        type: 'text',
        icon: '',
        iconPos: 'left',
        placeholder: 'First name',
        inputStyle: 'halfwidth-inputs',
        required: true,
        name: 'fName'
      },
      {
        inputType: CommonInput,
        type: 'text',
        icon: '',
        iconPos: 'left',
        placeholder: 'Last name',
        inputStyle: 'halfwidth-inputs',
        required: true,
        name: 'lName'
      }
    ]
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'email',
    icon: 'mail',
    iconPos: 'left',
    placeholder: 'Email Address',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'email'
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'number',
    icon: 'mobile alternate',
    iconPos: 'left',
    placeholder: 'Phone number',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'pNum'
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'text',
    icon: '',
    iconPos: 'left',
    placeholder: 'Organization name',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'orgName'
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'text',
    icon: '',
    iconPos: 'left',
    placeholder: 'Group (Optional)',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'group'
  },
  {
    onContainer: false,
    inputType: CommonInput,
    type: 'text',
    icon: '',
    iconPos: 'left',
    placeholder: 'Department (Optional)',
    inputStyle: 'fullwidth-inputs',
    required: true,
    name: 'dept'
  },
  {
    onContainer: false,
    inputType: CommonDropdown,
    // type: 'text',
    icon: '',
    iconPos: '',
    placeholder: 'Select a Role',
    dropClass: 'fullwidth-inputs',
    options: roles,
    required: false,
    name: 'roles'
  }
]

const roles = [
  {
    key: 1,
    text: 'Sample1',
    value: 'Sample1'
  },
  {
    key: 2,
    text: 'Sample2',
    value: 'Sample2'
  }
]

export default AddOrganizationUser
