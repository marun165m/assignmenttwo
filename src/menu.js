import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import "./menu.css";
class hamburgerMenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: '',

          };
      };
  

   toggleCollapse = (collapseID) => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    return (
      <Router>
        <MDBContainer>
          <MDBNavbar
            color='light-blue lighten-4'
            style={{ marginTop: '20px' }}
            light
          >
            <MDBContainer>
              <MDBNavbarBrand>Navbar</MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem >
                    <MDBNavLink to='#!'><div style={{backgroundColor:"rgb("+this.props.red+",0,0)"}} className="colorspot">red</div></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'><div style={{backgroundColor:"rgb(0,"+this.props.green+",0)"}} className="colorspot">green</div></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'><div style={{backgroundColor:"rgb(0,0,"+this.props.blue+")"}} className="colorspot">blue</div></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Router>
    );
  }
}

export default hamburgerMenuPage;