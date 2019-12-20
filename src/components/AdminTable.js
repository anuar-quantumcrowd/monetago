/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortBy, userCheckbox } from '../redux'

import { Table, Button, Popup } from 'semantic-ui-react'
import Checkbox from '../common/CommonCheckbox'
import Dropdown from '../common/CommonDropdown'
import CommonInput from '../common/CommonInput'
import CommonFilterDropdown from '../common/CommonFilterDropdown'

const actions = [
  {
    icon: require('../assets/svg/settings.svg'),
    text: 'Set Role'
  },
  {
    icon: require('../assets/svg/edit.svg'),
    text: 'Edit Role'
  },
  {
    icon: require('../assets/svg/delete.svg'),
    text: 'Delete'
  }
]

const AdminTable = () => {
  const table = useSelector(state => state.adminTable)
  const dispatch = useDispatch()

  return (
    <div className="admin-table-wrapper">
      <CommonInput
        inputStyle="search-input"
        icon="search"
        iconPosition="left"
        placeholder="Search Account Name, Email or Phone Number..."
      />
      <div className="table-details">
        <CommonFilterDropdown options={table.filterOptions} />
        <div className="table-page">
          <p>
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="prev-icon"
              alt="Previous Icon"
            />{' '}
            1-5 of 2,000{' '}
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="next-icon"
              alt="Next Icon"
            />
          </p>
        </div>
      </div>

      <Table unstackable>
        <Table.Header>
          <Table.Row>
            {table.headers.map((header, i) => {
              return header.key === 'checkbox' ? (
                <Table.HeaderCell key={i}>
                  {' '}
                  <Checkbox
                    checked={table.selectAll}
                    onChange={() => dispatch(userCheckbox('All'))}
                  />
                </Table.HeaderCell>
              ) : (
                <Table.HeaderCell
                  key={i}
                  onClick={() => dispatch(sortBy(header.key))}
                >
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
          {table.data.map((data, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  <Checkbox
                    checked={data.selected}
                    onChange={() => dispatch(userCheckbox(data.userId))}
                  />
                </Table.Cell>
                <Table.Cell className="user-id">{data.userId}</Table.Cell>
                <Table.Cell>{`${data.firstName} ${data.lastName}`}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.phoneNumber}</Table.Cell>
                <Table.Cell>{data.group}</Table.Cell>
                <Table.Cell>{data.role}</Table.Cell>
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
                    content={
                      <div className="action-menu">
                        {actions.map((action, i) => {
                          return (
                            <p key={i} className="actions">
                              <img
                                src={action.icon}
                                alt={`${action.text} Icon`}
                              />{' '}
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
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default AdminTable
