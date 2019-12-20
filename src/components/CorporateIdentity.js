import React, { useState, useEffect, Fragment } from 'react'
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
          name: 'Chabnish Kumar | VP Treasury',
          email: 'chabnish@amcebldg.com',
          number: 'chabnish@amcebldg.com'
        }
      ]
    },
    tin: [
      {
        name: 'GSTIN',
        content: '1236568767B98'
      }
    ]
  })

  const corporateIdentityHolder = [
    'corporateName',
    'coportateAddress',
    'corporateEmail',
    'contactPerson',
    'tin'
  ]

  const onChangeTextarea = (e, section) => {
    const index = e.target.name
    let copyIdentity = identity[section]
    copyIdentity[index].content = e.target.value
    setIdentity({
      ...identity,
      ...copyIdentity
    })
  }

  return (
    <div className="corporate-identity">
      {corporateIdentityHolder.map((data, i) => (
        <Fragment key={i}>
          {data === 'contactPerson' ? (
            <CorporateData
              onChangeTextarea={e => onChangeTextarea(e, data)}
              identityItem={identity[data]}
            />
          ) : (
            <CorporateData
              onChangeTextarea={e => onChangeTextarea(e, data)}
              identityItem={identity[data]}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default CorporateIdentity
