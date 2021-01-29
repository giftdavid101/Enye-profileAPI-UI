import React from 'react';
import './rsidebar.style.css';
import { AiOutlineRightCircle } from 'react-icons/all';

const RSideBar = ({ onNavigationClicked }) => {
    const handleClicked = () => {
        onNavigationClicked('next');
    };
    return (
        <div className={'rsidebar'}>
            <div onClick={handleClicked} className={'rsidebar_rc'}>
                <AiOutlineRightCircle />
            </div>
        </div>
    );
};

export default RSideBar;
