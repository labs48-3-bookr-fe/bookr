import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText, Form, FormGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
          autofocus: 'autofocus',
        }, 
        {
            type: 'email',
            name: 'email',
            placeholder: 'Enter email',
            classname: 'form-item',
            autofocus: 'autofocus',
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
      this.props.register(data);
    }
  }

  render (){
    return (
      <Fragment>
        <Header />
        <div className='py-5 d-flex justify-content-center align-middle'>
          <div className='col-4 align-middle'>
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

export default connect(null, { register })(SignupPage);
