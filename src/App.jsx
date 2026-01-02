import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recipes from './pages/Recipes';
import Calculator from './pages/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/Student-Recipe-and-Nutrition-Platform">
<Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <footer style={{ backgroundColor: '#5D4037', color: '#FFF8E1', padding: '40px 0', marginTop: '50px' }}>
        <div className="container text-center">
          <h6>Bells University of Technology</h6>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Student Recipe & Nutrition Platform • ICT 235 Project</p>
          <hr style={{ borderColor: '#8D6E63', width: '50%', margin: '20px auto' }} />
          {/* <p className="fw-bold mb-0">Developed by: </p>
          <p style={{ fontSize: '0.7rem' }}>Matric No: </p> */}
        </div>
      </footer>
    </Router>
  );
}

export default App;