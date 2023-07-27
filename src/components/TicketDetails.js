import React, { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import BNavBar from "./BNavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
// import jsPDF from "jspdf";
import 'jspdf-autotable';

function TicketDetails() {
  const { user } = useAuth0();
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const qrCodeRef = useRef(null);
  const count = useSelector((state) => state.count);
  const date = useSelector((state) => state.date);
  const time = useSelector((state) => state.time);

// const generatePDF = () => {
//     const pdf = new jsPDF({
//       orientation: "landscape",
//       unit: "mm",
//       format: [40, 40]
//     });
  
//     const data = {
//       "Name": user.name,
//       "Movie Name": movie?.Title || "",
//       "Date": date || "",
//       "Time": time || "",
//       "Seats Booked": count || 0
//     };
//     // const data = {
//     //     "Name": "John Doe",
//     //     "Movie Name": "Sample Movie",
//     //     "Date": "2023-07-27",
//     //     "Time": "12:00 PM",
//     //     "Seats Booked": 2
//     //   };
      
//     // Create a table with the ticket details
//     const table = pdf.autoTable({
//       startY: 20, // Start Y position for the table
//       head: [["Field", "Value"]],
//       body: Object.entries(data),
//       theme: 'plain'
//     });
  
//     // Calculate the height of the table
//     const tableHeight = table.autoTable.previous.finalY - table.autoTable.previous.startY;
  
//     // Calculate the available space for the QR code
//     const availableSpace = pdf.internal.pageSize.getHeight() - 40; // 40 is used for QR code and padding
  
//     if (tableHeight + 40 > availableSpace) {
//       // Table height exceeds available space, adjust the startY value to fit the table within the page
//       pdf.autoTable({
//         startY: 10, // You can try other values as well to find the appropriate position
//         head: [["Field", "Value"]],
//         body: Object.entries(data),
//         theme: 'plain'
//       });
//     } else {
//       // Table fits within the available space, use the original startY value
//       pdf.autoTable({
//         startY: 20, // Start Y position for the table
//         head: [["Field", "Value"]],
//         body: Object.entries(data),
//         theme: 'plain'
//       });
//     }
  
//     // Check if the qrCodeRef is valid and contains a valid SVG element
//     if (!qrCodeRef.current || !qrCodeRef.current.children[0] || qrCodeRef.current.children[0].tagName !== "svg") {
//       console.error("QR code element not found or not a valid SVG.");
//       return;
//     }
  
//     // Get the SVG element of the QR code
//     const svgElement = qrCodeRef.current.children[0];
  
//     // Convert the SVG element to a data URL
//     const svgXml = new XMLSerializer().serializeToString(svgElement);
//     const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgXml)}`;
  
//     // Add the QR code image to the PDF
//     pdf.addImage(svgDataUrl, "SVG", 10, 40, 20, 20);
  
//     // Save the PDF
//     pdf.save("Ticket_Details.pdf");
//   };
  
  

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
    "name": user.name,
    "movie": movie.Title,
    "showDate": date,
    "showTime": time,
    "noOfseats": count,
  };

  const dataString = JSON.stringify(data);

  return (
    <div>
      <BNavBar />
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
    </div>
  );
}

export default TicketDetails;