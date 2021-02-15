import React from "react"
import './header.css'
import logo from '../../assets/img/logo.png'

const menuItems = [
    {name: 'Home', url: '#', isActive: true},
    {name: 'About Us', url: '#'},
    {name: 'How it works', url: '#'},
    {name: 'Contact Us', url: '#'},
]

type MenuItemType = {
    name: string
    url: string
    isActive?: boolean
}
type MenuPropsType = {
    items: Array<MenuItemType>
}
const Menu:React.FC<MenuPropsType> = ({items}) => {
    const menuItemElements = items.map((menuItem, key) => {
        const itemClass = (menuItem.isActive) ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item'
        return (
            <li className={itemClass} key={key}>
                <a href={menuItem.url} className="pure-menu-link">{menuItem.name}</a>
            </li>
        )
    })
    return (
        <ul className="pure-menu-list">
            {menuItemElements}
        </ul>
    )
}

const Header = () => {
    return (
        <div className="header layout">
            <div className="pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading"><img src={logo} alt="House cart"/></a>
                <Menu items={menuItems} />
            </div>
        </div>
    )
}
export default Header
