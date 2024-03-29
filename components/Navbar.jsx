
import items from '../data-json/sidebar-items.json'
import { useRouter } from 'next/router'

const Navbar = ({ className }) => {
  const router = useRouter()

  return (
    <div className={`navbar noselect ${className}`} >
        <ul>
            {
              items.map((item, index) => (
                <li key={index} className={`navbar--list ${item.link === router.asPath && 'active'}`} onClick={() => router.push(item.link)}>
                  <a>
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