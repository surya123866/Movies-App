import {Link} from 'react-router-dom'

import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

const Header = () => (
  <div className="Header-container">
    <div className="Header-items-container">
      <img
        className="logo"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1686377794/Group_7399_xuuhav.png"
        alt="website logo"
      />
      <nav className="nav-menu">
        <Link to="/" className="link">
          <li className="list">
            <p className="nav-link">Home</p>
          </li>
        </Link>
        <Link to="/popular" className="link">
          <li className="list">
            <p className="nav-link">Popular</p>
          </li>
        </Link>
      </nav>
      <div className="avatar-search-container">
        <div className="search-input-container">
          <input type="search" placeholder="Search" className="input" />
          <button testid="searchButton" type="button" className="search-button">
            <HiOutlineSearch className="search-icon" />
          </button>
        </div>
        <div>
          <Link to="/account" className="link">
            <img
              className="profile"
              src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1686459977/Avatar_pjoiug.png"
              alt="Avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header
