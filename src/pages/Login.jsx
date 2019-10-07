import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText, CardFooter, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
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
      gender: '',
      food:'',
      visible: true,
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
  }

  onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    this.state.inputFields.map(field => (data[field.name]= this.state[field.name]));
    this.props.login(data, this.props.history);
  }

  onChange = (e) => {
    e.target.type === 'select-one' ? this.setState({[e.target.name]: e.target.options[e.target.options.selectedIndex].value}) : this.setState({[e.target.name]: e.target.value});
  }
  
  onDismiss = () => {
    this.setState({
      visible: false,
    })
  }

  componentDidMount(){
    if (this.props.isAuthenticated) {
      return this.props.history.goBack();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({ errors: nextProps.errors})
    }
  }

  render(){
    return (
      <Fragment>
        <Header />
        <div className='py-5 d-flex justify-content-center'>
          <div className='col-sm-4'>
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
                      <Button outline color='danger' block>
                        {this.props.loginIn ?
                        <Loader type="ThreeDots" color="#f83f1e" height={30} width={30} /> :
                         this.state.buttonTitle}
                      </Button>
                    </FormGroup>
                  </Form>
                  <CardText className='text-center'>Do not have an account? <Link to='/signup'>Signup</Link></CardText>
                </CardBody>
                <CardFooter>
                  {
                    this.props.errors.length ? 
                    <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                      <ul>
                        { this.props.errors.map((error, key) => <li key={key} >{ error.msg }</li>)}
                      </ul>
                    </Alert>
                    :
                      null
                  }
                </CardFooter>
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    loginIn: state.auth.loginIn,
    errors: state.auth.errors,
  }
}

export default connect(mapStateToProps, { login })(withRouter(LoginPage));
