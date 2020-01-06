/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import { userConstants } from './userTypes'

export const login = (username, password) => {
  return dispatch => {
    dispatch(request())

    if (username === 'monetagoadmin' && password == '000') {
      const orgId = '000'
      dispatch(success(orgId, username))
      window.location.href = '#/dashboard'
    } else if (username === 'orgadmin' && password == '111') {
      const orgId = '111'
      window.location.href = '#/dashboard'

      dispatch(success(orgId, username))
    }
  }
}

const request = () => {
  return { type: userConstants.USER_LOGIN_REQUEST }
}

const success = (orgId, user) => {
  return { type: userConstants.USER_LOGIN_SUCCESS, user: user, orgId: orgId }
}
