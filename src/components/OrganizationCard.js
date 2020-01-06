import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orgProfile } from '../redux'
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

  return (
    <div>
      <div className="org-card-wrapper">
        {org.organization.map((item, index) => (
          <div className="org-card-item" key={index}>
            <div className="org-card-header">
              <span
                className={`org-card-status status-text ${
                  item.status === 'active' ? 'active' : 'inactive'
                }`}
              >
                {item.status}
              </span>
              <Popup
                className="action-popup"
                trigger={<Icon name="ellipsis horizontal" />}
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
              <div className="org-card-avatar">{item.avatar}</div>
              <div className="org-card-name">{item.name}</div>
              <div className="org-card-info content-subtitle">{item.info}</div>
            </div>
            <div className="org-card-type-wrapper">
              <div className="org-card-type content-subtitle">
                Type:{' '}
                <span className="org-card-type-text content-type">
                  {item.type}
                </span>
              </div>
              <div className="org-card-user-wrapper">
                <img
                  src={require('../assets/svg/account-icon.svg')}
                  alt="Account"
                />
                <span
                  className="org-card-user"
                  onClick={() =>
                    dispatch(
                      orgProfile('organizationAccountManagement', org, item)
                    )
                  }
                >
                  {item.users.length} users
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrganizationCard
