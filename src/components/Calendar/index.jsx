import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { addStartDate } from '../../utils/database'

const Calendar = () => {
    
        // const [startDate, setStartDate] = useState('');
        // const [finishDate, setFinishDate] =  useState('');

        // // takes an event object as its argument. This event object represents the change event 
        // // that occurs when the value of an input field changes.
        // // setStartDate is called with event.target.value. This updates the state variable startDate 
        // // with the new value entered into the input field. event.target.value contains the new value 
        // // of the input field that triggered the change event.
        // const handleStartDateChange = (event) => {
        //     setStartDate(event.target.value);
        // };
        // const handleFinishDateChange = (event) => {
        //     setFinishDate(event.target.value);
        // };
        const [startDate, setStartDate] = useState(new Date());
        const [finishDate, setFinishDate] = useState(new Date());

        const handleStartDateChange = (date) => {
            date = date.toLocaleDateString();
            setStartDate(date);
            // addStartDate(date);
            // const formattedStartDate = date;
            localStorage.setItem("startDate", date);
        };
        
        const handleFinishDateChange = (date) => {
            date = date.toLocaleDateString();
            setFinishDate(date);
            // const formattedFinishDate = date;
            localStorage.setItem("finishDate", date);
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
                />
            </div>
        </div>
    );
}

export default Calendar;