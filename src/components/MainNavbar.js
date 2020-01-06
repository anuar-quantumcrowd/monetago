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
import { Icon, Popup } from 'semantic-ui-react'

const MainNavbar = () => {
  return (
    <div>
      <div className="main-navbar">
        <div>
          <img src={require('../assets/svg/main-navbar-logo.svg')} alt="Logo" />
        </div>
        <Popup
          trigger={
            <div className="navbar-user-wrapper">
              <div className="navbar-user-avatar">AN</div>
              <div className="navbar-user-name">Admin Name</div>
              <Icon name="dropdown" />
            </div>
          }
          on="click"
          pinned
          basic
          position="bottom left"
          content={
            <div className="menu-wrapper">
              <div
                className="menu-item"
                onClick={() => {
                  window.location.href = '/#/'
                }}
              >
                Logout
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default MainNavbar
