import {Link} from 'react-router-dom'

import './index.css'
import HeaderContext from '../../context/HeaderContext'

const NotFound = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const dark = isDarkTheme ? 'not-found-dark-des' : ''
      return (
        <>
          <div className="not-found-container">
            <img
              src="https://res.cloudinary.com/dyhkn8frb/image/upload/v1667468255/Group_7484_ryo69v.png"
              alt="not found"
            />
            <h1 className={`not-found-heading ${dark}`}>Page Not Found</h1>
            <p className={`not-found-des ${dark}`}>
              we are sorry, the page you requested could not be found, Please go
              back to the homepage.
            </p>
            <Link to="/">
              <button type="button" className="not-found-button">
                Go Back to Home
              </button>
            </Link>
          </div>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default NotFound
