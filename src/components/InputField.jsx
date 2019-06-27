import React from 'react';
import { FormGroup, Input } from 'reactstrap';

const InputField = (props) => {
  return(
    <FormGroup>
      <Input 
        type={props.inputAttr.type}
        value={props.value}
        name={props.inputAttr.name}
        onChange={props.onChange}
        placeholder={props.inputAttr.placeholder}
      />
    </FormGroup>
  );
};

export default InputField;