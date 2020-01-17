import React from 'react'
import CorporateData from '../common/CorporateData'
import CorporateData2 from './CorporateData2'
import { useSelector } from 'react-redux'

const CorporateIdentity2 = () => {
  const data = useSelector(state => state.organization)

  console.log(data.selectedOrg, 'yes')
  return (
    <div className="corporate-identity">
      <CorporateData2 orgData={data.selectedOrg} />
    </div>
  )
}

export default CorporateIdentity2
