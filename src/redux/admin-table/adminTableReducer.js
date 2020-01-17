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
  SORT_ADMIN_TABLE,
  FILTER_ADMIN_TABLE,
  CHECKBOX_SELECT_USER
} from './adminTableTypes'

const initialState = {
  sortBy: '',
  filterBy: '',
  ascending: false,
  selectAll: false,
  column: ['userId', 'name', 'email', 'phoneNumber', 'group', 'role', 'active'],
  filterOptions: [
    {
      name: 'role',
      placeholder: 'Role: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'admin',
          value: 'admin',
          text: 'Admin'
        },
        {
          key: 'User',
          value: 'User',
          text: 'User'
        }
      ]
    },
    {
      name: 'group',
      placeholder: 'Group: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'group1',
          value: 'group1',
          text: 'Group 1'
        },
        {
          key: 'group2',
          value: 'group2',
          text: 'Group 2'
        },
        {
          key: 'group3',
          value: 'group3',
          text: 'Group 3'
        }
      ]
    },
    {
      name: 'status',
      placeholder: 'Status: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'active',
          value: 'active',
          text: 'Active'
        },
        {
          key: 'inactive',
          value: 'inactive',
          text: 'Inactive'
        }
      ]
    }
  ],
  data: [
    {
      userId: 'user0981',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      phoneNumber: '+63519 862 7612',
      group: 'Group 1',
      role: 'Admin',
      active: true,
      selected: false
    },
    {
      userId: 'user09825861',
      firstName: 'Richardson',
      lastName: 'Vandelier',
      email: 'richardson.vandelier@gmail.com',
      phoneNumber: '+63519 862 7612',
      group: 'Group 2',
      role: 'Admin',
      active: false,
      selected: false
    },
    {
      userId: 'user098252',
      firstName: 'Thomas',
      lastName: 'Col',
      email: 'TMCollines@gmail.com',
      phoneNumber: '+63519 862 7612',
      group: 'Group 2',
      role: 'User',
      active: true,
      selected: false
    },
    {
      userId: 'user09825361',
      firstName: 'Raven',
      lastName: 'Dutch',
      email: 'raven.dutch@gmail.com',
      phoneNumber: '+63519 862 7612',
      group: 'Group 3',
      role: 'User',
      active: true,
      selected: false
    },
    {
      userId: 'user09825327',
      firstName: 'James',
      lastName: 'Bond',
      email: 'james.bond@gmail.com',
      phoneNumber: '+63519 862 7612',
      group: 'Group 4',
      role: 'Admin',
      active: false,
      selected: false
    }
  ],
  headers: [
    {
      key: 'checkbox'
    },
    {
      key: 'userId',
      content: 'User ID'
    },
    {
      key: 'firstName',
      content: 'Name'
    },
    {
      key: 'email',
      content: 'Email'
    },
    {
      key: 'phoneNumber',
      content: 'Phone Number'
    },
    {
      key: 'group',
      content: 'Group'
    },
    {
      key: 'role',
      content: 'Role'
    },
    {
      key: '',
      content: ''
    },
    {
      key: '',
      content: ''
    }
  ]
}

const sortData = state => {
  let self = state.ascending
  self = !self

  state.data.sort((a, b) => {
    return a[state.sortBy] < b[state.sortBy]
      ? self
        ? 1
        : -1
      : a[state.sortBy] > b[state.sortBy]
      ? self
        ? -1
        : 1
      : 0
  })
}

const selectedUsers = (state, action) => {
  let selectedArr = []

  if (action.checkedUser === 'All') {
    state.selectAll = !state.selectAll

    state.data.find(arr => {
      state.selectAll ? (arr.selected = true) : (arr.selected = false)
    })
  } else {
    state.data.find(arr => {
      if (arr.userId === action.checkedUser) {
        arr.selected = !arr.selected
      }
    })
  }

  state.data.map(data => {
    data.selected ? selectedArr.push(data.userId) : null
  })

  selectedArr.length === state.data.length
    ? (state.selectAll = true)
    : (state.selectAll = false)

  return state.data
}

export const adminTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ADMIN_TABLE:
      return {
        ...state,
        ascending: !state.ascending,
        sortBy: action.sortType,
        data: state.data.sort(sortData(state))
      }

    case FILTER_ADMIN_TABLE:
      return {
        ...state,
        filterBy: action.filterType
      }

    case CHECKBOX_SELECT_USER:
      return {
        ...state,
        data: selectedUsers(state, action)
      }

    default:
      return state
  }
}
