import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import 'antd/dist/antd.css';
import PatientCard from './components/elemennts/card';
import Sidebar from './components/compounds/sidebar';
import { resolveFilterOptions } from './helpers/resolveFiltersOptions';
import Navbar from './components/compounds/navbar';
import RSideBar from './components/compounds/RightSideBar';
import { changePage, paginator } from './helpers/paginator';

function App() {
    const [patientData, setPatientData] = useState({
        profiles: [],
        filtering: [],
        pagination: {
            totalPages: 1,
            start: 0,
            next: 0,
            prev: 0,
        },
    });
    const [siteLoading, setSiteLoading] = useState(false);

    const [filterOptions, setFilterOptions] = useState({ paymentMethods: [], genders: [], cardTypes: [] });
    const [searchPatientData, setSearchPatientData] = useState('');

    const onNavigationClicked = (action) => {
        changePage(
            action,
            patientData.pagination,
            ({ pagination }) => {
                setPatientData({ ...patientData, pagination });
            },
            ({ pagination }) => {
                setPatientData({ ...patientData, pagination });
            }
        );
    };

    const requestProfiles = () => {
        setSiteLoading(true);
        Axios.get(`https://api.enye.tech/v1/challenge/records`)
            .then((res) => {
                console.log(res);
                const { data, status } = res;
                const {
                    records: { profiles },
                    size,
                } = data;

                if (status === 200) {
                    const { pagination } = paginator(size);
                    setPatientData({ ...patientData, profiles, pagination });
                    setFilterOptions(resolveFilterOptions(profiles));
                }
                setSiteLoading(false);
            })
            .catch((err) => {
                setSiteLoading(false);
                console.log(err);
            });
    };
    console.log(patientData);
    // console.log(filterOptions)

    useEffect(() => {
        requestProfiles();
        //eslint-disable-next-line
    }, []);

    const filterPatientData = (searchPatientData) => {
        // toggle search based on filter active.
        let filter = patientData.filtering.length ? 'filtering' : 'profiles';

        return patientData[filter].filter(
            (el) =>
                el.FirstName.toLowerCase().includes(searchPatientData.toLowerCase()) ||
                el.LastName.toLowerCase().includes(searchPatientData.toLowerCase()) ||
                (el.FirstName.toLowerCase() + ' ' + el.LastName.toLowerCase()).includes(
                    searchPatientData.toLowerCase()
                ) ||
                el?.Email.toLowerCase().includes(searchPatientData.toLowerCase()) ||
                el?.UserName.toLowerCase().includes(searchPatientData.toLowerCase()) ||
                el?.PhoneNumber.toLowerCase().includes(searchPatientData.toLowerCase())
        );
    };

    const filterBy = (filterWith) => {
        const res = patientData.profiles.filter(
            (el) =>
                el?.Gender.toLowerCase() === filterWith.toLowerCase() ||
                el?.PaymentMethod.toLowerCase() === filterWith.toLowerCase() ||
                el?.CreditCardType.toLowerCase() === filterWith.toLowerCase()
        );
        setPatientData({ ...patientData, filtering: res });
    };

    return (
        <div className="App container">
            <Navbar setSearchPatientData={setSearchPatientData} filterBy={filterBy} filterOptions={filterOptions} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Sidebar onNavigationClicked={onNavigationClicked} />
                <div className={'dashboard'}>
                    {siteLoading ? (
                        <div>loading...</div>
                    ) : searchPatientData ? (
                        filterPatientData(searchPatientData).length ? (
                            filterPatientData(searchPatientData).map((el) => (
                                <PatientCard
                                    style={{ textAlign: 'center' }}
                                    key={el.UserName}
                                    firstName={el.FirstName}
                                    lastName={el.LastName}
                                    gender={el.Gender}
                                    latitude={el.Latitude}
                                    longitude={el.Longitude}
                                    creditcardnumber={el.CreditCardNumber}
                                    creditcardtype={el.CreditCardType}
                                    email={el.Email}
                                    domainname={el.DomainName}
                                    phonenumber={el.PhoneNumber}
                                    macaddress={el.MacAddress}
                                    url={el.URL}
                                    userName={el.UserName}
                                    lastlogin={el.LastLogin}
                                    paymentMethod={el.PaymentMethod}
                                />
                            ))
                        ) : (
                            <div>No Result</div>
                        )
                    ) : patientData.filtering.length ? (
                        patientData.filtering
                            .slice(patientData.pagination.start, patientData.pagination.start + 20)
                            .map((el) => (
                                <PatientCard
                                    style={{ textAlign: 'center' }}
                                    key={el.UserName}
                                    firstName={el.FirstName}
                                    lastName={el.LastName}
                                    gender={el.Gender}
                                    latitude={el.Latitude}
                                    longitude={el.Longitude}
                                    creditcardnumber={el.CreditCardNumber}
                                    creditcardtype={el.CreditCardType}
                                    email={el.Email}
                                    domainname={el.DomainName}
                                    phonenumber={el.PhoneNumber}
                                    macaddress={el.MacAddress}
                                    url={el.URL}
                                    userName={el.UserName}
                                    lastlogin={el.LastLogin}
                                    paymentMethod={el.PaymentMethod}
                                />
                            ))
                    ) : patientData.profiles.length ? (
                        patientData.profiles
                            .slice(patientData.pagination.start, patientData.pagination.start + 20)
                            .map((el) => (
                                <PatientCard
                                    style={{ textAlign: 'center' }}
                                    key={el.UserName}
                                    firstName={el.FirstName}
                                    lastName={el.LastName}
                                    gender={el.Gender}
                                    latitude={el.Latitude}
                                    longitude={el.Longitude}
                                    creditcardnumber={el.CreditCardNumber}
                                    creditcardtype={el.CreditCardType}
                                    email={el.Email}
                                    domainname={el.DomainName}
                                    phonenumber={el.PhoneNumber}
                                    macaddress={el.MacAddress}
                                    url={el.URL}
                                    userName={el.UserName}
                                    lastlogin={el.LastLogin}
                                    paymentMethod={el.PaymentMethod}
                                />
                            ))
                    ) : (
                        <div>No Result</div>
                    )}
                </div>

                <RSideBar onNavigationClicked={onNavigationClicked} />
            </div>
        </div>
    );
}

export default App;
