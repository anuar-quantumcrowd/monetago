import React from 'react'
import ContentHeader from './ContentHeader'
import OrganizationCard from './OrganizationCard'

const OrganizationCardList = () => {
  return (
    <div>
      <ContentHeader
        contentHeaderTitle="Organizations"
        btnContent="Add Organization"
        type=""
        icon="add"
      />

      <OrganizationCard />
    </div>
  )
}

export default OrganizationCardList
