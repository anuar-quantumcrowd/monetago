/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState, useEffect } from 'react'
import { Image, Popup, Icon, Modal } from 'semantic-ui-react'
import CommonInput from '../common/CommonInput'
import CommonButtons from '../common/CommonButton'
import CommonDropdown from '../common/CommonDropdown'

const roles = [
  {
    key: 1,
    text: 'Sample1',
    value: 'Sample1'
  },
  {
    key: 2,
    text: 'Sample2',
    value: 'Sample2'
  },
  {
    key: 3,
    text: 'Sample3',
    value: 'Sample3'
  },
  {
    key: 4,
    text: 'Sample4',
    value: 'Sample4'
  },
  {
    key: 5,
    text: 'Sample5',
    value: 'Sample5'
  }
]

const EditUserOnAccount = props => {
  const [userData, setUserData] = useState(props)
  const [openPopup, setopenPopup] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const [openSetRoleModal, setopenSetRoleModal] = useState(false)
  const [openDeactivateModal, setopenDeactivateModal] = useState(false)

  const handleOpen = () => {
    setopenPopup(!openPopup)
  }

  const handleClose = bool => {
    setopenPopup(!openPopup)
    if (bool) setopenSetRoleModal(!openSetRoleModal)
  }

  const handleCloseModal = () => {
    setopenSetRoleModal(!openSetRoleModal)
  }

  const openDeactivate = () => {
    setopenPopup(!openPopup)
    setopenDeactivateModal(!openDeactivateModal)
  }

  const handleCloseDeactivateModal = () => {
    setopenDeactivateModal(!openDeactivateModal)
  }

  const showResetter = e => {
    setShowReset(true)
    if (e.target.value === '') {
      setShowReset(false)
    }
  }

  useEffect(() => {
    if (userData.password !== '') {
      setShowReset(true)
    }
  }, [])

  const resetPassword = () => {
    console.log('Reset password')
  }

  return (
    <div className="edit-container">
      <div className="edit-header">
        <div className="edit-summary">
          <div>
            <Image
              src={require('../assets/images/monetaGo-logo.png')}
              avatar
              className="avatar-icon"
            />
            <p className="status">{userData.status ? 'Active' : 'Inactive'}</p>
          </div>
          <div className="edit-name-display">
            <h3>{`${userData.firstName} ${userData.lastName}`}</h3>
            <p className="role">{userData.role}</p>
          </div>
        </div>

        <div className="edit-dropdown">
          <Modal
            className="modal-popup"
            style={{ backgroundColor: '#000' }}
            open={openSetRoleModal}
            onClose={handleCloseModal}
            centered
            size="tiny"
          >
            <Modal.Content className="set-role-content">
              <p className="modal-form-title">Set Role</p>
              <CommonDropdown
                placeholder="Select a Role"
                name={roles}
                options={roles}
                dropdownClass="dropdown-select-role"
              />
              <div className="btn-container">
                <CommonButtons
                  content="CANCEL"
                  btnClass="btn-cancel btn-gray"
                  onClick={handleCloseModal}
                />
                <CommonButtons
                  content="SAVE CHANGES"
                  btnClass="btn-save btn-blue"
                  onClick={handleCloseModal}
                />
              </div>
            </Modal.Content>
          </Modal>

          <Modal
            open={openDeactivateModal}
            onClose={handleCloseDeactivateModal}
            className="modal-popup"
            style={{ backgroundColor: '#000' }}
            centered
            size="tiny"
          >
            <Modal.Content className="delete-content">
              <p className="modal-form-title">
                Are you sure you want to deactivate this user?
              </p>
              <div className="btn-actions">
                <CommonButtons
                  content="CANCEL"
                  btnClass="btn-cancel btn-white"
                  onClick={handleCloseDeactivateModal}
                />
                <CommonButtons
                  content="DEACTIVATE"
                  btnClass="btn-deact btn-blue"
                  onClick={handleCloseDeactivateModal}
                />
              </div>
            </Modal.Content>
          </Modal>
          <Popup
            className="action-popup"
            trigger={<Icon link name="ellipsis vertical" />}
            open={openPopup}
            onClose={() => handleClose(false)}
            onOpen={handleOpen}
            content={
              <div className="action-menu">
                <p className="actions" onClick={() => handleClose(true)}>
                  <img
                    src={require('../assets/svg/settings.svg')}
                    alt="Set Role"
                    className="action-menu-icon"
                  />
                  Set Role
                </p>

                <p className="actions" onClick={openDeactivate}>
                  <img
                    src={require('../assets/svg/edit.svg')}
                    alt="Deactivate"
                    className="action-menu-icon"
                  />
                  Deactivate
                </p>
                <p className="actions">
                  <img
                    src={require('../assets/svg/delete.svg')}
                    alt="Delete"
                    className="action-menu-icon"
                  />
                  Delete
                </p>
              </div>
            }
            on="click"
            position="top right"
          />
        </div>
      </div>

      <div className="edit-user-container">
        <div className="edit-user-title">Account Details</div>
        <div className="fullname-container">
          <CommonInput
            icon="pencil"
            iconPosition="right"
            inputStyle="halfwidth-inputs"
            type="text"
            value={userData.firstName}
          />
          <CommonInput
            icon="pencil"
            iconPosition="right"
            inputStyle="halfwidth-inputs"
            type="text"
            value={userData.lastName}
          />
        </div>
        <CommonInput
          icon="user"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="text"
          value={userData.userId}
        />
        <div className="edit-password">
          <CommonInput
            icon="lock"
            iconPosition="left"
            inputStyle="fullwidth-inputs"
            type="password"
            value={userData.password}
            onChange={showResetter}
          />
          {showReset ? (
            <div className="reset">
              <p onClick={resetPassword}>RESET PASSWORD</p>
            </div>
          ) : null}
        </div>
        <CommonInput
          icon="mail"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="email"
          value={userData.email}
        />
        <CommonInput
          icon="mobile alternate"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="text"
          value={userData.phoneNumber}
        />
        <CommonInput
          icon="pencil"
          iconPosition="right"
          inputStyle="fullwidth-inputs"
          type="text"
          value={userData.organization}
        />
        <CommonInput
          icon="pencil"
          iconPosition="right"
          inputStyle="fullwidth-inputs"
          type="text"
          value={userData.group}
        />
        <CommonInput
          icon="pencil"
          iconPosition="right"
          inputStyle="fullwidth-inputs"
          type="text"
          value={userData.department}
        />

        <div className="actions">
          <CommonButtons content="CANCEL" btnClass="cancel-btn btn-gray" />
          <CommonButtons
            content="SAVE CHANGES"
            btnClass="create-btn btn-blue"
          />
        </div>
      </div>
    </div>
  )
}

export default EditUserOnAccount
