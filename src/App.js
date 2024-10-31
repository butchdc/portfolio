import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './views/navbar';
import Home from './views/home';
import About from './views/about';
import EPrescripchain from './projects/eprescripchain';
import TrafficHotspotDetection from './projects/traffichotspotdetection';
import AttendanceManagement from './projects/attendancemanagement';
import Footer from './views/footer';

function App() {
  return (
    <Router>
      {/* Set id="top" for Back to Top link */}
      <div id="top" className="main-content container-fluid p-0" style={{ color: '#2D2F7A' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/e-prescripchain" element={<EPrescripchain />} />
          <Route path="/projects/traffic-hotspot-detection" element={<TrafficHotspotDetection />} />
          <Route path="/projects/attendance-management" element={<AttendanceManagement />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <hr />
        <hr />

      </div>
    </Router>
  );
}

export default App;
