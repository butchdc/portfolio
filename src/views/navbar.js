import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ps-3 pe-3" style={{ backgroundColor: "#2e3d49" }}>
            <div className="container-fluid">
            <Link className="navbar-brand d-flex navbar-dark align-items-center" to="/">
                <img className="pe-2" src={`${process.env.PUBLIC_URL}/images/logowhite.png`} alt='' style={{height:40, color:""}}></img>
                <span className='h3 m-0 p-0'>Butch DC</span>
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
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className="bi bi-house-door pe-1"></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about"><i className="bi bi-person-circle pe-1"></i>About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="projectsDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i className="bi bi-folder pe-1"></i>Projects
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                        <li><Link className="dropdown-item" to="/projects/e-prescripchain">e-Prescripchain</Link></li>
                        <li><Link className="dropdown-item" to="/projects/traffic-hotspot-detection">ITS Project Traffic Hotspot Detection</Link></li>
                        <li><Link className="dropdown-item" to="/projects/attendance-management">Attendance Management System</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;