import {Component} from 'react'
import HeaderContext from '../../context/HeaderContext'
import Header from '../Header'
import FavoritesList from '../FavoriteList'
import EmptyFavoritesView from '../EmptyFavoritesView'
import './index.css'

class Favorites extends Component {
  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDarkTheme, favoritesList, removeAllFavorites} = value
          const favoritesListLength = favoritesList.length
          const showEmptyView = favoritesListLength === 0
          const bookText = favoritesListLength === 1 ? 'Book' : 'Books'

          const darkHeading = isDarkTheme ? 'favorites-dark-heading-text' : ''
          const onClickRemoveAll = () => {
            removeAllFavorites()
          }

          return (
            <>
              <Header />
              <div className="favorite-container">
                {showEmptyView ? (
                  <EmptyFavoritesView />
                ) : (
                  <div className="favorite-content-container">
                    <h1 className={`favorite-heading ${darkHeading}`}>
                      {' '}
                      My Favorites
                    </h1>
                    <button
                      type="button"
                      className="remove-all-btn"
                      onClick={onClickRemoveAll}
                    >
                      Remove {favoritesListLength} {bookText}
                    </button>
                    <ul className="favorites-list">
                      {favoritesList.map(eachItem => (
                        <FavoritesList
                          key={eachItem.id}
                          cartItemDetails={eachItem}
                        />
                      ))}
                    </ul>
                    )
                  </div>
                )}
              </div>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}
export default Favorites
