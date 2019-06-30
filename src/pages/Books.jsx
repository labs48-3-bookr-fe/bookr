import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CardDeck } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { fetchAllBooks, fetchBook } from '../actions/bookActions';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

class Books extends Component {
  onClick = (e) => {
    const id = e.target.getAttribute('id');
    this.props.fetchBook(id, this.props.history);
    this.props.history.push(`/books/${id}`)
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
            {
              this.props.gettingBooks ?
              <div className="col-sm-3 col-md-4 text-center">
                <Loader type="Bars" color="#f83f1e" height={30} width={30} /> 
                </div>
                : this.props.books.map((book, key) => <BookCard key={key} book={book} onClick={this.onClick}/>)
            }
            </div>
          </CardDeck>
          <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.items,
    gettingBooks: state.books.gettingBooks,
  }
}
Books.propTypes = {
  fetchAllBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchAllBooks, fetchBook })(withRouter(Books));