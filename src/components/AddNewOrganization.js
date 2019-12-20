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
import CommonInput from '../common/CommonInput'
import CommonDropdown from '../common/CommonDropdown'
import CommonButtons from '../common/CommonButton'

const organization = [
  {
    key: 1,
    text: 'Sample1',
    value: 'Sample1'
  },
  {
    key: 2,
    text: 'Sample2',
    value: 'Sample2'
  },
  {
    key: 3,
    text: 'Sample3',
    value: 'Sample3'
  },
  {
    key: 4,
    text: 'Sample4',
    value: 'Sample4'
  },
  {
    key: 5,
    text: 'Sample5',
    value: 'Sample5'
  }
]

const AddNewOrganization = () => {
  return (
    <div className="add-new-organization-wrapper">
      <p>Add Organization</p>
      <CommonInput
        icon=""
        iconPosition="right"
        placeholder="Organization name"
        inputStyle="organization-inputs"
      />
      <CommonInput
        icon=""
        iconPosition="right"
        placeholder="Description"
        inputStyle="organization-inputs"
      />
      <CommonDropdown
        options={organization}
        name={organization}
        placeholder="Select Type of Organization"
        dropdownClass="select-org-dropdown"
      />
      <div className="btn-actions">
        <CommonButtons content="CANCEL" btnClass="cancel-btn" />
        <CommonButtons content="CREATE ORGANIZATION" btnClass="create-btn" />
      </div>
    </div>
  )
}

export default AddNewOrganization
