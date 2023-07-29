import {Cookies} from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'
import Footer from '../Footer'
import Header from '../Header'

const Account = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="main-container">
      <Header />
      <div className="account-container">
        <div className="account-details-container">
          <h1 className="header">Account</h1>
          <hr className="line" />
          <div className="memberShip-container">
            <h1 className="membership-text">Member Ship</h1>
            <div className="membership-details-container">
              <p className="mail-text">surya@gmail.com</p>
              <p className="password-text">Password: ********</p>
            </div>
          </div>
          <hr className="line" />
          <div className="plan-container">
            <h1 className="planDetails-text">PlanDetails</h1>
            <div className="plan-details-container">
              <p className="plan-type-text">Premium</p>
              <p className="Quality-text">Ultra HD</p>
            </div>
          </div>
          <hr className="line" />
          <button
            type="button"
            className="logOut-button"
            onClick={onClickLogOut}
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(Account)
