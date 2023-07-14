import {useState} from "react";

const TicketCounter = () => {
    const [count, setCount] = useState(0);
    
    // Function to handle incrementing the count
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    // Function to handle decrementing the count
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
      <div className="ticket-counter">
        <button className="plus-minus" onClick={handleDecrement}>-</button>
        <span className="count">{count}</span>
        <button className="plus-minus"  onClick={handleIncrement}>+</button>
      </div>
    );
  };
  

  export default TicketCounter;