/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment } from 'react'
import ReactPhoneInput from 'react-phone-input-2'
import { Modal } from 'semantic-ui-react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

import CommonButtons from '../common/CommonButton'
import CommonInput from '../common/CommonInput'
import 'react-phone-input-2/lib/style.css'
import InnerTabs from './InnerTabs'

const CorporateModal = ({
  btnTitle,
  children,
  icon = '',
  info,
  btnClass,
  img = '',
  onChangeCountry,
  onChangeCountryPhone,
  dataNumber,
  tabsItem,
  onClickTab,
  innerTab,
  trigger = (
    <CommonButtons
      content={btnTitle}
      image={img}
      icon={icon}
      btnClass={btnClass}
    />
  ),
  open = false,
  onClose,
  onOpen
}) => {
  return (
    <Modal
      open={open}
      trigger={trigger}
      onClose={onClose}
      onOpen={onOpen}
      size="large"
    >
      <div className="modal-legal-info-wrapper">
        <InnerTabs
          onClickTab={onClickTab}
          tabsItem={tabsItem}
          innerTab={innerTab}
        />
        {info === 'legalInfo' ? (
          <Fragment>
            <div className="legal-modal-block-one">
              <CommonInput title="Unit Name" />
              <CommonInput title="Corporate Identifier" />
              <CommonInput title="Email Address" />
            </div>

            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
              <CommonInput title="Domain name" inputStyle="input-domain" />
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'addParentContact' ? (
          <Fragment>
            <div className="legal-modal-block-one">
              <CommonInput title="First Name" />
              <CommonInput title="Last Name" />
              <CommonInput title="Designation" />
            </div>
            <div className="legal-modal-block-one">
              <CommonInput title="Email Address" />
              <CommonInput title="Domain Name" />
            </div>
            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'editParentContact' ? (
          <Fragment>
            <div className="legal-modal-block-one">
              <CommonInput title="First Name" />
              <CommonInput title="Last Name" />
              <CommonInput title="Designation" />
            </div>
            <div className="legal-modal-block-one">
              <CommonInput title="Email Address" />
              <CommonInput title="Domain Name" />
            </div>
            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'viewParentContact' ? (
          <Fragment>
            <div className="legal-modal-block-one">
              <CommonInput title="First Name" />
              <CommonInput title="Last Name" />
              <CommonInput title="Designation" />
            </div>
            <div className="legal-modal-block-one">
              <CommonInput title="Email Address" />
              <CommonInput title="Domain Name" />
            </div>
            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : null}
      </div>
    </Modal>
  )
}

export default CorporateModal
