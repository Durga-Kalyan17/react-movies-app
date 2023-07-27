import React from "react";
import DateSelector from "./DatePicker";
import './TicketConfirmPage.css';
import TimeDropdown from "./TimeDropdown";


function CHero() {
    return (
        <div className="date_time">
            <div className="date-select">
                <h2 className="date">
                    Date :
                </h2>
                <DateSelector />
                <h2 className="date">
                    Time :
                </h2>
                <TimeDropdown />
            </div>
            <div>
                <h2 className="shows">
                    Available Show Timings
                </h2>
                <div className="list-container">
                    <ul>
                        <li>
                            Benefit Show
                            <p>
                                <strong>Time : </strong>9:00 AM - 11:00 AM
                            </p>
                        </li>
                        <li>
                            Matniee Show
                            <p>
                                <strong>Time : </strong>12:00 PM - 2:00 PM
                            </p>
                        </li>
                        <li>
                            First Show
                            <p>
                                <strong>Time : </strong>6:00 PM - 8:00 PM
                            </p>
                        </li>
                        <li>
                            Second Show
                            <p>
                                <strong>Time : </strong>9:00 PM - 11:00 PM
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CHero;