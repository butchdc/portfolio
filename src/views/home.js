import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <section id="home" className="my-4">
                <h1 className="display-4 text-center mb-4">Welcome to My Portfolio</h1>
                <hr />
                <p className="lead mx-auto">
                    I'm <strong>Butch Dela Cruz</strong>, a <strong>software engineer</strong> passionate about crafting 
                    <span style={{ color: '#ff6f61' }}> innovative, technology-driven solutions</span> that make a real impact. 
                    With a strong foundation in <strong>software development</strong> and a dedication to <strong>cutting-edge projects</strong>, 
                    I bring ideas to life through efficient, scalable, and user-focused applications.
                </p>
                <p className="lead mx-auto">
                    Whether it's optimizing processes, designing intuitive interfaces, or exploring new technologies, 
                    I’m driven by the challenge of creating <span style={{ color: '#4c98d4' }}>meaningful solutions </span> 
                    that advance both <strong>business</strong> and <strong>user experiences</strong>.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="my-4">
                <h2>Building Solutions, One Project at a Time</h2>
                <div className="row gy-2">
                    {/* e-Prescripchain Project */}
                    <div className="col-md-6">
                        <div className="card mb-4 h-90 p-3 shadow">
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
                        <div className="card mb-4 h-90 p-3 shadow">
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
                        <div className="card mb-4 h-90 p-3 shadow">
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