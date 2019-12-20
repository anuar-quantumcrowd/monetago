/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import {
  ORG_ACTIVE_STEP,
  ORG_PROFILE,
  SORT_ADMIN_TABLE,
  FILTER_ADMIN_TABLE,
  CHECKBOX_SELECT_USER
} from './organizationTypes'

export const orgActiveStep = currStep => {
  return {
    type: ORG_ACTIVE_STEP,
    activeStep: currStep
  }
}

export const orgProfile = (currStep, data, organization) => {
  return {
    type: ORG_PROFILE,
    activeStep: currStep,
    data: data,
    orgName: organization
  }
}

export const sortBy = (sortType = '', orgName) => {
  return {
    type: SORT_ADMIN_TABLE,
    sortType: sortType,
    orgName: orgName
  }
}

export const filterBy = e => {
  return {
    type: FILTER_ADMIN_TABLE,
    filterType: e.target.firstElementChild.innerText
  }
}

export const userCheckbox = (id, orgName) => {
  return {
    type: CHECKBOX_SELECT_USER,
    checkedUser: id,
    orgName: orgName
  }
}
