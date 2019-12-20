import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UserTable from './UserTable'
import ContentHeader from './ContentHeader'
import InnerTabs from './InnerTabs'
import CorporateIdentity from './CorporateIdentity'

const OrganizationAccountManagement = () => {
  const data = useSelector(state => state.organization)
  const tabsItem = ['User', 'Identity']
  const [innerTab, setInnerTab] = useState('User')

  const onClickTab = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setInnerTab(tab)
  }

  return (
    <div>
      <ContentHeader
        contentHeaderTitle={data.selectedOrg.name}
        btnContent="Add user"
        type="cards"
        icon="add"
      />
      <InnerTabs
        onClickTab={onClickTab}
        tabsItem={tabsItem}
        innerTab={innerTab}
      />
      {innerTab === 'User' ? (
        <UserTable content={data.selectedOrg} />
      ) : innerTab === 'Identity' ? (
        <CorporateIdentity />
      ) : null}
    </div>
  )
}

export default OrganizationAccountManagement
