var React = require('react');
var Modal = require('react-bootstrap').Modal;
var NavUserButtonIndex = require('./navBarComponents/navUserButtonIndex.jsx');

var NavBar = React.createClass({
  getInitialState: function() {
    return ({
      showModal: false
    });
  },

  render: function() {
    var navBar1 = (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="#">ThePathLessTraveled</a>
            <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapsed"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                    >
              <span className="sr-only">Toggle nagivation</span>
              <span className="icon-bar">test</span>
              <span className="icon-bar">test</span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse">

          </div>
        </div>
      </nav>
    );
    var navBar2 = (
      <nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar"
                    >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img alt="ThePathLessTraveled" src="/assets/logo/ThePathLessTraveled_logo_3.png" />
            </a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
                <li><a href="#">ThePathLessTraveled</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a>
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li onClick={this.open}>
                <a>
                  <span className="glyphicon glyphicon-log-in" />  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    var signUp = (
      <li>
        <a href="" />
      </li>
    );
    var logIn = (
      <li>

      </li>
    );
    return(
        <nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#navbar"
                      >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              // <a className="navbar-brand" href="#">
              //   <img alt="ThePathLessTraveled" src="/assets/logo/ThePathLessTraveled_logo_3.png" />
              // </a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                  <li>
                    <a
                      href="#">
                      ThePathLessTraveled
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/ssaekoo/ThePathLessTraveled">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/ssaekoo">
                      LinkedIn
                    </a>
                  </li>
              </ul>
              // <NavUserButtonIndex history={this.props.history}/>
            </div>
          </div>
        </nav>
    );
  }
});

module.exports = NavBar;
