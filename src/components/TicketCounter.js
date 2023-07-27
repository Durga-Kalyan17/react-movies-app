// TicketCounter.js

import React from "react";
// import useTicketCounter from "./useTicketCounterHook";
import "./TicketConfirmPage.css";
// import TicketDetails from "./TicketDetails";
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from './actions';

const TicketCounter = () => {
  // const { count, handleIncrement, handleDecrement } = useTicketCounter();
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  return (
    <>
      <div className="ticket-counter">
        <button className="plus-minus" onClick={handleDecrement}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="plus-minus" onClick={handleIncrement}>
          +
        </button>
      </div>
    </>
  );
};

export default TicketCounter;











// import { useState } from "react";
// import './TicketConfirmPage.css'
// import TicketDetails from "./TicketDetails"

// const TicketCounter = () => {
//   const [count, setCount] = useState(0);

//   // Function to handle incrementing the count
//   const handleIncrement = () => {
//     setCount(count + 1);

//     // <TicketDetails seatsBooked={count} />
//   };

//   // Function to handle decrementing the count
//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);

//       // <TicketDetails seatsBooked={count} />
//     }
//   };

//   console.log("count - " + count);
//   <TicketDetails seatsBooked={count} />

//   return (
//       <div className="ticket-counter">
//         <button className="plus-minus" onClick={handleDecrement}>-</button>
//         <span className="count">{count}</span>
//         {/* <Ref seatsBooked={count} /> */}
//         <button className="plus-minus" onClick={handleIncrement}>+</button>
//       </div>
//   );
// };


// export default TicketCounter;