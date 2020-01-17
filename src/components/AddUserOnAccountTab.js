/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState, Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CommonInput from '../common/CommonInput'
import CommonPasswordInput from '../common/CommonPasswordInput'
import CommonDropdown from '../common/CommonDropdown'
import CommonButtons from '../common/CommonButton'
import CommonManipulators from '../common/CommonManipulators'
import CommonValidations from '../common/CommonValidations'

import { createUsers } from '../redux/user/userActions'

const roles = [
  {
    key: 1,
    text: 'Issuer - Senior Treasury Operations',
    value: 'Issuer - Senior Treasury Operations'
  },
  {
    key: 2,
    text: 'Investor - Senior Operations',
    value: 'Investor - Senior Operations'
  },
  {
    key: 3,
    text: 'IPA - Senior Operations',
    value: 'IPA - Senior Operations'
  },
  {
    key: 4,
    text: 'MGADMIN',
    value: 'MGADMIN'
  }
]

const AddUserOnAccountTab = props => {
  const { showModal } = props
  const dispatch = useDispatch()

  const orgState = useSelector(state => state.organization)
  const orgList = []

  orgState.organizations.map((org, i) => {
    return orgList.push({
      key: i + 1,
      text: org.legalName,
      value: org.orgId
    })
  })

  const [disabled, setDisabled] = useState(true)
  const [inputStatus, setInputStatus] = useState({
    email: null,
    password: false,
    confirmPass: false
  })
  const [loader, setLoader] = useState(false)

  const [passwordMetrics, setPasswordMetrics] = useState({
    meetsMinimumLength: false,
    hasNumber: false,
    hasSpecial: false
  })

  const [confirmPasswordMetrics, setConfirmPasswordMetrics] = useState({
    meetsMinimumLength: false,
    hasNumber: false,
    hasSpecial: false
  })

  const [createUser, setCreateUser] = useState({
    uid: '',
    orgId: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    department: '',
    groups: '',
    roles: [],
    confirmPass: '',
    password: '',
    profile: '{}',
    active: true
  })

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
      name: 'uid',
      value: createUser.uid
    },
    {
      onContainer: false,
      inputType: CommonPasswordInput,
      // type: 'password',
      icon: 'lock',
      iconPos: 'left',
      placeholder: 'Password',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'password',
      value: createUser.password,
      passwordMetrics: passwordMetrics,
      callbackPasswordMetrics: setPasswordMetrics,
      status: inputStatus,
      callbackInputStatus: setInputStatus
    },
    {
      onContainer: false,
      inputType: CommonPasswordInput,
      // type: 'password',
      icon: 'lock',
      iconPos: 'left',
      placeholder: 'Confirm Password',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'confirmPass',
      value: createUser.confirmPass,
      passwordMetrics: confirmPasswordMetrics,
      callbackPasswordMetrics: setConfirmPasswordMetrics,
      status: inputStatus,
      callbackInputStatus: setInputStatus
    },
    {
      onContainer: [
        {
          inputType: CommonInput,
          type: 'text',
          placeholder: 'First name',
          inputStyle: 'halfwidth-inputs',
          required: true,
          name: 'firstName',
          value: createUser.firstName
        },
        {
          inputType: CommonInput,
          type: 'text',
          placeholder: 'Last name',
          inputStyle: 'halfwidth-inputs',
          required: true,
          name: 'lastName',
          value: createUser.lastName
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
      name: 'email',
      error: inputStatus.email === null ? false : !inputStatus.email,
      status: inputStatus.email,
      statusMessage: 'Invalid email',
      value: createUser.email
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
      name: 'phone',
      value: createUser.phone
    },
    {
      onContainer: false,
      inputType: CommonDropdown,
      placeholder: 'Organization name',
      dropClass: 'fullwidth-dropdown',
      options: orgList,
      required: false,
      name: 'orgId'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Group (Optional)',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'groups',
      value: createUser.groups
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Department (Optional)',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'department',
      value: createUser.department
    },
    {
      onContainer: false,
      inputType: CommonDropdown,
      placeholder: 'Select a Role',
      dropClass: 'fullwidth-dropdown',
      options: roles,
      required: false,
      name: 'roles'
    }
  ]

  const { emailFormat } = CommonManipulators
  const { validateEmail } = CommonValidations

  const handleChange = event => {
    const { name, value } = event.target
    let targetValue

    if (name === 'email') {
      targetValue = emailFormat(value)
    } else {
      targetValue = value
    }

    setCreateUser({ ...createUser, [name]: targetValue })
  }

  const handleBlur = event => {
    const { name } = event.target

    if (name === 'email') {
      validateEmail(createUser.email, inputStatus, setInputStatus)
    }
  }

  const handleDropDownChange = event => {
    const input = event.target.innerText
    const nameOrgRole = event.target.parentNode.parentNode.parentNode.getAttribute(
      'name'
    )
    const namesOrg = event.target.parentNode.parentNode.getAttribute('name')
    const orgIdFinder = orgList.find(orgName => orgName.text === input)
    if (nameOrgRole === 'roles' || namesOrg === 'roles') {
      setCreateUser({ ...createUser, roles: [input] })
    } else if (nameOrgRole === 'orgId' || namesOrg === 'orgId') {
      setCreateUser({ ...createUser, orgId: orgIdFinder.value })
    }
  }

  const onCreateUser = () => {
    setLoader(true)

    setTimeout(() => {
      dispatch(createUsers(createUser))
    }, 2000)
    console.log(createUser)
  }

  const onEnterSubmit = event => {
    if (event.key === 'Enter') {
      onCreateUser()
    }
  }

  useEffect(() => {
    if (
      passwordMetrics.meetsMinimumLength &&
      passwordMetrics.hasNumber &&
      passwordMetrics.hasSpecial
    ) {
      setInputStatus({
        ...inputStatus,
        password: true
      })
    } else {
      setInputStatus({
        ...inputStatus,
        password: false
      })
    }
  }, [passwordMetrics])

  useEffect(() => {
    if (
      confirmPasswordMetrics.meetsMinimumLength &&
      confirmPasswordMetrics.hasNumber &&
      confirmPasswordMetrics.hasSpecial
    ) {
      setInputStatus({
        ...inputStatus,
        confirmPass: true
      })
    } else {
      setInputStatus({
        ...inputStatus,
        confirmPass: false
      })
    }
  }, [confirmPasswordMetrics])

  useEffect(() => {
    if (
      inputStatus.email !== null &&
      inputStatus.email !== false &&
      inputStatus.password &&
      inputStatus.confirmPass &&
      createUser.password === createUser.confirmPass &&
      createUser.email.length !== 0 &&
      createUser.uid.length !== 0 &&
      createUser.firstName.length !== 0 &&
      createUser.lastName.length !== 0 &&
      createUser.phone.length !== 0 &&
      createUser.orgId.length !== 0 &&
      createUser.roles.length !== 0
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })

  console.log('Password: ' + inputStatus.password)
  console.log('Confirm Password: ' + inputStatus.confirmPass)

  return (
    <div className="add-user-container" onKeyDown={onEnterSubmit}>
      <div className="modal-form-title">Add a User</div>
      {inputs.map((data, i) =>
        data.onContainer ? (
          <div className="fullname-container" key={i}>
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
                  value={dataCont.value}
                  onChange={event => handleChange(event)}
                  status={dataCont.status}
                  statusMessage={dataCont.statusMessage}
                />
              )
            })}
          </div>
        ) : (
          <Fragment key={i}>
            <data.inputType
              key={i}
              icon={data.icon}
              iconPosition={data.iconPos}
              placeholder={data.placeholder}
              inputStyle={data.inputStyle}
              type={data.type}
              name={data.name}
              value={data.value}
              options={data.options}
              dropdownClass={data.dropClass}
              onChange={event => {
                data.inputType === CommonDropdown
                  ? handleDropDownChange(event)
                  : handleChange(event)
              }}
              onBlur={event => handleBlur(event)}
              error={data.error}
              status={data.status}
              statusMessage={data.statusMessage}
              passwordMetrics={data.passwordMetrics}
              callbackPasswordMetrics={data.callbackPasswordMetrics}
            />
          </Fragment>
        )
      )}
      <div className="actions">
        <CommonButtons
          content="CANCEL"
          btnClass="cancel-btn btn-gray"
          onClick={() => showModal(false)}
        />
        <CommonButtons
          content="CREATE ACCOUNT"
          btnClass="create-btn btn-blue"
          onClick={onCreateUser}
          disabled={disabled}
          loader={loader}
        />
      </div>
    </div>
  )
}

export default AddUserOnAccountTab
