import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authAction';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className='px-5'>
          <NavbarBrand><Link to={ this.props.isAuthenticated ? '/books' : '/'}>Bookr</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { this.props.isAuthenticated ?
              (<NavItem>
                <NavLink><Link to='/' onClick={this.props.logout}>Logout</Link></NavLink>
              </NavItem>)
              :
              <Fragment>
                <NavItem>
                  <NavLink><Link to='/login'>Login</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to='/signup'>Signup</Link></NavLink>
                </NavItem>
              </Fragment>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { logout })(Header);