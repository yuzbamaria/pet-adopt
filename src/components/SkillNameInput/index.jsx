import React, { useState } from 'react';
import { addSkillToUser, userDB } from '../../utils/database'


const SkillNameInput = () => {
    const [skillName, setSkillName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEmptyError, setIsEmptyError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Trim any whitespace from the skillName
        const trimmedSkillName = skillName.trim();
        // Check if the skillName is not empty
        if (trimmedSkillName) {
          // Save the skillName to local storage
          // localStorage.setItem("skillName", JSON.stringify(trimmedSkillName));
          addSkillToUser(trimmedSkillName, userDB.currentUser);

          // Clear the input field after saving
          setSkillName('');
          // Set the submitted state to true
          setIsSubmitted(true);
          // Call the onSubmit callback with the trimmedSkillName
          // onSubmit(trimmedSkillName);
        } else {
          // Show error message if input is empty
          setIsEmptyError(true);
        }
    };

    const handleChange = (event) => {
        setSkillName(event.target.value);
        // Reset the submitted state when the input field changes
        setIsSubmitted(false);
        // Reset empty input error when input changes
        setIsEmptyError(false);
    }; 

    return (
        <div>
          <form onSubmit={handleSubmit}>
            {/* <div>
                <label htmlFor="skillName">Enter Skill Name:</label>
            </div> */}
            <div>
                <input
                type="text"
                id="skillName"
                placeholder="Enter Skill Name"
                value={skillName}
                onChange={handleChange}
                />
                <button className='btn search-btn shadow mx-3 px-4 py-2' type="submit">Save</button>
            </div>
          </form>
          {/* Display error message if input is empty */}
          {isEmptyError && <p className="error-message">Skill name cannot be empty</p>}
          {/* Display a success message if the form is submitted */}
          {isSubmitted && <p>Skill name is saved.</p>}
        </div>
      );
};

export default SkillNameInput;