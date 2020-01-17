import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orgProfile } from '../../redux'
import ContentHeader from '../../components/ContentHeader'
import UserTable from '../../components/UserTable'
import OrganizationAccountManagement from '../../components/OrganizationAccountManagement'

const Account = () => {
  const data = useSelector(state => state.organization)
  const dataOrg = useSelector(state => state.organization.organizations)
  const orgId = useSelector(state => state.log.orgId)
  const dispatch = useDispatch()

  const orgContentData = dataOrg
  const found = orgContentData.find(contentData => contentData.orgId === orgId)
  useEffect(() => {
    if (
      orgId === '111' ||
      orgId === '112' ||
      orgId === '113' ||
      orgId === '114'
    ) {
      dispatch(orgProfile('organizationAccountManagement', data, found))
    }
  }, [])
  return (
    <div className="dashboard-account">
      <ContentHeader
        contentHeaderTitle="Accounts"
        btnContent="Add User"
        type="OrgAndAcct"
        icon="add"
      />

      {orgId === '111' ||
      orgId === '112' ||
      orgId === '113' ||
      orgId === '114' ? (
        <UserTable type="Organization" content={data.selectedOrg} />
      ) : (
        <UserTable type="Account" content={data.userAccounts} />
      )}
    </div>
  )
}

export default Account
