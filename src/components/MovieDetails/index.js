import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const MovieDetails = () => (
  <div className="main-container">
    <div className="movie-details-container">
      <Header />
      <div className="rectangle1453">
        <h1 className="movie-name">Avengers</h1>
        <div className="time-certificate-year">
          <p className="run-time">2h 20m</p>
          <p className="certificate">U/A</p>
          <p className="released-year">2007</p>
        </div>
        <p className="movie-summary">
          Earth&apos;s mightiest heroes must come together and learn to fight as
          a team if they are going to stop the mischievous Loki and his alien
          army from enslaving humanity.
        </p>
        <button type="button" className="play-button">
          Play
        </button>
        <div className="empty-rectangle">
          <p />
        </div>
      </div>
    </div>
    <div className="movie-details-and-moreLike-container ">
      <div className="movie-details">
        <div className="Generes">
          <h1 className="Generes-Text">Generes</h1>
          <p className="genre-type">Action</p>
          <p className="genre-type">Super Hero</p>
          <p className="genre-type">Fantasy</p>
          <p className="genre-type">Adventure</p>
        </div>
        <div className="Generes">
          <h1 className="Generes-Text">Audio Available</h1>
          <p className="genre-type">Telugu</p>
          <p className="genre-type">English</p>
          <p className="genre-type">Hindi</p>
          <p className="genre-type">Tamil</p>
        </div>
        <div className="Generes">
          <h1 className="Generes-Text">Rating Count</h1>
          <p className="genre-type">60,20</p>
          <h1 className="Generes-Text">Rating Average</h1>
          <p className="genre-type">4.8</p>
        </div>
        <div className="Generes">
          <h1 className="Generes-Text">Budget</h1>
          <p className="genre-type">60,020</p>
          <h1 className="Generes-Text">Release Date</h1>
          <p className="genre-type">27th April 2007</p>
        </div>
      </div>
      <div className="moreLikeThis">
        <h1 className="more-like-this-text">More Like This</h1>
        <div className="movies-album">
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
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  </div>
)

export default MovieDetails
