import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Jumbotron extends React.Component{

  render(){
    return (
      <Fragment>
        <div className="col container py-5">
          <h1 className="d-block pb-2 pt-4 text-center">Bookr, your source of all things books.</h1>
          <h3 className='d-block py-2 text-muted text-center'>Get insight, reviews and ratings of text books.</h3>
          <h5 className='d-block py-2 text-muted text-center'>Join other 5000+ people to give your reviewes.</h5>
          <div className='d-block py-2 text-center'>
            <Link to={ this.props.isAuthenticated ? '/books' : '/login'}><Button outline color='danger'>Discover Books</Button></Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Jumbotron);