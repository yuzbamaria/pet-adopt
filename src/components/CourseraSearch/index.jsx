import React, { useState } from 'react';
import SearchBtn from '../SearchBtn';
import SearchInput from '../SearchInput';

const CourseraSearch = () => {
    const [keyword, setKeyword] = useState('');

    const handleCourseraSearch = () => {
        // Logic to perform Coursera API search with keyword
    };
    
    return (
        <div>
            <div>
                <SearchInput
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter keyword for Coursera search"
                />
            </div>
            <div>
                <SearchBtn label="Search on Coursera" onClick={handleCourseraSearch} />
            </div>
            
        </div>
    );

}

export default CourseraSearch;