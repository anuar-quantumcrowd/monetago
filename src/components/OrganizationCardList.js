import React from 'react'
import ContentHeader from './ContentHeader'
import CommonInput from '../common/CommonInput'
import CommonFilterDropdown from '../common/CommonFilterDropdown'
import OrganizationCard from './OrganizationCard'

const OrganizationCardList = () => {
  const filterOptions = [
    {
      name: 'accountType',
      placeholder: 'Account Type: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'admin',
          value: 'admin',
          text: 'Admin'
        },
        {
          key: 'User',
          value: 'User',
          text: 'User'
        }
      ]
    },
    {
      name: 'status',
      placeholder: 'Status: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'active',
          value: 'active',
          text: 'Active'
        },
        {
          key: 'inactive',
          value: 'inactive',
          text: 'Inactive'
        }
      ]
    }
  ]

  return (
    <div className="org-card-list">
      <ContentHeader
        contentHeaderTitle="Organizations"
        btnContent="Add Organization"
        type="OrgAndAcct"
        icon="add"
      />

      <CommonInput
        inputStyle="search-input"
        icon="search"
        iconPosition="left"
        placeholder="Search Account Name, Email or Phone Number..."
      />

      <div className="table-filter-details">
        <CommonFilterDropdown options={filterOptions} />
        <div className="table-filter-page">
          <p>
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="prev-icon"
              alt="Previous Icon"
            />
            1-5 of 2,000
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="next-icon"
              alt="Next Icon"
            />
          </p>
        </div>
      </div>

      <OrganizationCard />
    </div>
  )
}

export default OrganizationCardList
