import React, { useState } from 'react'

import Sidebar from '../../../usersComponents/Sidebar'
import DashboardCards from '../../../usersComponents/DashboardCards'

const index = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const onClickSidebar = e => {
    const navItem = e.currentTarget.firstChild.getAttribute('id')
    setActiveComponent(navItem)
  }

  let ActiveTabComponent = DashboardCards

  return (
    <div className="dashboard">
      <Sidebar
        activeComponent={activeComponent}
        onClickSidebar={onClickSidebar}
      />
      <div className="dashboard-content">{<ActiveTabComponent />}</div>
    </div>
  )
}

export default index
