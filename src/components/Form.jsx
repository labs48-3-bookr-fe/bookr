import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../actions/authAction';
import InputField from './InputField';

class FormWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value })
  }
  
  onSubmit(e){
    e.preventDefault();
    const data = {};
    this.props.inputFields.map(field => (data[field.name]= this.state[field.name]));
    this.props.createUser(data);

    console.log({data});
  }
  render(){
    return (
      <Form onSubmit={this.onSubmit}>
        {this.props.inputFields.map((field, index) => 
          <InputField 
            onChange={this.onChange}
            value={this.state[field.name]}
            inputAttr={field}
            key={index}
          />)}
        <FormGroup>
          <Button outline color='danger' block>{this.props.buttonTitle}</Button>
        </FormGroup>
      </Form>
    );
  }
};

FormWrapper.propTypes = {
  createUser: PropTypes.func.isRequired
}
export default connect(null, { createUser })(FormWrapper);
