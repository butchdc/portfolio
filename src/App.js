import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './views/navbar';
import Home from './views/home';
import About from './views/about';
import EPrescripchain from './views/projects/eprescripchain';
import TrafficHotspotDetection from './views/projects/traffichotspotdetection';
import AttendanceManagement from './views/projects/attendancemanagement';

function App() {
  return (
    // <Router basename='/my-portfolio'>
    <Router>
      <div className="container-fluid p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/e-prescripchain" element={<EPrescripchain />} />
          <Route path="/projects/traffic-hotspot-detection" element={<TrafficHotspotDetection />} />
          <Route path="/projects/attendance-management" element={<AttendanceManagement />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
