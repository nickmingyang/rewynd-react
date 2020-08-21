import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }
    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
      return (
          <React.Fragment>
              <Navbar light sticky="top" expand="lg">
                  <div className="container">
                      <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.svg" height="50" width="50" alt="Rewynd Logo" /></NavbarBrand>
                      <NavbarToggler onClick={this.toggleNav} />
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link" to="/home">
                                    Home
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/myaccount">
                                      My Account
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/aboutus">
                                     About
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/contactus">
                                      Contact Us
                                  </NavLink>
                              </NavItem>
                              </Nav>
                      </Collapse>
                  </div>
              </Navbar>
            </React.Fragment>
      )
    }
  }

  export default Header;