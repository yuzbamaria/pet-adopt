import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addStartDate, addFinishDate, currentUser } from "../../utils/database";

const Calendar = ({}) => {
    
        const startDateRef = useRef(null);
        const finishDateRef = useRef(null);  

        const [startDate, setStartDate] = useState(new Date());
        const [finishDate, setFinishDate] = useState(new Date());

        const handleStartDateChange = (date) => {
            setStartDate(date);
            addStartDate(currentUser, date);
            const formattedStartDate = date.toLocaleDateString();
            localStorage.setItem("startDate", formattedStartDate);
        };

        const handleFinishDateChange = (date) => {
            setFinishDate(date);
            addFinishDate(currentUser, date);
            // addFinishDate(currentUser, date);
            const formattedFinishDate = date.toLocaleDateString();
            localStorage.setItem("finishDate", formattedFinishDate);
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