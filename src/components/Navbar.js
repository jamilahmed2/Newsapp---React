import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {

    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-10">
            <div className="container">
                <Link className="navbar-brand" to="/">BandarNews</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/bussiness" aria-current="page">Bussiness <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/entertainment" aria-current="page">Entertainment <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/health" aria-current="page">Health <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/science" aria-current="page">Science <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/sports" aria-current="page">Sports <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/technology" aria-current="page">Technology <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{opacity:"70%",fontWeight:"700"}} href="https://github.com/jamilahmed2" target='_blank' aria-current="page">&copy; by jamilahmed <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-bg-info " style={{fontWeight:"700"}} href="https://github.com/jamilahmed2/Newsapp---React" target='_blank' aria-current="page">GITHUB LINK <span className="visually-hidden">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar 