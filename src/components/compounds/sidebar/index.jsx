import React from 'react';
import { BsSearch } from 'react-icons/all';
import './sidebar.style.css';
import { AiOutlineLeftCircle } from 'react-icons/all';

const Sidebar = ({ onNavigationClicked }) => {
    const handleClick = () => {
        onNavigationClicked('prev');
    };
    return (
        <div className={'sidebar'}>
            <div onClick={handleClick} className={'sidebar_lc'}>
                <AiOutlineLeftCircle />
            </div>
        </div>
    );
};

export default Sidebar;
