import {Link} from 'react-router-dom'
import './pageNotFound.css'

const PageNotFound = () => (
  <div className="main-container">
    <h1 className="LostYourWay">LostYourWay</h1>
    <p className="description">
      we are sorry the page you requested could not be found?
      <br />
      Please go back to the homepage.
    </p>
    <Link to="/" className="link">
      <button type="button" className="button">
        Go to Home
      </button>
    </Link>
  </div>
)
export default PageNotFound
