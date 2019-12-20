/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import { ORG_ACTIVE_STEP } from './organizationTypes'

const initialState = {
  activeStep: 'organizationCardList',
  organization: [
    {
      status: 'inactive',
      avatar: 'AB',
      name: 'AMCE Bldg Supply LTD',
      info: 'AMCE Building Supply',
      type: 'Issuer',
      users: '24'
    },
    {
      status: 'active',
      avatar: 'JC',
      name: 'JC Supply PTY',
      info: 'Construction Supply',
      type: 'Investor',
      users: '98'
    },
    {
      status: 'inactive',
      avatar: 'DK',
      name: 'DK Solutions',
      info: 'Solutions Company',
      type: 'IPA',
      users: '106'
    },
    {
      status: 'active',
      avatar: 'JC',
      name: 'JC Supply PTY',
      info: 'Construction Supply',
      type: 'Investor',
      users: '98'
    },
    {
      status: 'active',
      avatar: 'JC',
      name: 'JC Supply PTY',
      info: 'Construction Supply',
      type: 'Investor',
      users: '98'
    }
  ]
}

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORG_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.activeStep
      }
    default:
      return state
  }
}
