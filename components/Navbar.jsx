import { useState } from 'react'
import items from '../data-json/sidebar-items.json'

const Navbar = ({ className }) => {
  const [activeState, setActiveState] = useState(0) // 0 - at first item

  const handleClick = (index) => {
    setActiveState(index)
  }

  return (
    <div className={`navbar ${className}`} >
        <ul>
            {
              items.map((item, index) => (
                <li key={index} className={`navbar--list ${index === activeState && 'active'}`} onClick={() => handleClick(index)}>
                  <a href={item.link}>
                    <span className="navbar--list_icon"><ion-icon name={item.icon}></ion-icon></span>
                    <span className="navbar--list_text">{item.name}</span>
                  </a>
                </li>
              ))
            }
            <div className="indicator"></div>
        </ul>
    </div>
  )
}

export default Navbar