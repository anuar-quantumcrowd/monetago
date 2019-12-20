import React, { Fragment, useState } from 'react'
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
    sidebarItem: ['Account']
  }
]

const sidebarMenuCustomer = [
  {
    sidebarItem: ['settings', 'profile']
  }
]

const Sidebar = ({ onClickSidebar, activeComponent }) => {
  const [navigationTab, setnavigationTab] = useState({ user: 'admin' })
  let activeSidebar = sidebarMenuAdmin

  if (navigationTab.user === 'admin') {
    activeSidebar = sidebarMenuAdmin
  } else if (navigationTab.user === 'orgAdmin') {
    activeSidebar = sidebarMenuOrg
  } else if (navigationTab.user === 'customer') {
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
              <span id={menu.tabItem} className="side-item org-identity-detail">
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
