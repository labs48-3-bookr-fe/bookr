import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Form, Input, Button, FormGroup } from 'reactstrap';
import Loader from 'react-loader-spinner';
import { fetchBook, reviewBook, deleteBook } from '../actions/bookActions';
import Header from '../components/Header';
import BookCard from '../components/BookCardPreview';
import Footer from '../components/Footer';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      review: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const data = { review: this.state.review, bookId: this.props.match.params.id};
    this.props.reviewBook(data, this.props.history);
  }

  onChange = (e) => {
    this.setState({
      review: e.target.value
    })
  }

  onClick = (e) => {
    const bookId = this.props.match.params.id;
    this.props.deleteBook(bookId, this.props.history);
  }

  componentWillMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    const { book } = this.props;
    const bookLoaded = { ...book };
    return (
      <Fragment>
          <Header />
          <div className="row p-5">
          {
            this.props.gettingBook ?
            <div className="col-sm-3 col-md-4 text-center">
              <Loader type="Bars" color="#f83f1e" height={30} width={30} /> 
              </div>
              : <BookCard book={bookLoaded} onClick={this.onClick}/>
          }
            
            <div className="col-md-7 pl-md-5">
              <h3 className='pb-3 pt-5 pt-md-0'>Reviews</h3>
              <Form onSubmit={this.onSubmit} >
                <h5 className='pb-3'>Give Your Review</h5>
                <FormGroup>
                  <Input type='textarea' name='review' rows='5' onChange={this.onChange}/>
                </FormGroup>
                <FormGroup>
                  <Button outline color='danger'>Review</Button>
                </FormGroup>
              </Form>
              <hr className='my-5'></hr>
              {
                book.reviews ? 
                bookLoaded.reviews.reverse().map((review, key) => 
                    <div key={key}>
                      <p>{review.review}</p>
                      <p className='text-muted'>{review.userId}</p>
                      <hr></hr> 
                    </div>
                  ) 
                  : null
              }
            </div>
          </div>
          <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.books.item,
    gettingBook: state.books.gettingBook
  }
}
Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchBook, reviewBook, deleteBook })(withRouter(Book));
