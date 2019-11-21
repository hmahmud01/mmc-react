import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';

class Navbar extends React.Component {
    render(){
        return(            
            <nav className="navbar navbar-expand-sm navbar-light sticky-top" id="mainNav">
                <div className="container-fluid padding-zero">
                    <a className="navbar-brand">
                        <img src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">

                    <ul className="navbar-nav ml-auto navbar-left">
                        <li className="nav-item">
                            <a className="nav-link" href="job-details.html">
                                <i className="fas fa-plus"></i>CREATE
                            </a>
                        </li>
                        <form className="form-inline">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </ul>

                    <ul className="navbar-nav ml-auto navbar-right">

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Weaver Innovations
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#"><i className="fas fa-hat-wizard"></i>Menu 1</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-hat-wizard"></i>Menu 1</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-hat-wizard"></i>Menu 1</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-hat-wizard"></i>Menu 1</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-hat-wizard"></i>Menu 1</a>
                        </div>
                        </li>

                        <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-bell"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="far fa-smile"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-question-circle"></i></a></li>
                    </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;