import React, { Fragment } from 'react'
import { TextArea } from 'semantic-ui-react'

const CommonTextArea = ({
  label,
  onChangeTextarea,
  corporateIdentityDetails,
  style,
  index,
  type
}) => {
  return (
    <Fragment>
      <div className="textarea-wrapper">
        <p className="textarea-label org-identity-title">{label}</p>
        {type === '1' ? null : (
          // <Fragment>
          //   {corporateIdentityDetails.map((item, i) => (
          //     <Fragment>
          //       <TextArea
          //         name={index}
          //         onChange={onChangeTextarea}
          //         className={style}
          //         value={item.name}
          //       />
          //       <TextArea
          //         name={index}
          //         onChange={onChangeTextarea}
          //         className={style}
          //         value={item.email}
          //       />
          //       <TextArea
          //         name={index}
          //         onChange={onChangeTextarea}
          //         className={style}
          //         value={item.number}
          //       />
          //     </Fragment>
          //   ))}
          // </Fragment>
          <TextArea
            name={index}
            onChange={onChangeTextarea}
            className={style}
            row="2"
            value={corporateIdentityDetails}
          />
        )}
      </div>
    </Fragment>
  )
}

export default CommonTextArea
