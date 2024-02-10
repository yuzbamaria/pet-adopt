import React from 'react';

const SearchBtn = ({ label, onClick}) => {
    return (
        <button className='btn btn-primary shadow m-2' onClick={onClick}>
            {/* {label} */}
            Coursera search
        </button>
    );
}

export default SearchBtn;