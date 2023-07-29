import './index.css'
import Header from '../Header'

const SomethingWentWrong = () => (
  <div className="main-container">
    <Header />
    <div className="display-container">
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1687456143/Background-Complete_wxwbev.png"
        alt="failure view"
      />
      <p className="description">Something went wrong.Please try again</p>
      <button type="button" className="button">
        Try Again
      </button>
    </div>
  </div>
)
export default SomethingWentWrong
