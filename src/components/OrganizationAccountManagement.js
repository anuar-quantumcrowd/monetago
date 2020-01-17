import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UserTable from './UserTable'
import ContentHeader from './ContentHeader'
import InnerTabs from './InnerTabs'
import CorporateIdentity from './CorporateIdentity'
import CorporateIdentity2 from './CorporateIdentity2'
import CorporateEntity from './CorporateEntity'

const OrganizationAccountManagement = () => {
  const orgData = useSelector(state => state.organization)
  const tabsItem = ['Corporate', 'User']
  const [innerTab, setInnerTab] = useState(orgData.activeOrgTab)
  let selectedOrgData

  const onClickTab = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setInnerTab(tab)
  }

  //Get data of the selected organization
  selectedOrgData = orgData.orgAndUser.find(orgz => {
    console.log(orgData.selectedOrg)
    return orgz.org.orgId === orgData.selectedOrg
  })

  // console.log(selectedOrgData)

  return (
    <div>
      <ContentHeader
        contentHeaderTitle={selectedOrgData.org.legalName}
        btnContent="Add User"
        type="cards"
        icon="add"
        // info={data.selectedOrg.info}
        orgType={selectedOrgData.org.networkRole}
      />
      <InnerTabs
        onClickTab={onClickTab}
        tabsItem={tabsItem}
        innerTab={innerTab}
      />
      {innerTab === 'User' ? (
        <UserTable type="Organization" content={selectedOrgData.userAccounts} />
      ) : innerTab === 'Corporate' ? (
        // <CorporateIdentity2 orgData={selectedOrgData.org} />
        <CorporateEntity />
      ) : null}
    </div>
  )
}

export default OrganizationAccountManagement
