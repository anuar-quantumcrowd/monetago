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
import axioz from '../../common/ApiUtils'
import Authentication from '../../common/Authentication'

const callGetProfileApi = route => {
  // GET - Get User Profile
  axioz('get', '/auth/me', {
    headers: {
      Authorization: `Bearer ${Authentication.load()}`
    }
  })
    .then(response => {
      console.log(response)
      Authentication.saveUserProfile(JSON.stringify(response.data))
      route.push('/dashboard')
    })
    .catch(err => {
      console.log(err)
    })
}

export const login = (email, password, route) => {
  return dispatch => {
    dispatch(request())
    sessionStorage.clear()

    // POST - Login and Create Session
    axioz('post', '/auth/signin', {
      email: email,
      password: password
    })
      .then(response => {
        console.log(response)
        Authentication.saveAccessToken(response.data.token)
        Authentication.saveTokenExpiration(response.data.expires)
        callGetProfileApi(route)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const logout = route => {
  sessionStorage.clear()
  route.push('/')
}

export const createUsers = data => {
  //Create user for organization and admin
  return dispatch => {
    axioz('post', '/useraccounts', data)
      .then(response => {
        dispatch(requestCreate(response))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const updateUserRole = (userID, role) => {
  // Update users
  axioz('patch', `/useraccounts/${userID}`, role)
    .then(response => {
      console.log(response)
      console.log(role)
    })
    .catch(err => {
      console.log(err)
    })
}

export const setUserStatus = (userId, action) => {
  if (action === 'activate') {
    // GET - Disable a User Account
    axioz('patch', `/useraccounts/${userId}`, {
      active: true
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    // PATCH - Disable a User Account
    axioz('patch', `/useraccounts/${userId}/deactivate`)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const updateUserAccount = data => {
  return dispatch => {
    // PATCH = Update a User Account
    axioz('patch', `/useraccounts/${data.id}`, data)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })

    dispatch(updateUser(data))
  }
}

export const fetchUserAccount = (id, organizations) => {
  return dispatch => {
    let userData = {}

    // GET - Specific User Accounts
    axioz('get', `/useraccounts/${id}`)
      .then(response => {
        userData = response.data
        userData.organization = organizations.filter(org => {
          return org.orgId === response.data.orgId
        })
        dispatch(fetchUser(userData))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const request = () => {
  return { type: userConstants.USER_LOGIN_REQUEST }
}

const requestCreate = data => {
  return { type: userConstants.CREATE_REQUEST }
}

const success = (orgId, user) => {
  return { type: userConstants.USER_LOGIN_SUCCESS, user: user, orgId: orgId }
}

const fetchUser = userData => {
  return {
    type: userConstants.FETCH_USER_ACCOUNT,
    data: userData
  }
}

const updateUser = data => {
  return {
    type: userConstants.UPDATE_USER_ACCOUNT,
    data: data
  }
}
