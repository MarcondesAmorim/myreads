import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookShelfCharger extends Component {
  static propTypes = {
      book: PropTypes.object.isRequired,
      books: PropTypes.array.isRequired,
      shelfCharger: PropTypes.func.isRequired,
  }

  render() {
    const { book, books, shelfCharger } = this.props

     let currentShelf = 'none'

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
        break
      }
    }

    return (
      <div className="book-shelf-charger">
        <select  onChange={(event) => shelfCharger(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default BookShelfCharger
