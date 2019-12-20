import React, { useState } from 'react'

import Account from './Account'
import Organization from './Organization'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Account')

  const onClickSidebar = e => {
    const navItem = e.currentTarget.firstChild.getAttribute('id')
    setActiveComponent(navItem)
  }

  let ActiveTabComponent = Account

  if (activeComponent === 'Organization') {
    ActiveTabComponent = Organization
  } else {
    ActiveTabComponent = Account
  }

  return (
    <div className="dashboard">
      <Sidebar
        activeComponent={activeComponent}
        onClickSidebar={onClickSidebar}
      />
      <div className="dashboard-content">
        <ActiveTabComponent />
      </div>
    </div>
  )
}

export default Dashboard
