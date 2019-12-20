import React from 'react'

const InnerTabs = ({ tabsItem, onClickTab, innerTab }) => {
  return (
    <div className="innertab-wrapper">
      {tabsItem.map((item, i) => (
        <div
          key={i}
          onClick={onClickTab}
          className={`innertab-item ${
            innerTab === item ? 'active' : 'inactive'
          }`}
        >
          <div id={item} className="org-identity-detail">
            {item}
          </div>
        </div>
      ))}
    </div>
  )
}

export default InnerTabs
