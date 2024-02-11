import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const SkillNameInput = () => {
    const [skillName, setSkillName] = useState('');
    // const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect to another page and pass skillName as a URL parameter
        // history.push(`/output/${skillName}`);
    };

    const handleChange = (event) => {
        setSkillName(event.target.value);
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
        </div>
      );
};

export default SkillNameInput;