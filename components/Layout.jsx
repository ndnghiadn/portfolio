import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SwitchBtn from './SwitchBtn'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/slices/rootSlice'

const Layout = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.darkTheme)

  useEffect(() => {
    const darkTheme = localStorage.getItem('darkTheme')
    dispatch(setTheme(darkTheme === 'true'))
  }, [])

  useEffect(() => {
      localStorage.setItem('darkTheme', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={`inner ${isDarkMode ? 'darkTheme' : 'lightTheme'}`}>
      <Sidebar className="isDesktop" />
      { children }
      <Navbar className="isMobile"/>
    </div>
  )
}

export default Layout
