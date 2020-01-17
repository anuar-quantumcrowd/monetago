import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetSelected } from '../redux'

const sidebarMenuAdmin = [
  {
    sidebarItem: [
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'Account'
      },
      {
        icon: require('../assets/svg/double-person.svg'),
        iconActive: require('../assets/svg/double-person-active.svg'),
        tabItem: 'Organization'
      }
    ]
  }
]

const sidebarMenuOrg = [
  {
    sidebarItem: [
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'Account'
      },
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'Identity'
      }
    ]
  }
]

const sidebarMenuCustomer = [
  {
    sidebarItem: ['settings', 'profile']
  }
]

const Sidebar = ({ onClickSidebar, activeComponent }) => {
  const login = useSelector(state => state.log)
  const dispatch = useDispatch()
  const [navigationTab, setnavigationTab] = useState({ user: 'admin' })
  let activeSidebar = sidebarMenuAdmin
  dispatch(resetSelected())

  // if (navigationTab.user === 'admin') {
  //   activeSidebar = sidebarMenuAdmin
  // } else if (navigationTab.user === 'orgAdmin') {
  //   activeSidebar = sidebarMenuOrg
  // } else if (navigationTab.user === 'customer') {
  //   activeSidebar = sidebarMenuCustomer
  // }

  if (login.orgId === '000') {
    activeSidebar = sidebarMenuAdmin
  } else if (
    login.orgId === '111' ||
    login.orgId === '112' ||
    login.orgId === '113' ||
    login.orgId === '114'
  ) {
    activeSidebar = sidebarMenuOrg
  } else if (login === 'customer') {
    activeSidebar = sidebarMenuCustomer
  }

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <img src={require('../assets/svg/dashboard-icon.svg')} />
        Dashboard
      </div>
      <div className="sidebar-wrapper">
        {activeSidebar[0].sidebarItem.map((menu, index) => (
          <Fragment key={index}>
            <div
              onClick={onClickSidebar}
              className={`sidebar-sub-item ${
                activeComponent === menu.tabItem ? 'active' : 'inactive'
              }`}
            >
              <span id={menu.tabItem} className="side-item">
                <img
                  src={
                    activeComponent === menu.tabItem
                      ? menu.iconActive
                      : menu.icon
                  }
                />
                {menu.tabItem}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
