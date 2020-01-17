import React, { Fragment } from 'react'
import CommonTextArea2 from '../common/CommonTextArea2'

const CorporateData2 = ({ orgData }) => {
  const address = []

  const leAddress = orgData.leInfo.legalEntityBase.registeredAddress
  for (var key in leAddress) {
    if (leAddress.hasOwnProperty(key)) {
      address.push(leAddress[key] + ' ')
    }
  }

  const contactAddress = []
  const conAddress = orgData.leInfo.legalEntityBase.contactPerson.officeAddress

  for (var key in leAddress) {
    if (conAddress.hasOwnProperty(key)) {
      contactAddress.push(conAddress[key] + ' ')
    }
  }

  const placeSupply = []

  const orgPlaceSupply = orgData.leInfo.placeOfSupply

  for (var key in orgPlaceSupply) {
    if (orgPlaceSupply.hasOwnProperty(key)) {
      placeSupply.push(orgPlaceSupply[key] + ' ')
    }
  }

  const bUnitAddress = []
  const bUnitContactAddress = []
  if (orgData.orgId === '111') {
    const buAddress = orgData.leInfo.businessUnits.buAddress

    for (var key in buAddress) {
      if (buAddress.hasOwnProperty(key)) {
        bUnitAddress.push(buAddress[key] + ' ')
      }
    }

    const buContactAddress =
      orgData.leInfo.businessUnits.buContactPersons.officeAddress

    for (var key in buContactAddress) {
      if (buContactAddress.hasOwnProperty(key)) {
        bUnitContactAddress.push(buContactAddress[key] + ' ')
      }
    }
  }

  return (
    <div className="corporate-identity-info">
      {orgData.type === 'Issuer' ? (
        <div className="org-details-holder">
          <div className="edit-holder">
            <p className="edit-title org-identity-detail">Business Unit</p>
            <div className="edit-btn tbl-data-text">
              <img src={require('../assets/images/edit-pen.png')} alt="pen" />
              Edit
            </div>
          </div>
          <p className="org-identity-title">Unit Name: </p>
          <p className="org-identity-detail">
            {orgData.leInfo.businessUnits.unitName}
          </p>
          <p className="org-identity-title">Business Unit Address: </p>
          <p className="org-identity-detail">
            {bUnitAddress.map((item, i) => {
              return <Fragment key={i}>{item}</Fragment>
            })}
          </p>
          <p className="org-identity-title">Business Unit Email: </p>
          <p className="org-identity-detail">
            {orgData.leInfo.businessUnits.buEmail}
          </p>
          <p className="org-identity-title">GSTIN: </p>
          <p className="org-identity-detail">
            {
              orgData.leInfo.businessUnits.buIdentifiers.additionalProperties
                .gstin
            }
          </p>

          <div className="contact-person">
            <div className="edit-holder">
              <p className="edit-title org-identity-detail">
                Business Unit Contact Person
              </p>
              <div className="edit-btn tbl-data-text">
                <img src={require('../assets/images/edit-pen.png')} alt="pen" />
                Edit
              </div>
            </div>
            <p className="org-identity-detail">
              {` ${orgData.leInfo.businessUnits.buContactPersons.firstName}
                  ` +
                ' ' +
                ` ${orgData.leInfo.businessUnits.buContactPersons.lastName}`}
            </p>
            <p className="org-identity-detail">
              {orgData.leInfo.businessUnits.buContactPersons.designation}
            </p>
            <div className="contact-person-address org-contact-holder">
              <p className="org-identity-title">Address</p>
              <p className="org-identity-detail">
                {bUnitContactAddress.map((item, i) => {
                  return <Fragment key={i}>{item}</Fragment>
                })}
              </p>
            </div>
            <div className="contact-person-tel org-contact-holder">
              <p className="org-identity-title">Tel:</p>
              <p className="org-identity-detail">
                {orgData.leInfo.businessUnits.buContactPersons.tel1}
              </p>
              <p className="org-identity-detail">
                {orgData.leInfo.businessUnits.buContactPersons.tel2}
              </p>
              <p className="org-identity-title">email:</p>
              <p className="org-identity-detail">
                {orgData.leInfo.businessUnits.buContactPersons.email}
              </p>
            </div>
          </div>
          <p className="org-identity-title">Industry: </p>
          <p className="org-identity-detail">{orgData.leInfo.industry}</p>
          <p className="org-identity-title">Listing Exchanges: </p>
          <p className="org-identity-detail">
            {orgData.leInfo.listingExchanges.map((item, i) => {
              return <Fragment key={i}>{`${item}` + ', '}</Fragment>
            })}
          </p>
          <p className="org-identity-title">Place of Supply: </p>
          <p className="org-identity-detail">
            {placeSupply.map((item, i) => {
              return <Fragment key={i}>{item}</Fragment>
            })}
          </p>
        </div>
      ) : orgData.type === 'Investor' ? (
        <Fragment>
          <div className="org-details-holder">
            <div className="edit-holder">
              <p className="org-identity-title edit-title">Scheme</p>
              <div className="edit-btn tbl-data-text">
                <img src={require('../assets/images/edit-pen.png')} alt="pen" />
                Edit
              </div>
            </div>
            <p className="org-identity-title">Scheme Name: </p>
            <p className="org-identity-detail">
              {orgData.leInfo.scheme.schemeName}
            </p>
          </div>
          <div className="org-details-holder">
            <div className="edit-holder">
              <p className="org-identity-title edit-title">
                Depository Account
              </p>
              <div className="edit-btn tbl-data-text">
                <img src={require('../assets/images/edit-pen.png')} alt="pen" />
                Edit
              </div>
            </div>
            <p className="org-identity-title">Deposit Name:</p>
            <p className="org-identity-detail">
              {orgData.leInfo.scheme.dpAccount.dpName}
            </p>
            <p className="org-identity-title">Client Name:</p>
            <p className="org-identity-detail">
              {orgData.leInfo.scheme.dpAccount.clientName}
            </p>
            <p className="org-identity-title">Reference ID:</p>
            <p className="org-identity-detail">
              {orgData.leInfo.scheme.dpAccount.referenceId}
            </p>
          </div>
        </Fragment>
      ) : orgData.type === 'IPA' ? (
        <Fragment>
          <div className="org-details-holder">
            <div className="edit-holder">
              <p className="org-identity-title edit-title">
                Depository Account
              </p>
              <div className="edit-btn tbl-data-text">
                <img src={require('../assets/images/edit-pen.png')} alt="pen" />
                Edit
              </div>
            </div>
            <p className="org-identity-title">Deposit Name:</p>
            <p className="org-identity-detail">
              {orgData.leInfo.depositoryAccounts.dpName}
            </p>
            <p className="org-identity-title">Client Name:</p>
            <p className="org-identity-detail">
              {orgData.leInfo.depositoryAccounts.clientName}
            </p>
            <p className="org-identity-title">Reference ID:</p>
            <p className="org-identity-detail">
              {orgData.leInfo.depositoryAccounts.referenceId}
            </p>
          </div>
        </Fragment>
      ) : null}

      <div className="org-details">
        <div className="org-details-name-holder org-details-holder  ">
          <div className="edit-holder"></div>
          <div className="org-identity-name-holder">
            <p className="org-identity-title">Unit Name</p>
            <p className="org-identity-detail">
              {orgData.leInfo.legalEntityBase.legalName}
            </p>
          </div>
          <div className="org-identity-name-holder">
            <p className="org-identity-title">Unit ID</p>
            <p className="org-identity-detail">
              {orgData.leInfo.legalEntityBase.accountId}
            </p>
          </div>
        </div>
        <div className="org-details-corp-identifier  org-details-holder   ">
          <div className="edit-holder">
            <p className="org-identity-title edit-title">
              Corporation Identifer
            </p>
            <div className="edit-btn tbl-data-text">
              <img src={require('../assets/images/edit-pen.png')} alt="pen" />
              Edit
            </div>
          </div>
          <p className="org-identity-detail">
            {
              orgData.leInfo.legalEntityBase.corpIdentifiers
                .additionalProperties
            }
          </p>
        </div>
        <div className="org-details-address org-details-holder   ">
          <div className="edit-holder">
            <p className="org-identity-title edit-title">Address</p>
            <div className="edit-btn tbl-data-text">
              <img src={require('../assets/images/edit-pen.png')} alt="pen" />
              Edit
            </div>
          </div>
          <div className="org-address org-contact-holder">
            <p className="org-identity-detail">
              {address.map((item, i) => {
                return <Fragment key={i}>{item}</Fragment>
              })}
            </p>
          </div>
          <div className="org-address-edit">
            <CommonTextArea2
              label="Floor"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.floor
              }
            />
            <CommonTextArea2
              label="Building Number or Name"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress
                  .buildingNumOrName
              }
            />
            <CommonTextArea2
              label="Street"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.street
              }
            />
            <CommonTextArea2
              label="Area"
              row="2"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.area
              }
            />
            <CommonTextArea2
              label="City"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.city
              }
            />
            <CommonTextArea2
              label="State"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.state
              }
            />
            <CommonTextArea2
              label="Postal Code"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.postalCode
              }
            />
            <CommonTextArea2
              label="Country"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.registeredAddress.country
              }
            />
          </div>
        </div>
        <div className="org-details-contact  org-details-holder  ">
          <div className="edit-holder">
            <p className="org-identity-title edit-title">Contact Details</p>
            <div className="edit-btn tbl-data-text">
              <img src={require('../assets/images/edit-pen.png')} alt="pen" />
              Edit
            </div>
          </div>
          <div className="org-contact">
            <div className="org-contact-holder">
              <p className="org-identity-title">Tel 1</p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.tel1}
              </p>
            </div>
            <div className="org-contact-holder">
              <p className="org-identity-title">Tel 2</p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.tel2}
              </p>
            </div>
            <div className="org-contact-holder">
              <p className="org-identity-title">Fax</p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.fax}
              </p>
            </div>
            <div className="org-contact-holder">
              <p className="org-identity-title">Primary Email</p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.primaryEmail}
              </p>
            </div>
            <div className="org-contact-holder">
              <p className="org-identity-title">Domain</p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.domain}
              </p>
            </div>
          </div>
          <div className="org-contact-edit">
            <CommonTextArea2
              label="Tel1"
              row="1"
              corporateIdentityDetails={orgData.leInfo.legalEntityBase.tel1}
            />
            <CommonTextArea2
              label="Tel2"
              row="1"
              corporateIdentityDetails={orgData.leInfo.legalEntityBase.tel2}
            />
            <CommonTextArea2
              label="Fax"
              row="1"
              corporateIdentityDetails={orgData.leInfo.legalEntityBase.fax}
            />
            <CommonTextArea2
              label="Email"
              row="1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.primaryEmail
              }
            />
            <CommonTextArea2
              label="Domain"
              row="1"
              corporateIdentityDetails={orgData.leInfo.legalEntityBase.domain}
            />
          </div>
        </div>
        <div className="contact-person-holder  ">
          <div className="edit-holder">
            <p className="org-identity-title edit-title">Contact person</p>
            <div className="edit-btn tbl-data-text">
              <img src={require('../assets/images/edit-pen.png')} alt="pen" />
              Edit
            </div>
          </div>

          <div className="contact-person">
            <p className="org-identity-detail">
              {` ${orgData.leInfo.legalEntityBase.contactPerson.firstName}
                  ` +
                ' ' +
                ` ${orgData.leInfo.legalEntityBase.contactPerson.lastName}`}
            </p>
            <p className="org-identity-detail">
              {orgData.leInfo.legalEntityBase.contactPerson.designation}
            </p>
            <div className="contact-person-address org-contact-holder">
              <p className="org-identity-title">Address</p>
              <p className="org-identity-detail">
                {contactAddress.map((item, i) => {
                  return <Fragment key={i}>{item}</Fragment>
                })}
              </p>
            </div>
            <div className="contact-person-tel org-contact-holder">
              <p className="org-identity-title">Tel:</p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.contactPerson.tel1}
              </p>
              <p className="org-identity-detail">
                {orgData.leInfo.legalEntityBase.contactPerson.tel2}
              </p>
            </div>
          </div>
          <div className="contact-person-edit">
            <div className="contact-person-name">
              <div>
                <CommonTextArea2
                  row="1"
                  corporateIdentityDetails={
                    orgData.leInfo.legalEntityBase.contactPerson.firstName
                  }
                />
                <CommonTextArea2
                  row="1"
                  corporateIdentityDetails={
                    orgData.leInfo.legalEntityBase.contactPerson.lastName
                  }
                />
              </div>
              <CommonTextArea2
                row="1"
                corporateIdentityDetails={
                  orgData.leInfo.legalEntityBase.contactPerson.designation
                }
              />
            </div>
            <p>Office Address</p>
            <CommonTextArea2
              row="1"
              label="Floor"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress.floor
              }
            />
            <CommonTextArea2
              row="1"
              label="Building Number or Name"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress
                  .buildingNumOrName
              }
            />
            <CommonTextArea2
              row="1"
              label="street"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress
                  .street
              }
            />
            <CommonTextArea2
              row="1"
              label="Area"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress.area
              }
            />
            <CommonTextArea2
              row="1"
              label="Area"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress.city
              }
            />
            <CommonTextArea2
              row="1"
              label="State"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress.state
              }
            />
            <CommonTextArea2
              row="1"
              label="Postal Code"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress
                  .postalCode
              }
            />
            <CommonTextArea2
              row="1"
              label="country"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.officeAddress
                  .country
              }
            />

            <p>tel:</p>
            <CommonTextArea2
              row="1"
              label="Tel 1"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.tel1
              }
            />
            <CommonTextArea2
              row="1"
              label="Tel 2"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.tel2
              }
            />
            <CommonTextArea2
              row="1"
              label="Email"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.contactPerson.email
              }
            />
          </div>
        </div>
        <div className="org-details-participants">
          <div className="edit-holder">
            <p className="org-identity-title edit-title">Other Participants</p>
            <div className="edit-btn tbl-data-text">
              <img src={require('../assets/images/edit-pen.png')} alt="pen" />
              Edit
            </div>
          </div>
          <div className="org-participants">
            <p className="org-identity-detail">
              {
                orgData.leInfo.legalEntityBase.otherParticipants
                  .additionalProperties
              }
            </p>
          </div>
          <div className="org-participants-edit">
            <CommonTextArea2
              row="1"
              label="Other participants"
              corporateIdentityDetails={
                orgData.leInfo.legalEntityBase.otherParticipants
                  .additionalProperties
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateData2
