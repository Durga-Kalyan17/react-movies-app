import React, { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import BNavBar from "./BNavBar";
// import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./bookingpage.css";
// import jsPDF from "jspdf";
// import 'jspdf-autotable';

function TicketDetails() {
  // const { user } = useAuth0();
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const qrCodeRef = useRef(null);
  const count = useSelector((state) => state.count);
  const date = useSelector((state) => state.date);
  const time = useSelector((state) => state.time);

  const path = `/booking-page/${id}`;

  const OMDB_URL = process.env.REACT_APP_OMDB_URL;
  const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieResponse = await fetch(`${OMDB_URL}/?i=${id}&apikey=${OMDB_KEY}`);
      const movieData = await movieResponse.json();
      console.log(movieData);
      setMovie(movieData);
    };
    fetchMovieData();
  }, [OMDB_URL, id, OMDB_KEY]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const data = {
    "name": "Guest",
    "movie": movie.Title,
    "showDate": date,
    "showTime": time,
    "noOfseats": count,
  };

  const dataString = JSON.stringify(data);

  return (
    <>
      <BNavBar path={path} />
      <div className="ticket-details">
        {/* Generate the QR Code as an SVG */}
        <QRCode value={dataString} className="qr" ref={qrCodeRef} />
        <div className="ticket">
          <h3>Ticket details</h3>
          <p><strong>Name :</strong> {data.name}</p>
          <p><strong>Movie Name :</strong> {data.movie}</p>
          <p><strong>Date :</strong> {data.showDate}</p>
          <p><strong>Time :</strong> {data.showTime}</p>
          <p><strong>Seats Booked :</strong> {data.noOfseats}</p>
        </div>
      </div>
      {/* <button onClick={generatePDF}>Download PDF</button> */}
    </>
  );
}

export default TicketDetails;