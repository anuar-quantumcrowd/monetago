import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import AdminTable from '../../components/AdminTable'

const Account = () => {
  return (
    <div className="dashboard-account">
      <ContentHeader
        contentHeaderTitle="Accounts"
        btnContent="Add User"
        type=""
        icon="add"
      />

      <AdminTable />
    </div>
  )
}

export default Account
