import React from 'react';
import './input.style.css';

const Input = ({ setSearchPatientData }) => {
    return (
        <div className={'inp'}>
            <input placeholder={'search'} onChange={(e) => setSearchPatientData(e.target.value)} />
        </div>
    );
};

export default Input;
