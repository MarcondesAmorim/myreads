import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfCharger from './BookShelfCharger'
import noCover from './icons/no-cover-image.png'

class Book extends Component {

  static propTypes = {
      book: PropTypes.object.isRequired,
      books: PropTypes.array.isRequired,
      shelfCharger: PropTypes.func.isRequired
  }

  render() {
    const { book, books, shelfCharger } = this.props
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : "No title available"

    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ backgroundImage: `url(${coverImg})`}}>
                </div>
                <BookShelfCharger
                    book={ book }
                    books={ books }
                    shelfCharger={shelfCharger }
                />
              </div>
              <div className="book-title">{ title }</div>
              {
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book
