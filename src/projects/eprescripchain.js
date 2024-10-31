

const EPrescripchain = () => {
    return (
        <div className="container my-4">
            <h1 className="display-5">e-Prescripchain: Blockchain-Based E-Prescription System</h1>
            <hr />
            {/* Project Overview */}
            <section className="my-4">
            <h2>Project Overview</h2>
            <p>
                e-Prescripchain is a blockchain-based e-prescription system designed to enhance data security, patient privacy, and fraud prevention in the healthcare industry. By leveraging blockchain technology, this project provides a decentralized, tamper-resistant platform for managing e-prescriptions, ensuring that sensitive medical data remains secure and accurate.
            </p>
            </section>
    
            {/* Video Section */}
            <section className="my-5 ">
            <h2>Project Demo Video</h2>
            <div className="ratio ratio-16x9 border shadow" style={{ maxWidth: '80%', margin: '0 auto', height: '500px' }}>
                <iframe
                    src="https://www.youtube.com/embed/bnfJtbzB0bQ"
                    title="e-Prescripchain Project Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            </section>
    
            {/* Features and Benefits */}
            <section className="my-4">
            <h2>Key Features and Benefits</h2>
            <ul>
                <li>
                <strong>Enhanced Security and Data Integrity:</strong> 
                Blockchain’s decentralized ledger prevents unauthorized access and alterations, safeguarding prescription records from tampering.
                </li>
                <li>
                <strong>Real-Time Verification:</strong> 
                Tracks the prescription lifecycle from creation to dispensing, allowing for transparent and secure verification at every step.
                </li>
                <li>
                <strong>Patient Privacy:</strong> 
                Employs encryption and decentralized storage, ensuring that patient information remains confidential and accessible only to authorized entities.
                </li>
                <li>
                <strong>Prevention of Prescription Fraud:</strong> 
                Utilizes smart contracts to validate prescriptions, reducing the risk of forgery and unauthorized distribution.
                </li>
            </ul>
            </section>
    
            {/* Technologies Used */}
            <section className="my-4">
            <h2>Technologies Used</h2>
            <p>This project leverages a robust tech stack to ensure high performance, security, and scalability:</p>
            <ul>
                <li><strong>Frontend:</strong> React, Bootstrap, QR code generation</li>
                <li><strong>Backend:</strong> Node.js, Express, SQLite3</li>
                <li><strong>Blockchain:</strong> Ethereum, Truffle, Ganache, IPFS for decentralized storage</li>
                <li><strong>Smart Contracts:</strong> Solidity for secure prescription management</li>
            </ul>
            </section>
    
            {/* Development and Testing */}
            <section className="my-4">
            <h2>Development and Testing</h2>
            <p>
                This project was developed using Agile methodologies, with an emphasis on iterative testing and continuous integration. Smart contracts were rigorously tested on Ganache, while system functionality was validated through unit tests and integration tests using Postman. The frontend and backend components were containerized with Docker to ensure consistent deployment and easy scalability.
            </p>
            </section>
    
            {/* Project Outcome */}
            <section className="my-4">
            <h2>Project Outcome</h2>
            <p>
                The successful implementation of e-Prescripchain demonstrates the potential of blockchain technology to revolutionize e-prescription systems by improving data security, transparency, and efficiency in healthcare. This solution provides healthcare providers, pharmacies, and patients with a reliable and fraud-resistant platform for managing prescriptions.
            </p>
            </section>
    
            {/* Links and Resources */}
            <section className="my-4">
            <h2>Links and Resources</h2>
            <p>
                GitHub Repository: <a href="https://github.com/butchdc/ePrescripChain" target="_blank" rel="noopener noreferrer">e-Prescripchain GitHub</a>
            </p>
            </section>
        </div>
    );
}
 
export default EPrescripchain;