import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardFooter,
  Form,
  FormGroup,
  Button,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { register } from '../actions/authAction';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputField from '../components/InputField';

class SignupPage extends Component {
  constructor (props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      visible: true, 
      inputFields: [
        {
          type: 'text',
          name: 'firstName',
          placeholder: 'Enter First Name',
          classname: 'form-item',
          autofocus: 'autofocus',
        }, 
        {
          type: 'text',
          name: 'lastName',
          placeholder: 'Enter Last Name',
          classname: 'form-item',
        }, 
        {
            type: 'email',
            name: 'email',
            placeholder: 'Enter email',
            classname: 'form-item',
        }, 
        {
            type: 'password',
            name: 'password',
            placeholder: 'Enter password',
            classname: 'form-item pl-0'
        }
      ],
      buttonTitle: 'Sign Up',
    }
    this.onChange = (e) => {
      this.setState({[e.target.name]: e.target.value })
    }
    this.onSubmit = (e) => {
      e.preventDefault();
      const data = {};
      this.state.inputFields.map(field => (data[field.name]= this.state[field.name]));
      this.props.register(data, this.props.history);
    }
    this.onDismiss = () => {
      this.setState({ visible: false });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({ errors: nextProps.errors})
    }
  }

  render (){
    return (
      <Fragment>
        <Header />
        <div className='py-5 d-flex justify-content-center align-middle'>
          <div className='col-sm-4 align-middle'>
            <Card>
              <CardHeader tag='h4'>Get access to unlimited book reviews</CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    {this.state.inputFields.map((field, index) => 
                      <InputField 
                        onChange={this.onChange}
                        value={this.state[field.name]}
                        inputAttr={field}
                        key={index}
                      />)}
                    <FormGroup>
                      <Button outline color='danger' block>{this.state.buttonTitle}</Button>
                    </FormGroup>
                  </Form>
                  <CardText className='text-center'>Already have an account? <Link to='/login'>Login</Link></CardText>
                </CardBody>
                <CardFooter>
                  {
                    this.props.errors.length ?
                      <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                        <ul>
                          { this.props.errors.map((error, key) => <li key={key} >{ error.msg }</li>)}
                        </ul>
                      </Alert>
                    : null
                  }
                </CardFooter>
            </Card>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

SignupPage.propTypes = {
  register: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { register })(withRouter(SignupPage));
