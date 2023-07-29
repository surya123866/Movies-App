import './index.css'
import Header from '../Header'

const SearchInput = () => {
  const searchInput = 'Avengers'

  const notFoundMatches = () => (
    <div className="not-found-matches-container">
      <img
        className="not-found-match-image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1690112554/Illustration_ci4zem.png"
        alt="not found matches"
      />
      <p className="not-found-matches-text">
        Your search for {searchInput} did not find any matches.
      </p>
    </div>
  )

  const searchResult = () => (
    <div className="search-result-container">
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
      <img
        className="image"
        src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1641396198/cld-sample.jpg"
        alt="popular"
      />
    </div>
  )
  return (
    <div className="main-container">
      <Header />
      {notFoundMatches()}
    </div>
  )
}

export default SearchInput
