import './components/bookingpage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking-page" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
