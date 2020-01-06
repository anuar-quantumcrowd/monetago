import React, { Fragment } from 'react'
import { TextArea } from 'semantic-ui-react'

const CommonTextArea = ({
  label,
  onChangeTextarea,
  corporateIdentityDetails,
  style,
  index,
  onBlurText,
  row,
  data = ''
}) => {
  return (
    <Fragment>
      <div className="textarea-wrapper">
        <p className="textarea-label org-identity-title">{label}</p>
        <TextArea
          name={index}
          data={data}
          onBlur={onBlurText}
          onChange={onChangeTextarea}
          className={style}
          rows={row}
          value={corporateIdentityDetails}
        />
      </div>
    </Fragment>
  )
}

export default CommonTextArea
