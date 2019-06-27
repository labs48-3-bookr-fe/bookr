import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import InputField from './InputField';

const FormWrapper = () => {  
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
};

export default FormWrapper;
