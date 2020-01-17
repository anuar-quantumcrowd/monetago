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
  CHECKBOX_SELECT_USER,
  ORG_ACCOUNT,
  CREATE_ORGANIZATION,
  FETCH_API,
  SET_ORG_USER,
  RESET_SELECTED_USERS
} from './organizationTypes'
import axioz from '../../common/ApiUtils'

export const orgActiveStep = currStep => {
  return {
    type: ORG_ACTIVE_STEP,
    activeStep: currStep
  }
}

export const orgAccount = (data, organization) => {
  return {
    type: ORG_ACCOUNT,
    data: data,
    orgName: organization
  }
}

export const orgProfile = (currStep, currOrgTab, orgId) => {
  return {
    type: ORG_PROFILE,
    activeStep: currStep,
    activeOrgTab: currOrgTab,
    orgId: orgId
  }
}

export const sortBy = (tableType, sortType = '', orgName) => {
  return {
    type: SORT_ADMIN_TABLE,
    tableType: tableType,
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

export const userCheckbox = (tableType, id, orgName) => {
  return {
    type: CHECKBOX_SELECT_USER,
    tableType: tableType,
    checkedUser: id,
    orgName: orgName
  }
}
export const resetSelected = () => {
  return {
    type: RESET_SELECTED_USERS,
    selected: false
  }
}

export const fetchApi = () => {
  return dispatch => {
    let orgData = []
    let userData = []
    console.log('Fetch API')
    // GET - All Organizations
    axioz('get', '/organizations')
      .then(response => {
        orgData = response.data._embedded.organizations
        // GET - All User Accounts
        axioz('get', '/useraccounts')
          .then(response => {
            userData = response.data._embedded.useraccounts
            dispatch(callApi(orgData, userData))
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const createOrganization = data => {
  return dispatch => {
    axioz('post', '/organizations', data)
      .then(response => {
        console.log(response, 'Test')
        dispatch(createOrg(response))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// export const callUserAccountsApi = () => {
//   return dispatch => {
//     // GET - All User Accounts
//     axioz('get', '/useraccounts')
//       .then(response => {
//         dispatch(setUserAccounts(response.data._embedded.useraccounts))
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }

const callApi = (orgs, users) => {
  return {
    type: FETCH_API,
    orgs: orgs,
    data: users
  }
}

export const setUserOrg = () => {
  return {
    type: SET_ORG_USER
  }
}

export const createOrg = () => {
  return { type: CREATE_ORGANIZATION }
}
