import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="">{props.aboutText}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">{props.aboutText}</a>
            </li>
          </ul>
        </div>

        {/* Radio Buttons for Theme Selection */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            onClick={() => props.changeTheme('green')}
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="exampleRadios1">
            Green
          </label>
        </div>
        <div className="form-check mx-2">
          <input
            className="form-check-input"
            type="radio"
            onClick={() => props.changeTheme('red')}
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="exampleRadios2">
            Red
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            onClick={() => props.changeTheme('orange')}
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
          />
          <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="exampleRadios3">
            Orange
          </label>
        </div>

        {/* Dark Mode Toggle */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-4`}>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set Title here',
  aboutText: 'About Text here',
};
