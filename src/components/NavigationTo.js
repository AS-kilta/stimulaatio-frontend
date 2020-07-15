import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import {
    NavItem,
    NavLink,
  } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

class NavigationTo extends Component  {
    render() {
        return (
            <LinkContainer to={this.props.path}>
            <NavItem>
                <NavLink>{this.props.title}</NavLink>
            </NavItem>
            </LinkContainer>
        )
    }
  }

  export default NavigationTo;