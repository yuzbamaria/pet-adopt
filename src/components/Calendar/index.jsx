import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addStartDate, addFinishDate, userDB } from "../../utils/database";

const Calendar = () => {
    
        const startDateRef = useRef(null);
        const finishDateRef = useRef(null);  

        const [startDate, setStartDate] = useState(new Date());
        const [finishDate, setFinishDate] = useState(new Date());

        const handleStartDateChange = (date) => {
            setStartDate(date);
            date = date.toLocaleDateString();
            // addStartDate(date);
            addStartDate(date, userDB.currentUser);

        };

        const handleFinishDateChange = (date) => {
            setFinishDate(date);
            date = date.toLocaleDateString()
            // addFinishDate(userDB.currentUser, date);
            // localStorage.setItem("finishDate", date);
            addFinishDate(date, userDB.currentUser);
        };
    
    return (
        <div>
            <div>
                <label htmlFor="start">Start Date</label>
            </div>
            <div>
                <DatePicker
                    id="start"
                    selected={startDate}
                    onChange={handleStartDateChange}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    dateFormat="dd/MM/yyyy"
                    ref={startDateRef}
                />
            </div>

            <div>
                <label htmlFor="finish">Finish Date:</label>
            </div>
            <div>
                <DatePicker
                    id="finish"
                    selected={finishDate}
                    onChange={handleFinishDateChange}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    dateFormat="dd/MM/yyyy"
                    ref={finishDateRef}
                />
            </div>
        </div>
    );
}

export default Calendar;