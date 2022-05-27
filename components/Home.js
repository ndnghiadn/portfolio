import Content from './Content'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'

const Home = () => {
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
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Content />
    </div>
  )
}

export default Home
