import React, { useState } from 'react'
import CommonToggle from './CommonToggle'
import CorporateModal from './CorporateModal'

const CorporateEntity = () => {
  const tabsItem = ['Information']
  const addPContactItem = ['Add Contact Person Details']
  const editPContactItem = ['Edit Contact Person Details']
  const viewPContactItem = ['Contact Person Details']

  const [inheritance, setInheritance] = useState(false)
  const [orgType, setOrgType] = useState({
    legalEntityBase: {
      leId: '111',
      orgId: '114',
      leIdParent: '331',
      version: '1',
      active: true,
      enableChildAuth: '',
      inheritParentAuth: '',
      linearId: '',
      legalName: 'JC Supply PTY',
      accountId: 'linearId',
      ownerKey: '',
      corpIdentifiers: { additionalProperties: 'blah' },
      registeredAddress: {
        floor: '7th Floor',
        buildingNumOrName: '902',
        street: 'Broadway',
        area: 'Manhattan',
        city: 'New York',
        state: 'New York',
        postalCode: '10010',
        country: 'USA'
      },
      tel1: '+1 (212) 123-1234',
      tel2: '+1 (212) 123-1235',
      fax: '+1 (212) 123-1234',
      primaryEmail: 'brendan@monetago.com',
      domain: 'monetago.com',
      contactPerson: {
        firstName: 'Brendan',
        lastName: 'Taylor',
        contactPersonId: ' linearId',
        designation: 'Chief Technology Officer',
        officeAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        email: 'brendan@monetago.com'
      },
      otherParticipants: {
        additionalProperties: 'blah'
      },
      networkRole: 'ISSUER',
      subRole: ''
    },
    issuer: {
      businessUnits: {
        unitName: 'MonetaGo India',
        buAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        buEmail: 'india@monetago.com',
        buIdentifiers: {
          additionalProperties: {
            gstin: '22175A496B531Z6'
          }
        },
        buContactPersons: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        }
      },
      industry: 'AMCE Building Supply',
      listingExchanges: ['nasdaq', 'NYSE'],
      placeOfSupply: {
        floor: '7th Floor',
        buildingNumOrName: '902',
        street: 'Broadway',
        area: 'Manhattan',
        city: 'New York',
        state: 'New York',
        postalCode: '10010',
        country: 'USA'
      },
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'ISSUER',
        subRole: ''
      }
    },
    investor: {
      scheme: {
        schemeName: 'Liquid Asset Fund',
        schemeId: 'linearId',
        dpAccount: {
          dpName: 'Stock Holding Corporation of India Ltd',
          dpId: 'IN300812',
          clientName: 'Yes Bank Limited',
          clientId: '10489663',
          referenceId: 'Redemption',
          uniqueId: 'linerId'
        }
      },
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'ISSUER',
        subRole: ''
      }
    },
    ipa: {
      depositoryAccounts: {
        dpName: 'Stock Holding Corporation of India Ltd',
        dpId: 'IN300812',
        clientName: 'Yes Bank Limited',
        clientId: '10489663',
        referenceId: 'Redemption',
        uniqueId: 'linerId'
      },
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'ISSUER',
        subRole: ''
      }
    },
    serviceProvider: {
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'SERVICEPROVIDER',
        subRole: 'DEPOSITORY'
      }
    }
  })
  const [showModal, setShowModal] = useState(false)
  const [showMod, setShowMod] = useState({
    info: false,
    addPContact: false,
    editPContact: false,
    viewPContact: false
  })
  const [innerTab, setInnerTab] = useState('Information')

  const handleToggleData = toggleData => {
    setInheritance(!toggleData)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const closeMod = mod => {
    setShowMod({ [mod]: false })
  }

  const openMod = (mod, tab) => {
    setShowMod({ [mod]: true })
    setInnerTab(tab)
    console.log(tab)
  }

  const onChangeCountry = value => {
    useState({ [orgType.legalEntityBase.tel1]: value })
  }

  const openModal = tab => {
    setShowModal(true)
  }

  const onClickTab = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setInnerTab(tab)
  }

  return (
    <div className="corporate-entity">
      <div className="corporate-entity-block-one">
        <div className="corporate-entity-block-one-legal-info">
          <p className="content-title">
            {orgType.legalEntityBase.legalName}{' '}
            <CorporateModal
              btnTitle="Edit"
              info="legalInfo"
              open={showMod.info}
              tabsItem={tabsItem}
              onClickTab={onClickTab}
              innerTab={innerTab}
              onClose={() => closeMod('info')}
              onChangeCountry={onChangeCountry}
              dataNumber={orgType.legalEntityBase.tel1}
              btnClass="corporate-btn"
              img={require('../assets/svg/ic_edit.svg')}
              onOpen={() => openMod('info', 'Information')}
            />
          </p>
          <p className="corporate-identifier content-subtitle">
            Corporate Identifier:{' '}
            <span className="corporate-identifier-text content-type">
              Sample
            </span>
          </p>
          <p className="tel-one corporate-icon main-info">
            {orgType.legalEntityBase.tel1}
          </p>
          <p className="fax corporate-iconmain-info main-info">
            {orgType.legalEntityBase.fax}
          </p>
          <p className="company-address corporate-icon address-primary">
            {orgType.legalEntityBase.registeredAddress.floor}{' '}
            {orgType.legalEntityBase.registeredAddress.buildingNumOrName}{' '}
            {orgType.legalEntityBase.registeredAddress.street}{' '}
            {orgType.legalEntityBase.registeredAddress.area}{' '}
            {orgType.legalEntityBase.registeredAddress.city}{' '}
            {orgType.legalEntityBase.registeredAddress.state}{' '}
            {orgType.legalEntityBase.registeredAddress.postalCode}{' '}
            {orgType.legalEntityBase.registeredAddress.country}{' '}
          </p>
          <p className="corporate-email corporate-icon main-info">
            {orgType.legalEntityBase.primaryEmail}
          </p>
          <p className="corporate-domain corporate-icon main-info">
            {orgType.legalEntityBase.domain}
          </p>
        </div>
        <div className="corporate-entity-block-one-legal-subinfo">
          <p className="corporate-title">Organization Name</p>
          <p className="coporate-type">{orgType.legalEntityBase.networkRole}</p>
          <div className="corporate-inheritance">
            <p className="inehritance-title">Authorization Inheritance</p>
            <CommonToggle
              dataToggleActive={inheritance}
              dataStateToggle="inheritance"
              handleToggleData={handleToggleData}
            />
          </div>
        </div>
      </div>
      <div className="corporate-entity-block-two">
        <div className="contact-person-wrapper">
          <div className="contact-person-header">
            <p className="contact-person-title">Contact Person</p>
            <CorporateModal
              btnTitle="Add New"
              info="addParentContact"
              open={showMod.addPContact}
              onOpen={() =>
                openMod('addPContact', 'Add Contact Person Details')
              }
              onClose={() => closeMod('addPContact')}
              tabsItem={addPContactItem}
              onClickTab={onClickTab}
              innerTab={innerTab}
              btnClass="corporate-btn"
              img={require('../assets/svg/ic_edit.svg')}
            />
          </div>
          <div className="cotant-person-container">
            <div className="contact-person-box">
              <p className="contact-person-name modal-form-title ">
                {orgType.legalEntityBase.contactPerson.firstName}{' '}
                {orgType.legalEntityBase.lastName}
              </p>
              <p className="contact-person-designation">
                {orgType.legalEntityBase.contactPerson.designation}
              </p>
              <p className="tel-one  main-info">
                {orgType.legalEntityBase.contactPerson.tel1}
              </p>
            </div>
            <div className="corporate-buttons">
              <CorporateModal
                btnTitle="View"
                info="viewParentContact"
                open={showMod.viewPContact}
                onOpen={() => openMod('viewPContact', 'Contact Person Details')}
                onClose={() => closeMod('viewPContact')}
                tabsItem={viewPContactItem}
                onClickTab={onClickTab}
                innerTab={innerTab}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_edit.svg')}
              />
              <CorporateModal
                btnTitle="Edit"
                info="editParentContact"
                open={showMod.editPContact}
                onOpen={() =>
                  openMod('editPContact', 'Edit Contact Person Details')
                }
                onClose={() => closeMod('editPContact')}
                tabsItem={editPContactItem}
                onClickTab={onClickTab}
                innerTab={innerTab}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_edit.svg')}
              />
              <CorporateModal
                btnTitle="Delete"
                open={showModal}
                onClose={closeModal}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_edit.svg')}
                onOpen={openModal}
              />
            </div>
          </div>
        </div>
        <div className="business-unit-wrapper">
          <div className="business-unit-header">
            <p className="business-unit-title">Business Unit</p>
            <div className="business-unit-edit">
              <CorporateModal
                btnTitle="View"
                open={showModal}
                onClose={closeModal}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_edit.svg')}
                onOpen={openModal}
              />
              <CorporateModal
                btnTitle="Edit"
                open={showModal}
                onClose={closeModal}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_edit.svg')}
                onOpen={openModal}
              />
            </div>
          </div>
          <div className="business-unit-box">
            <p className="unit-name">{orgType.issuer.businessUnits.unitName}</p>
            <p className="gstin  content-subtitle">
              GSTIN:{' '}
              <span className="content-type">
                {
                  orgType.issuer.businessUnits.buIdentifiers
                    .additionalProperties.gstin
                }
              </span>
            </p>
            <p className="corporate-icon company-address address-primary">
              {' '}
              {orgType.issuer.businessUnits.buAddress.floor}{' '}
              {orgType.issuer.businessUnits.buAddress.buildingNumOrName}{' '}
              {orgType.issuer.businessUnits.buAddress.street}{' '}
              {orgType.issuer.businessUnits.buAddress.area}{' '}
              {orgType.issuer.businessUnits.buAddress.city}{' '}
              {orgType.issuer.businessUnits.buAddress.state}{' '}
              {orgType.issuer.businessUnits.buAddress.postalCode}{' '}
              {orgType.issuer.businessUnits.buAddress.country}{' '}
            </p>
            <p className="business-unit-email corporate-email corporate-icon main-info">
              {orgType.issuer.businessUnits.buEmail}
            </p>
            <p className="business-unit-contact  content-subtitle">
              Business Unit Contact Person :
              <span className="content-type">
                {orgType.issuer.businessUnits.buContactPersons.firstName}{' '}
                {orgType.issuer.businessUnits.buContactPersons.lastName}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateEntity
