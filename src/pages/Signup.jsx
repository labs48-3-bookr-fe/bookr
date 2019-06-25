import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

const SignupPage = (props) => {
  const inputFields = [
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
  ];
  const buttonTitle = 'Sign Up';
  return (
    <Fragment>
      <Header />
      <div className='py-5 d-flex justify-content-center align-middle'>
        <div className='col-4 align-middle'>
          <Card>
            <CardHeader tag='h4'>Get access to unlimited book reviews</CardHeader>
              <CardBody>
                <Form buttonTitle={buttonTitle} inputFields={inputFields}/>
                <CardText className='text-center'>Already have an account? <Link to='/login'>Login</Link></CardText>
              </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default SignupPage;