import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../actions/authAction';
import { Form, Button, FormGroup } from 'reactstrap';
import InputField from '../components/InputField';
import Header from '../components/Header';
import Footer from '../components/Footer';


class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      inputFields: [
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
      buttonTitle: 'Login',
    };
    this.onChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }
    this.onSubmit = (e) => {
      e.preventDefault();
      const data = {};
      this.state.inputFields.map(field => (data[field.name]= this.state[field.name]));
      this.props.login(data);
    }
  }

  render(){
    return (
      <Fragment>
        <Header />
        <div className='py-5 d-flex justify-content-center'>
          <div className='col-4'>
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
                  <CardText className='text-center'>Do not have an account? <Link to='/signup'>Signup</Link></CardText>
                </CardBody>
            </Card>
          </div>
        </div>
        
        <Footer />
      </Fragment>
    )}
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage);
