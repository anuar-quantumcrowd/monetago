import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import UserTable from '../../components/UserTable'

const Account = () => {
  return (
    <div className="dashboard-account">
      <ContentHeader
        contentHeaderTitle="Accounts"
        btnContent="Add User"
        type=""
        icon="add"
      />

      <UserTable />
    </div>
  )
}

export default Account
