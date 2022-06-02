import React from 'react'

const SwitchBtn = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <label className="switch" htmlFor="dark-mode">
          <input
            type="checkbox"
            id="dark-mode"
            onClick={() => setIsDarkMode(!isDarkMode)}
            defaultChecked={isDarkMode}
          />
          <span className="slider"></span>
    </label>
  )
}

export default SwitchBtn