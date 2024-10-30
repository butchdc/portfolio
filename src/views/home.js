import { Link } from "react-router-dom";

const Home = () => {
    return (

        <div className="container mt-5">
        {/* Hero Section */}
        <section id="home" className="text-center my-5">
            <h1>Welcome to My Portfolio</h1>
            <p className="lead">I'm Butch Dela Cruz, a software engineer with a passion for innovative solutions and technology-driven projects.</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-5">
            <h2>My Projects</h2>
            <div className="row gy-4">
                {/* e-Prescripchain Project */}
                <div className="col-md-6">
                    <div className="card mb-4 h-100 p-3">
                    <div className="card-body">
                        <h5 className="card-title mb-3">e-Prescripchain: Blockchain-Based E-Prescription System</h5>
                        <p className="card-text mb-4">
                        A secure e-prescription system that leverages blockchain technology to enhance data security, ensure patient privacy, and prevent prescription fraud. e-Prescripchain enables real-time verification and tamper-proof records, improving the overall reliability and transparency of electronic prescriptions in healthcare.
                        </p>
                        <Link className="btn btn-outline-primary" to="/projects/e-prescripchain">Learn More</Link>
                    </div>
                    </div>
                </div>

                {/* Traffic Hotspot Detection Project */}
                <div className="col-md-6">
                    <div className="card mb-4 h-100 p-3">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Traffic Hotspot Detection Using K-Means and GMM Clustering</h5>
                        <p className="card-text mb-4">
                        This project analyzes traffic data from Auckland to identify congestion hotspots using advanced machine learning techniques like K-Means and Gaussian Mixture Models (GMM). By clustering traffic patterns, it aids city planners in understanding peak congestion points, optimizing urban planning, and improving transportation efficiency.
                        </p>
                        <Link className="btn btn-outline-primary" to="/projects/traffic-hotspot-detection">Learn More</Link>
                    </div>
                    </div>
                </div>

                {/* Attendance Management System Project */}
                <div className="col-md-6">
                    <div className="card mb-4 h-100 p-3">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Attendance Management System</h5>
                        <p className="card-text mb-4">
                        This group project involved creating a digital Attendance Management System for educational institutions. As the Front-End Developer, I focused on building intuitive, responsive user interfaces for administrators, teachers, and students, ensuring a user-friendly experience in managing attendance records efficiently.
                        </p>
                        <Link className="btn btn-outline-primary" to="/projects/attendance-management">Learn More</Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

    );
}
 
export default Home;