import React, { useState, Fragment } from 'react'
import CorporateData from '../common/CorporateData'

const CorporateIdentity = () => {
  const [identity, setIdentity] = useState({
    corporateName: [
      {
        name: 'Unit Name',
        content: 'AMCE Bldg Supply LTD'
      },
      {
        name: 'Unit ID',
        content: '1298346asjkha89231jh'
      }
    ],
    coportateAddress: [
      {
        name: 'Unit Address',
        content:
          'Peninsula Business Park - Tower B 19th Gantrapao Kadam Marg Lower Parel Mumbai, Maharashtra'
      },
      {
        name: 'Postal Code',
        content: '40013'
      },
      {
        name: 'Country',
        content: 'india'
      }
    ],
    corporateEmail: [
      {
        name: 'Email',
        content: 'info@amcebldg.com'
      }
    ],
    contactPerson: {
      name: 'Contact Persons',
      type: '1',
      content: [
        {
          name: 'Chabnish Kumar',
          position: 'VP Treasury',
          email: 'chabnish@amcebldg.com',
          number: '+91 97699 45999'
        },
        {
          name: 'Chabnish Kumar',
          position: 'VP Treasury',
          email: 'chabnish@amcebldg.com',
          number: '+91 97699 45999'
        }
      ]
    },
    tin: [
      {
        name: 'GSTIN',
        content: '1236568767B98'
      }
    ],
    bankStatement: {
      name: 'Statement Account',
      type: '2',
      content: [
        {
          name: 'Account ID',
          content: 'awer987atsf897-8934'
        },
        {
          name: 'Account Name',
          content: 'AMCE Bldg Supply LTD'
        },
        {
          name: 'Account Number',
          content: '19823724785'
        },
        {
          name: 'Bank Name',
          content: 'Yes Bank'
        },
        {
          name: 'Branch',
          content: 'Andheri East Branch'
        },
        {
          name: 'Bank Codes',
          content: 'IFSC Code - YES098734'
        }
      ]
    }
  })

  const corporateIdentityHolder = [
    'corporateName',
    'coportateAddress',
    'corporateEmail',
    'contactPerson',
    'tin',
    'bankStatement'
  ]

  const [showModal, setshowModal] = useState(false)

  const closeModal = () => {
    setshowModal(false)
  }

  const openModal = () => {
    setshowModal(true)
  }

  const onClickEdit = e => {
    const text = e.target.parentNode.parentNode.getElementsByClassName(
      'org-identity-detail'
    )
    const contactText = e.target.parentNode.parentNode.getElementsByClassName(
      'corporate-textarea'
    )
    for (var i = 0; i < text.length; i++) {
      text[i].classList.remove('disabled')
    }
    for (var i = 0; i < contactText.length; i++) {
      contactText[i].classList.remove('disabled')
    }
  }

  const onBlurText = e => {
    e.target.classList.add('disabled')
  }

  const onChangeTextarea = (e, section) => {
    const indexContact = e.target.getAttribute('data')
    const index = e.target.name
    let copyIdentity = identity[section]

    if (section === 'contactPerson') {
      copyIdentity.content[index][indexContact] = e.target.value
    } else if (section === 'bankStatement') {
      copyIdentity.content[index] = e.target.value
    } else {
      copyIdentity[index].content = e.target.value
    }

    setIdentity({
      ...identity,
      ...copyIdentity
    })
  }

  return (
    <div className="corporate-identity">
      {corporateIdentityHolder.map((data, i) => (
        <Fragment key={i}>
          <CorporateData
            btnContent="Add"
            showModal={showModal}
            closeModal={closeModal}
            openModal={openModal}
            onBlurText={onBlurText}
            onClickEdit={onClickEdit}
            onChangeTextarea={e => onChangeTextarea(e, data)}
            identityItem={identity[data]}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default CorporateIdentity
