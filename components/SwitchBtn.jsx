import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/slices/rootSlice'

const SwitchBtn = ({ className }) => {
  const isDarkMode = useSelector(state => state.darkTheme)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setTheme(!isDarkMode))
  }

  return (
    <label className={`switch ${className}`} htmlFor="dark-mode">
          <input
            type="checkbox"
            id="dark-mode"
            onClick={handleClick}
            defaultChecked={isDarkMode}
          />
          <span className="slider"></span>
    </label>
  )
}

export default SwitchBtn