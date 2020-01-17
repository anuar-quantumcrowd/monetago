import React, { useState } from 'react'

const CommonToggle = ({
  dataToggleActive,
  dataStateToggle,
  handleToggleData
}) => {
  const [toggle, setToggle] = useState({
    activeToggle: dataToggleActive,
    prevToggle: dataToggleActive
  })

  const onClickToggle = e => {
    setToggle({ activeToggle: !toggle.activeToggle })
    handleToggleData(toggle.activeToggle)
  }

  return (
    <div>
      <input
        type="checkbox"
        className="toggle"
        onClick={onClickToggle}
        id={dataStateToggle}
      />
      <label htmlFor={dataStateToggle}>
        <span className="on"></span>
        <span className="off"></span>
      </label>
    </div>
  )
}

export default CommonToggle
