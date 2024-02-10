import React from 'react';

const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <input 
            type="text" 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default SearchInput;