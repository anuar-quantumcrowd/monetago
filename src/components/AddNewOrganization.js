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
import { useDispatch } from 'react-redux'

import { createOrganization } from '../redux/organization/organizationActions'
import CommonInput from '../common/CommonInput'
import CommonDropdown from '../common/CommonDropdown'
import CommonButtons from '../common/CommonButton'

const organization = [
  {
    key: 1,
    text: 'Issuer',
    value: 'Issuer'
  },
  {
    key: 2,
    text: 'IPA',
    value: 'IPA'
  },
  {
    key: 3,
    text: 'Investor',
    value: 'Investor'
  },
  {
    key: 4,
    text: 'Service Provider',
    value: 'Service Provider'
  }
]

const subroles = [
  {
    key: 1,
    text: 'CRA',
    value: 'CRA'
  },
  {
    key: 2,
    text: 'RTA',
    value: 'RTA'
  },
  {
    key: 3,
    text: 'Dealer',
    value: 'Dealer'
  },
  {
    key: 4,
    text: 'Depository',
    value: 'Depository'
  }
]

const AddNewOrganization = props => {
  const { showModal } = props
  const dispatch = useDispatch()

  const [orgType, setOrgType] = useState({
    legalName: '',
    networkRole: null,
    networkSubRole: null,
    configLDAP: '',
    active: true,
    version: 0
  })

  const onChangeInput = e => {
    const orgName = e.target.name
    const orgVal = e.target.value

    setOrgType({ ...orgType, [orgName]: orgVal })
  }

  const onChangeDropdown = e => {
    const orgRoleParent = e.target.parentNode.parentNode.parentNode.getAttribute(
      'name'
    )
    const orgRole = e.target.parentNode.parentNode.getAttribute('name')
    const orgRoleVal = e.target.innerText.toUpperCase().replace(/\s/g, '')

    if (orgRoleParent === 'networkSubRole' || orgRole === 'networkSubRole') {
      setOrgType({ ...orgType, networkSubRole: orgRoleVal })
    } else if (orgRole === 'networkRole' || orgRoleParent === 'networkRole') {
      setOrgType({ ...orgType, networkRole: orgRoleVal })
    }
  }

  const onSubmitOrg = () => {
    console.log(orgType)
    dispatch(createOrganization(orgType))
  }

  return (
    <div className="add-new-organization-wrapper">
      <p className="modal-form-title">Add Organization</p>
      <CommonInput
        name="legalName"
        placeholder="Organization name"
        inputStyle="organization-inputs"
        onChange={onChangeInput}
      />

      <CommonDropdown
        options={organization}
        name="networkRole"
        placeholder="Select Type of Organization"
        dropdownClass="select-org-dropdown"
        onChange={onChangeDropdown}
      />

      {orgType.networkRole === 'SERVICEPROVIDER' ? (
        <CommonDropdown
          options={subroles}
          name="networkSubRole"
          placeholder="Select Subrole"
          dropdownClass="select-org-dropdown"
          onChange={onChangeDropdown}
        />
      ) : null}

      <CommonInput
        name="configLDAP"
        placeholder="configLDAP"
        inputStyle="organization-inputs"
      />
      <div className="btn-actions">
        <CommonButtons
          content="CANCEL"
          btnClass="cancel-btn btn-gray"
          onClick={() => showModal(false)}
        />
        <CommonButtons
          content="CREATE ORGANIZATION"
          btnClass="create-btn btn-blue"
          onClick={onSubmitOrg}
        />
      </div>
    </div>
  )
}

export default AddNewOrganization
