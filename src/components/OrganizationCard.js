import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orgProfile, setUserOrg } from '../redux'
import { Icon, Popup } from 'semantic-ui-react'

const actions = [
  {
    icon: require('../assets/svg/settings.svg'),
    text: 'Manage Users'
  },
  {
    icon: require('../assets/svg/edit.svg'),
    text: 'Edit Identity'
  },
  {
    icon: require('../assets/svg/delete.svg'),
    text: 'Delete'
  }
]

const OrganizationCard = () => {
  const org = useSelector(state => state.organization)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserOrg())
  }, [])

  const handleClickOrgOption = event => {
    event.stopPropagation()
    console.log('Click Option')
  }

  const handleClickOrgUser = (event, orgId) => {
    event.stopPropagation()

    dispatch(orgProfile('organizationAccountManagement', 'User', orgId))
  }

  return (
    <div>
      <div className="org-card-wrapper">
        {org.organizations.map((item, index) => (
          <div
            className="org-card-item"
            key={index}
            onClick={() =>
              dispatch(
                orgProfile(
                  'organizationAccountManagement',
                  'Corporate',
                  item.orgId
                )
              )
            }
          >
            <div className="org-card-header">
              <span
                className={`org-card-status status-text ${
                  item.active ? 'active' : 'inactive'
                }`}
              >
                {item.active ? 'Active' : 'Inactive'}
              </span>
              <Popup
                className="action-popup"
                trigger={
                  <Icon
                    name="ellipsis horizontal"
                    onClick={handleClickOrgOption}
                  />
                }
                content={
                  <div className="action-menu">
                    {actions.map((action, i) => {
                      return (
                        <p key={i} className="actions">
                          <img
                            src={action.icon}
                            alt={`${action.text} Icon`}
                            className="action-icon"
                          />{' '}
                          {action.text}
                        </p>
                      )
                    })}
                  </div>
                }
                on="click"
                position="top left"
              />
            </div>
            <div className="org-card-content">
              {/* <div className="org-card-avatar">{item.avatar}</div> */}
              {/* Temporary Avatar */}
              <div className="org-card-avatar">MG</div>
              <div className="org-card-name">{item.legalName}</div>
              {/* <div className="org-card-info content-subtitle">{item.info}</div> */}
            </div>
            <div className="org-card-type-wrapper">
              <div
                className={`org-card-type content-subtitle ${
                  item.networkSubRole ? 'org-card-type-subrole' : null
                }`}
              >
                <span>Type: </span>
                <span className="content-type">{item.networkRole}</span>
              </div>
              {item.networkSubRole && (
                <div className="org-card-subrole content-subtitle">
                  <span>Subrole: </span>
                  <span className="content-type">{item.networkSubRole}</span>
                </div>
              )}
              {org.orgAndUser.map((userItem, index) =>
                item.orgId === userItem.org.orgId ? (
                  <div className="org-card-user-wrapper" key={index}>
                    <div
                      onClick={event => handleClickOrgUser(event, item.orgId)}
                    >
                      <img
                        src={require('../assets/svg/account-icon.svg')}
                        alt="Account"
                      />
                      <span className="org-card-user">
                        {userItem.userAccounts.length} users
                      </span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrganizationCard
