import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ps-3 pe-3" style={{ backgroundColor: "#1c1f4a" }}>
            <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} style={{height:40}}></img>
                The Butch Code
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="projectsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Projects
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                    <li><Link className="dropdown-item" to="/projects/e-prescripchain">e-Prescripchain</Link></li>
                    <li><Link className="dropdown-item" to="/projects/traffic-hotspot-detection">ITS Project Traffic Hotspot Detection</Link></li>
                    <li><Link className="dropdown-item" to="/projects/attendance-management">Attendance Management System</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;