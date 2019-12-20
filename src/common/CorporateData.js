import React, { Fragment } from 'react'
import CommonTextArea from './CommonTextArea'

const CorporateData = ({ identityItem, onChangeTextarea }) => {
  return (
    <div className="corporate-identity-info">
      {identityItem.type === '1' ? null : (
        <div className="edit-holder">
          <div className="edit-btn">
            <img src={require('../assets/images/edit-pen.png')} alt="pen" />
            Edit
          </div>
        </div>
      )}

      {identityItem.type === '1' ? null : (
        <Fragment>
          {identityItem.map((input, i) => {
            return (
              <CommonTextArea
                key={i}
                index={i}
                corporateIdentityDetails={input.content}
                onChangeTextarea={onChangeTextarea}
                label={input.name}
                style="corporate-textarea org-identity-detail"
              />
            )
          })}
        </Fragment>
      )}
    </div>
  )
}

export default CorporateData
