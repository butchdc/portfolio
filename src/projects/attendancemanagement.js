const AttendanceManagement = () => {
    return (
        <div className="container my-4">
            <h1 className="display-5">Attendance Management System</h1>
            <hr />
            {/* Project Overview */}
            <section className="my-4">
            <h2>Project Overview</h2>
            <p>
                The Attendance Management System is designed to replace traditional manual attendance tracking in educational institutions with a more efficient, digital solution. This system streamlines the recording and management of attendance, benefiting administrators, teachers, and students by providing easy access to accurate attendance records.
            </p>
            </section>
    
            {/* Video Demo */}
            <section className="my-4">
            <h2>Project Demo Video</h2>
            <div className="ratio ratio-16x9 border shadow" style={{ maxWidth: '80%', margin: '0 auto', height: '500px' }}>
                <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/Hc8SJQ-aPtI"
                title="Attendance Management System Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </section>
    
            {/* Key Features */}
            <section className="my-4">
            <h2>Key Features</h2>
            <ul>
                <li>
                <strong>Automated Attendance Tracking:</strong> Reduces errors and ensures accurate data management.
                </li>
                <li>
                <strong>Role-Based Access Control:</strong> Provides different functionalities for administrators, teachers, and students.
                </li>
                <li>
                <strong>Data Management Tools:</strong> Allows administrators to manage institutions, courses, student data, and attendance records.
                </li>
                <li>
                <strong>User-Friendly Interface:</strong> Offers intuitive design and easy navigation, enhancing the user experience.
                </li>
            </ul>
            </section>
    
            {/* Technologies Used */}
            <section className="my-4">
            <h2>Technologies Used</h2>
            <p>The project incorporates a combination of front-end and back-end technologies, tools, and frameworks to create a scalable solution:</p>
            <ul>
                <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, React</li>
                <li><strong>Backend Development:</strong> PHP with Symfony, Twig for templating</li>
                <li><strong>Database:</strong> PostgreSQL</li>
                <li><strong>Version Control:</strong> Git and GitHub for collaborative coding</li>
                <li><strong>Project Management:</strong> Azure DevOps for sprint planning, task tracking, and bug management</li>
                <li><strong>Containerization:</strong> Docker for streamlined environment setup and deployment</li>
            </ul>
            </section>
    
            {/* Development Process */}
            <section className="my-4">
            <h2>Development Process</h2>
            <p>
                This project followed Agile principles, with weekly sprints and the use of Azure DevOps to manage tasks and track progress. Each sprint focused on a particular phase, from gathering requirements to system deployment, with specific tasks allocated to frontend and backend developers.
            </p>
            <p>As the Front-End Developer, I focused on building responsive, user-friendly interfaces to ensure a seamless user experience for all roles within the system.</p>
            </section>
    
            {/* Challenges and Solutions */}
            <section className="my-4">
            <h2>Challenges and Solutions</h2>
            <ul>
                <li>
                <strong>Collaboration between Frontend and Backend:</strong> Established clear communication channels and utilized GitHub for version control to keep work aligned and prevent conflicts.
                </li>
                <li>
                <strong>Dependency Management:</strong> Used mock APIs to allow frontend development to progress while waiting for backend implementations.
                </li>
                <li>
                <strong>Development Environment Setup:</strong> Leveraged Docker to ensure a consistent environment for all team members, streamlining testing and deployment.
                </li>
            </ul>
            </section>
    
            {/* Project Outcome */}
            <section className="my-4">
            <h2>Project Outcome</h2>
            <p>
                The Attendance Management System successfully provides a digital platform for attendance tracking, enhancing accuracy and efficiency within educational institutions. It allows administrators to manage institutional data, teachers to record attendance, and students to view their records, all within a user-friendly interface.
            </p>
            </section>
    
            {/* Links and Resources */}
            <section className="my-4">
            <h2>Links and Resources</h2>
            <p>
                GitHub Repository: <a href="https://github.com/butchdc/attendance-management" target="_blank" rel="noopener noreferrer">Attendance Management System GitHub</a>
            </p>
            </section>
        </div>
    );
}
 
export default AttendanceManagement;