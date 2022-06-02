import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SwitchBtn from './SwitchBtn'

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkTheme = localStorage.getItem('darkTheme')
    setIsDarkMode(darkTheme === 'true') // darkTheme -> Boolean
  }, [])

  useEffect(() => {
      localStorage.setItem('darkTheme', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={`inner ${isDarkMode ? 'darkTheme' : 'lightTheme'}`}>
      <Sidebar className="isDesktop" isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SwitchBtn className="isMobile" isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      { children }
      <Navbar className="isMobile"/>
    </div>
  )
}

export default Layout
