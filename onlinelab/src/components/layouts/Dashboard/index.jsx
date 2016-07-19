import React from "react";
import Router, { Link, RouteHandler } from "react-router";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  toggleMenu: function(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');  
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  },

  render: function() {

    return (
        <div id="wrapper" className="content">

          <Navbar brand={
            <span>
              <span>&nbsp;控制原理在线实验平台</span>
            </span>
          } fluid={true}  style={ {margin: 0} }>
            <ul className="nav navbar-top-links navbar-right">
              <Nav style={ {margin: 0} }>
              
                <NavDropdown title=<i className="fa fa-user fa-fw"></i> >
                  <MenuItem eventKey="1">
                    <i className="fa fa-user fa-fw"></i> 用户信息
                  </MenuItem> 
                  <MenuItem eventKey="2">
                    <i className="fa fa-gear fa-fw"></i> 设定
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <Link to="login">
                      <i className="fa fa-sign-out fa-fw"></i> Logout
                    </Link>
                  </MenuItem>
                </NavDropdown>

              </Nav>
            </ul> 
            <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
              <div className="sidebar-nav navbar-collapse">
                
                <ul className="nav in" id="side-menu">
                {
                /*
              
                  <li>
                    <Link to="dashboard.home"><i className="fa fa-dashboard fa-fw"></i> &nbsp;Dashboard</Link>
                  </li>
                        
                  <li className={classNames({'active': !this.state.chartsElementsCollapsed})}>
                    <a href="javascript:void(0)" onClick={ () => { this.setState({chartsElementsCollapsed: !this.state.chartsElementsCollapsed}); return false; } }>
                      <i className="fa fa-bar-chart-o fa-fw"></i> &nbsp;Charts<span className="fa arrow"></span>
                    </a>
                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.chartsElementsCollapsed})}>
                      <li>
                        <Link to="dashboard.flot-charts">Flot Charts</Link>
                      </li>
                      <li>
                        <Link to="dashboard.morrisjs-charts">Morris.js Charts</Link>
                      </li>
                    </ul>
                  </li>
              
                  <li> 
                    <Link to="dashboard.tables"><i className="fa fa-table fa-fw"></i> &nbsp;Tables</Link>
                  </li> 
              
                  <li> 
                    <Link to="dashboard.forms"><i className="fa fa-edit fa-fw"></i> Forms</Link> 
                  </li>
                    
                  <li className={classNames({'active': !this.state.uiElementsCollapsed})}> 
                    <a href="javascript:void(0)" onClick={ () => { this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed}); return false; } }><i className="fa fa-edit fa-fw"></i> UI Elements<span className="fa arrow"></span></a> 

                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
                      <li>
                        <Link to="dashboard.panels-wells">Panels and Wells</Link> 
                      </li>
                      <li>
                        <Link to="dashboard.buttons">Buttons</Link> 
                      </li>
                      <li>
                        <Link to="dashboard.notifications">Notifications</Link>
                      </li>
                      <li>
                        <Link to="dashboard.typography">Typography</Link> 
                      </li>
                      <li>
                        <Link to="dashboard.icons"> Icons</Link>
                      </li>
                      <li>
                        <Link to="dashboard.grid">Grid</Link>
                      </li>
                    </ul>
                  </li>
                    
                  <li className={classNames({'active': !this.state.multiLevelDropdownCollapsed})}>
                    <a href="javascript:void(0)" onClick={ () => { this.setState({multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed}); return false; } }>
                      <i className="fa fa-sitemap fa-fw"></i>&nbsp;Multi-Level Dropdown<span className="fa arrow"></span>
                    </a>
                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.multiLevelDropdownCollapsed})}>
                      <li>
                        <a href="javascript:void(0)">Second Level Item</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Second Level Item</a>
                      </li>
                      <li className={classNames({'active': !this.state.thirdLevelDropdownCollapsed})}>
                        <a href="javascript:void(0)" onClick={ () => { this.setState({thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed}); return false; } }>
                          Third Level<span className="fa arrow"></span>
                        </a>
                        <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.thirdLevelDropdownCollapsed})}>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Third Level Item</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> 
                    
                  <li className={classNames({'active': !this.state.samplePagesCollapsed})}>
                    <a href="javascript:void(0)" onClick={ () => { this.setState({samplePagesCollapsed: !this.state.samplePagesCollapsed}); return false; } }>
                      <i className="fa fa-files-o fa-fw"></i>&nbsp;Sample Pages<span className="fa arrow"></span>
                    </a> 
                    <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.samplePagesCollapsed})}>
                      <li>
                        <Link to="dashboard.blank">Blank Page</Link>
                      </li>
                      <li>
                        <Link to="login">Login Page</Link>
                      </li>
                    </ul>
                  </li>
                  
                */
                }
                  <li> 
                    <Link to="dashboard.experiments"><i className="fa fa-edit fa-fw"></i> 预约实验</Link> 
                  </li>
                  <li> 
                    <Link to="dashboard.reserved"><i className="fa fa-edit fa-fw"></i> 已预约实验</Link> 
                  </li>
                  <li> 
                    <Link to="dashboard.completed"><i className="fa fa-edit fa-fw"></i> 已完成实验</Link> 
                  </li>

                </ul>

              </div>
            </div>

          </Navbar>

          <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
            <RouteHandler {...this.props} />
          </div>

        </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
