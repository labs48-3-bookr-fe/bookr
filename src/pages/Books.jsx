import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CardDeck } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { fetchAllBooks, fetchBook } from '../actions/bookActions';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

class Books extends Component {
  constructor(props){
    super(props);
    this.onClick = (e) => {
      const id = e.target.getAttribute('id');
      this.props.fetchBook(id, this.props.history);
      this.props.history.push(`/books/${id}`)
    }
  }
  componentWillMount() {
    this.props.fetchAllBooks();
  }

  render() {
    return (
      <Fragment>
          <Header />
          <CardDeck>
            <div className="col-12 p-5">
              {this.props.books.map((book, key) => <BookCard key={key} book={book} onClick={this.onClick}/>)}
            </div>
          </CardDeck>
          <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
      books: state.books.items
  }
}
Books.propTypes = {
  fetchAllBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchAllBooks, fetchBook })(withRouter(Books));