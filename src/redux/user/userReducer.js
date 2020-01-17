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

const initialState = {
  loggedIn: false,
  loggingIn: false,
  created: false,
  accountData: {}
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST: {
      return {
        ...state,
        loggingIn: true
      }
    }

    case userConstants.CREATE_REQUEST: {
      return { created: true }
    }

    case userConstants.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        loggingIn: false
      }
    }

    case userConstants.FETCH_USER_ACCOUNT: {
      return {
        ...state,
        accountData: action.data
      }
    }

    case userConstants.UPDATE_USER_ACCOUNT: {
      return {
        ...state,
        accountData: action.data
      }
    }

    default:
      return state
  }
}
