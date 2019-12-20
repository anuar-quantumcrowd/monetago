import React, { useState } from 'react'
import AdminTable from './AdminTable'
import ContentHeader from './ContentHeader'
import InnerTabs from './InnerTabs'
import CorporateIdentity from './CorporateIdentity'

const OrganizationAccountManagement = () => {
  const tabsItem = ['User', 'Identity']
  const [innerTab, setInnerTab] = useState('User')

  const onClickTab = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setInnerTab(tab)
  }

  return (
    <div>
      <ContentHeader
        contentHeaderTitle="AMCE Bldg Supply LTD"
        btnContent="Add User"
        type="cards"
        icon="add"
      />
      <InnerTabs
        onClickTab={onClickTab}
        tabsItem={tabsItem}
        innerTab={innerTab}
      />
      {innerTab === 'User' ? (
        <AdminTable />
      ) : innerTab === 'Identity' ? (
        <CorporateIdentity />
      ) : null}
    </div>
  )
}

export default OrganizationAccountManagement
