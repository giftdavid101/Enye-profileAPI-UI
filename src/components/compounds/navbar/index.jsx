import React, { useState } from 'react';
import { Input, Select } from 'antd';
import './navbar.style.css';

const { Option } = Select;

let executeSearchTimer = null;
const Navbar = ({ setSearchPatientData, filterBy, filterOptions }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSetSelection = (value) => {
        if (!value) {
            filterBy('');
            setSelectedOption('');
        } else setSelectedOption(value);
    };

    const handleSearch = (e) => {
        const { value } = e.target;
        if (value) {
            clearTimeout(executeSearchTimer);
            executeSearchTimer = setTimeout(() => {
                setSearchPatientData(e.target.value.trim());
            }, 1000);
        } else setSearchPatientData(value.trim());
    };

    return (
        <div className={'header container'}>
            <div style={{ width: '40%', margin: 'auto' }}>
                <Input placeholder="Search with name, email, mobile or username ..." onChange={handleSearch} />
            </div>
            <div className={'header__filter-by'}>
                <Select defaultValue={'None'} onChange={handleSetSelection}>
                    <Option value={''}>None</Option>
                    {[
                        { label: 'Gender', value: 'genders' },
                        {
                            label: 'Payment Method',
                            value: 'paymentMethods',
                        },
                        { label: 'Credit Card Type', value: 'cardTypes' },
                    ].map((el, i) => (
                        <Option key={i} value={el.value}>
                            {el.label}
                        </Option>
                    ))}
                </Select>
                {selectedOption && (
                    <Select onChange={filterBy} defaultValue={''}>
                        {filterOptions[selectedOption].map((el, i) => (
                            <Option key={i} value={el}>
                                {el}
                            </Option>
                        ))}
                    </Select>
                )}
            </div>
        </div>
    );
};

export default Navbar;
