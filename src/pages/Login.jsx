import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer'

const LoginPage = () => {
  const inputFields = [
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
  const buttonTitle = 'Login';
  return (
    <Fragment>
      <Header />
      <div className='py-5 d-flex justify-content-center'>
        <div className='col-4'>
          <Card>
            <CardHeader tag='h4'>Get access to unlimited book reviews</CardHeader>
              <CardBody>
                <Form buttonTitle={buttonTitle} inputFields={inputFields}/>
                <CardText className='text-center'>Do not have an account? <Link to='/signup'>Signup</Link></CardText>
              </CardBody>
          </Card>
        </div>
      </div>
      
      <Footer />
    </Fragment>
  )
}

export default LoginPage;