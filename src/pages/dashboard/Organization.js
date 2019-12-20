import React from 'react'
import { useSelector } from 'react-redux'
import OrganizationCardList from '../../components/OrganizationCardList'
import OrganizationAccountManagement from '../../components/OrganizationAccountManagement'

const Organization = () => {
  const step = useSelector(state => state.organization.activeStep)

  const organizationComponents = {
    organizationCardList: OrganizationCardList,
    organizationAccountManagement: OrganizationAccountManagement
  }

  const ActiveComponent = organizationComponents[step]

  return (
    <div className="dashboard-org">
      <ActiveComponent activeStep={step} />
    </div>
  )
}

export default Organization
