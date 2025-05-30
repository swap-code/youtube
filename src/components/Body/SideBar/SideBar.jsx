import React from 'react'
import './SideBar.css' // Import a CSS file for styling
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
const SideBar = () => {

  const { isMenuOpen } = useSelector((store) => store.app)
  if(!isMenuOpen) return null
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link"><Icon name="home"/> Home</Link>
        
        </li>
        <li className="sidebar-item">
          <a href="#trending" className="sidebar-link"><Icon name='pencil alternate'/>Trending</a>
        </li>
        <li className="sidebar-item">
          <a href="#subscriptions" className="sidebar-link"><Icon name="user secret"/>Subscriptions</a>
        </li>
        <li className="sidebar-item">
          <a href="#library" className="sidebar-link"> <Icon name="book"/>Library</a>
        </li>
        <li className="sidebar-item">
          <a href="#history" className="sidebar-link"><Icon name="history"/>History</a>
        </li>
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link"><Icon name="home"/> Home</Link>
        
        </li>
        <li className="sidebar-item">
          <a href="#trending" className="sidebar-link"><Icon name='pencil alternate'/>Trending</a>
        </li>
        <li className="sidebar-item">
          <a href="#subscriptions" className="sidebar-link"><Icon name="user secret"/>Subscriptions</a>
        </li>
        <li className="sidebar-item">
          <a href="#library" className="sidebar-link"> <Icon name="book"/>Library</a>
        </li>
        <li className="sidebar-item">
          <a href="#history" className="sidebar-link"><Icon name="history"/>History</a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
