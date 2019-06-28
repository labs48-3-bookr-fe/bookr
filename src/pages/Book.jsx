import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Form, Input, Button, FormGroup } from 'reactstrap';
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
    this.onSubmit = (e) => {
      e.preventDefault();
      const data = { review: this.state.review, bookId: this.props.match.params.id};
      this.props.reviewBook(data, this.props.history);
    }
    this.onChange = (e) => {
      this.setState({
        review: e.target.value
      })
    }
    this.onClick = (e) => {
      const bookId = this.props.match.params.id;
      this.props.deleteBook(bookId, this.props.history);
    }
  }
  componentWillMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    const { book } = this.props;
    return (
      <Fragment>
          <Header />
          <div className="row p-5">
            <BookCard book={book} onClick={this.onClick}/>
            <div className="col-md-4">
              <h3 className='pb-3'>Reviews</h3>
              {
                book.reviews ? 
                  book.reviews.map((review, key) => 
                    <div key={key}>
                      <p>{review.review}</p>
                      <p className='text-muted'>{review.userId}</p>
                      <hr></hr> 
                    </div>
                  ) 
                  : null
              }
            </div>
            <div className="col-md-4">
              <Form onSubmit={this.onSubmit}>
                <h3 className='pb-3'>Give Your Review</h3>
                <FormGroup>
                  <Input type='textarea' name='review' rows='5' onChange={this.onChange}/>
                </FormGroup>
                <FormGroup>
                  <Button outline color='danger'>Review</Button>
                </FormGroup>
              </Form>
            </div>
          </div>
          <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.books.item
  }
}
Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchBook, reviewBook, deleteBook })(withRouter(Book));