import {Cookies} from 'js-cookie'
import {useState} from 'react'
import './index.css'

const Login = () => {
  const [userData, setUserData] = useState({
    userName: '',
    Password: '',
    showPassword: false,
    errorMsg: '',
    errorStatus: false,
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    setUserData({
      ...userData,
      showSubmitError: false,
    })
  }

  const onSubmitFailure = ErrorMsg => {
    setUserData({
      ...userData,
      errorMsg: ErrorMsg,
      isPasswordChecked: true,
    })
  }

  const onSubmitLoginDetails = async event => {
    event.preventDefault()
    const {userName, Password} = userData
    const userDetails = {
      userName,
      Password,
    }
    console.log(userDetails)
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const userInput = () => (
    <div>
      <label className="label" htmlFor="userName">
        USERNAME
      </label>
      <input
        className="input"
        type="text"
        id="userName"
        name="userName"
        placeholder="Enter userName"
        value={userData.userName}
        onChange={handleChange}
        required
      />
    </div>
  )

  const passwordInput = () => (
    <div>
      <label className="label" htmlFor="Password">
        PASSWORD
      </label>
      <input
        className="input"
        type="text"
        id="Password"
        name="Password"
        placeholder="Enter Password"
        value={userData.Password}
        onChange={handleChange}
        required
      />
    </div>
  )

  return (
    <div className="login-container">
      <img
        className="logo-container"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1686377794/Group_7399_xuuhav.png"
        alt="website logo"
      />
      <div className="login-input-container">
        <p className="login-heading">Login</p>
        <form onSubmit={onSubmitLoginDetails} className="form-container">
          {userInput()}
          {passwordInput()}
          {userData.errorStatus && (
            <p className="ErrorMsg">{userData.errorMsg}</p>
          )}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
