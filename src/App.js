import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import CBookingPage from './components/CBookingPage';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results/:title" element={<SearchResults />} />
        <Route path="/booking-page/:id" element={<BookingPage />} />
        <Route path="/booking-confirm-page/:id" element={<CBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
