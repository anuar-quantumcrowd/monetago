/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortBy, userCheckbox } from '../redux'

import { updateUserRole } from '../redux/user/userActions'
import { fetchApi } from '../redux/organization/organizationActions'
import { Table, Button, Popup, Modal } from 'semantic-ui-react'
import Checkbox from '../common/CommonCheckbox'
import CommonInput from '../common/CommonInput'
import CommonFilterDropdown from '../common/CommonFilterDropdown'
import MainModal from './MainModal'
import EditUserOnAccount from './EditUserOnAccount'
import CommonButtons from '../common/CommonButton'
import CommonDropdown from '../common/CommonDropdown'

const filterOptions = [
  {
    name: 'role',
    placeholder: 'Role: All',
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
    name: 'organization',
    placeholder: 'Organization: All',
    options: [
      {
        key: 'all',
        value: 'all',
        text: 'All'
      },
      {
        key: 'organization1',
        value: 'organization1',
        text: 'Organization 1'
      },
      {
        key: 'organization2',
        value: 'organization2',
        text: 'Organization 2'
      },
      {
        key: 'organization3',
        value: 'organization3',
        text: 'Organization 3'
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

const headers = [
  {
    key: 'checkbox'
  },
  {
    key: 'userId',
    content: 'User ID'
  },
  {
    key: 'firstName',
    content: 'Name'
  },
  {
    key: 'email',
    content: 'Email'
  },
  {
    key: 'phoneNumber',
    content: 'Phone Number'
  },
  {
    key: 'organization',
    content: 'Organization'
  },
  {
    key: 'role',
    content: 'Role'
  },
  {
    key: '',
    content: ''
  },
  {
    key: '',
    content: ''
  }
]

const actions = [
  {
    icon: require('../assets/svg/settings.svg'),
    text: 'Set Role',
    component: 'null',
    modalOpen: false
  },
  {
    icon: require('../assets/svg/edit.svg'),
    text: 'Edit User',
    component: EditUserOnAccount,
    modalOpen: false
  },
  {
    icon: require('../assets/svg/delete.svg'),
    text: 'Delete',
    component: 'null',
    modalOpen: false
  }
]

const roles = [
  {
    key: 1,
    text: 'Issuer - Senior Treasury Operations',
    value: 'Issuer - Senior Treasury Operations'
  },
  {
    key: 2,
    text: 'Investor - Senior Operations',
    value: 'Investor - Senior Operations'
  },
  {
    key: 3,
    text: 'IPA - Senior Operations',
    value: 'IPA - Senior Operations'
  },
  {
    key: 4,
    text: 'MGADMIN',
    value: 'MGADMIN'
  }
]

const UserTable = ({ type, content }) => {
  const table = useSelector(state => state.organization)
  const dispatch = useDispatch()

  const [popupState, setPopupState] = useState([])

  const [openSetRoleModal, setopenSetRoleModal] = useState(false)
  const [roleValue, setroleValue] = useState({
    roles: []
  })
  const [userIdSetRole, setuserIdSetRole] = useState('')

  const [openDeleteModal, setopenDeleteModal] = useState(false)

  const [modal, setModal] = useState(false)
  const [component, setComponent] = useState({ component: '' })

  const [selectedUser, setSelectedUser] = useState({})

  const closeSetRoleModal = () => {
    setopenSetRoleModal(false)
  }

  const closeDeleteModal = () => {
    setopenDeleteModal(false)
  }

  const handlePopupOpen = index => {
    for (let x = 1; x <= index; x++) {
      popupState.splice(index, 1, false)
    }
    popupState.splice(index, 1, true)
    setPopupState([...popupState])
  }

  const handlePopupClose = (index, comp = 'null', data, text = null) => {
    setSelectedUser(data)
    popupState.splice(index, 1, false)
    setPopupState([...popupState])
    if (comp !== 'null') {
      setModal(true)
      setComponent({
        component: comp,
        id: data.id,
        status: data.active,
        uId: data.uid,
        password: data.password,
        fName: data.firstName,
        lName: data.lastName,
        email: data.email,
        pNum: data.phone,
        orgName: data.organization[0].legalName,
        group: data.group,
        department: data.department,
        role: data.role
      })
    } else if (text === 'Set Role') {
      setModal(false)
      setopenSetRoleModal(true)
      setuserIdSetRole(data.id)
    } else if (text === 'Delete') {
      setModal(false)
      setopenDeleteModal(true)
    }
  }

  const handleModalClose = () => {
    setModal(false)
  }

  const setRoleValue = e => {
    setroleValue({ roles: [e.target.innerText] })
  }

  const updateSetRole = () => {
    updateUserRole(userIdSetRole, roleValue)
    dispatch(fetchApi())
    setopenSetRoleModal(false)
  }

  return (
    <div className="admin-table-wrapper">
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
            1-50 of 2,000
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="next-icon"
              alt="Next Icon"
            />
          </p>
        </div>
      </div>
      <div className="table-wrapper">
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              {headers.map((header, i) => {
                return header.key === 'checkbox' ? (
                  <Table.HeaderCell key={i}>
                    {' '}
                    <Checkbox
                      checked={table.selectAll}
                      onChange={() =>
                        dispatch(userCheckbox(type, 'All', content.name))
                      }
                    />
                  </Table.HeaderCell>
                ) : (
                  <Table.HeaderCell key={i}>
                    {header.content}{' '}
                    {typeof header.content === 'string' && header.content ? (
                      <img
                        src={require('../assets/svg/sort-arrows.svg')}
                        className="sort-arrow"
                        alt="Sort Arrows Icon"
                      />
                    ) : null}
                  </Table.HeaderCell>
                )
              })}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {content
              ? content.map((data, i) => {
                  return (
                    <Table.Row
                      key={i}
                      className={data.selected ? 'checked' : null}
                    >
                      <Table.Cell>
                        <Checkbox
                          checked={data.selected}
                          onChange={() => dispatch(userCheckbox(type, data.id))}
                        />
                      </Table.Cell>
                      <Table.Cell className="user-id">{data.uid}</Table.Cell>
                      <Table.Cell>{`${data.firstName} ${data.lastName}`}</Table.Cell>
                      <Table.Cell>{data.email}</Table.Cell>
                      <Table.Cell>{data.phone}</Table.Cell>
                      <Table.Cell>{data.organization[0].legalName}</Table.Cell>
                      <Table.Cell>{data.roles}</Table.Cell>
                      <Table.Cell className="activity">
                        <span className={data.active ? 'active' : 'inactive'}>
                          {data.active ? 'Active' : 'Inactive'}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <Popup
                          className="action-popup"
                          trigger={
                            <Button className="btn btn-menu">
                              <img
                                src={require('../assets/svg/vertical-menu.svg')}
                                className="vertical-menu"
                                alt="Vertical Menu Icon"
                              />
                            </Button>
                          }
                          open={popupState[i]}
                          onOpen={() => handlePopupOpen(i)}
                          onClose={() => handlePopupClose(i)}
                          content={
                            <div className="action-menu">
                              {actions.map((action, ii) => {
                                return (
                                  <p
                                    key={ii}
                                    className="actions"
                                    onClick={() =>
                                      handlePopupClose(
                                        i,
                                        action.component,
                                        data,
                                        action.text
                                      )
                                    }
                                  >
                                    <img
                                      src={action.icon}
                                      alt={`${action.text} Icon`}
                                      className="action-icon"
                                    />
                                    {action.text}
                                  </p>
                                )
                              })}
                            </div>
                          }
                          on="click"
                          position="top right"
                        />
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              : null}
          </Table.Body>
        </Table>
      </div>
      <MainModal trigger={''} open={modal} onClose={handleModalClose}>
        {
          <component.component
            id={component.id}
            tableType={type}
            modal={() => setModal()}
          />
        }
      </MainModal>

      <Modal
        className="modal-popup"
        style={{ backgroundColor: '#000' }}
        open={openSetRoleModal}
        onClose={closeSetRoleModal}
        centered
        size="small"
      >
        <Modal.Content className="set-role-content">
          <p className="modal-form-title">Set Role</p>
          <CommonDropdown
            placeholder="Select a Role"
            name={roles}
            options={roles}
            dropdownClass="dropdown-select-role"
            onChange={setRoleValue}
          />
          <div className="btn-container">
            <CommonButtons
              content="CANCEL"
              btnClass="btn-cancel btn-gray"
              onClick={closeSetRoleModal}
            />
            <CommonButtons
              content="UPDATE"
              btnClass="btn-save btn-blue"
              onClick={updateSetRole}
            />
          </div>
        </Modal.Content>
      </Modal>

      <Modal
        open={openDeleteModal}
        onClose={closeDeleteModal}
        className="modal-popup"
        style={{ backgroundColor: '#000' }}
        centered
        size="small"
      >
        <Modal.Content className="delete-content">
          <p className="modal-form-title">
            Are you sure you want to delete this user?
          </p>
          <div className="btn-actions">
            <CommonButtons
              content="CANCEL"
              btnClass="btn-cancel btn-white"
              onClick={closeDeleteModal}
            />
            <CommonButtons content="DELETE" btnClass="btn-deact btn-blue" />
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default UserTable
