import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import CBookingPage from './components/CBookingPage';
import SearchResults from './components/SearchResults';
import TicketDetails from "./components/TicketDetails";
import DeniedPage from "./components/DeniedPage";
import UpComingMovies from './components/UpComingMovies';
import LatestMovies from "./components/LatestMovies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-movies" element={<UpComingMovies />} />
        <Route path="/latest-movies" element={<LatestMovies />} />
        <Route path="/search-results/:title" element={<SearchResults />} />
        <Route path="/booking-page/:id" element={<BookingPage />} />
        <Route path="/booking-confirm-page/:id" element={<CBookingPage />} />
        <Route path="/denied-page/:id" element={<DeniedPage />} />
        <Route path="/ticket-details/:id" element={<TicketDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
