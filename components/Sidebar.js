import Image from "next/image"

const items = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'Education',
        link: '#'
    },
    {
        name: 'Projects',
        link: '#'
    },
    {
        name: 'About Me',
        link: '#'
    },
    {
        name: 'Contact',
        link: '#'
    },
]

const Sidebar = () => {
  return (
    <div className="sidebar">
        <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
        </label>
        <ul>
            {
                items.map((item, index) => (
                    <li key={index} style={{ zIndex: items.length - index }}><a href={item.link}>{ item.name }</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Sidebar