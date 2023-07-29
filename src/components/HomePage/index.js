import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'

import './index.css'

import TrendingNow from '../TrendingNow'
import Originals from '../Originals'
import Footer from '../Footer'

const Home = () => {
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
          <Link to="/searchInput">
            <HiOutlineSearch className="search-icon" />
          </Link>
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

  const BannerContainer = () => (
    <div className="Home-container">
      {Header()}
      <div>
        <h1 className="movie-title">Super Man</h1>
        <p className="movie-description">
          Superman is a fictional superhero who first appeared in American comic
          books published by DC Comics.
        </p>
        <button type="button" className="playButton">
          Play
        </button>
      </div>
      <div className="empty-rectangle">
        <p />
      </div>
    </div>
  )

  return (
    <div className="main-container">
      {BannerContainer()}
      <Footer />
    </div>
  )
}
export default Home
