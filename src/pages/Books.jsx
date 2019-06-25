import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchBooks } from '../actions/bookActions';

class Books extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }
  render() {
    const bookItems = this.props.books.map(book => <div key={book.id}>
      <h3>{book.title}</h3>
      <p>{book.body}</p>
    </div>)
    return (
      <Fragment>
        <h2>Books</h2>
        {bookItems}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.items
})

Books.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchBooks })(Books);