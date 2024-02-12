import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const SkillNameInput = () => {
    const [skillName, setSkillName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect to another page and pass skillName as a URL parameter
        // history.push(`/output/${skillName}`);
        // Save the skillName to local storage
        localStorage.setItem("skillName", JSON.stringify(skillName));
        // Clear the input field after saving
        setSkillName('');
        // Set the submitted state to true
        setIsSubmitted(true);
    };

    const handleChange = (event) => {
        setSkillName(event.target.value);
        // Reset the submitted state when the input field changes
        setIsSubmitted(false);
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
                <button className='btn btn-primary shadow m-2' type="submit">Submit</button>
            </div>
          </form>
          {/* Display a success message if the form is submitted */}
          {isSubmitted && <p>Skill name is saved.</p>}
        </div>
      );
};

export default SkillNameInput;