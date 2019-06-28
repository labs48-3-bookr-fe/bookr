import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authAction';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
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
          <Link to={ this.props.isAuthenticated ? '/books' : '/'} className='navbar-brand'>Bookr</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { this.props.isAuthenticated ?
              (<NavItem>
                <NavLink href='/' onClick={this.props.logout}>Logout</NavLink>
              </NavItem>)
              :
              <Fragment>
                <NavItem>
                  <Link to='/login' className='nav-link'>Login</Link>
                </NavItem>
                <NavItem>
                  <Link to='/signup' className='nav-link'>Signup</Link>
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