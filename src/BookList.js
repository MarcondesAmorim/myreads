import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfCharger: PropTypes.func.isRequired
    }

    state = { shelfCharger: false }

     render() {
        const { books, shelfCharger } = this.props
        const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                            { type: 'wantToRead',  title: 'Want to Read' },
                            { type: 'read', title: 'Read'}]
    
        return (
          <div className="list-books-content">
            {shelfTypes.map((shelf, index) =>  {
              const shelfBooks = books.filter( book => book.shelf === shelf.type)
              return  (
                <div className="bookshelf" key={index}>
                  <h2 className="bookshelf-title">{ shelf.title }</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                      books={ shelfBooks }
                      shelfCharger={ shelfCharger }
                    />
                  </div>
                </div> )
            })}
          </div>
        )
    }
}

export default BookList
