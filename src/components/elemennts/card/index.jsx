import React from 'react';
import './card.style.css';
import { AiOutlineCreditCard, AiOutlineMail, FaUserCircle } from 'react-icons/all';

import { Typography } from 'antd';

const { Text, Title } = Typography;

const PatientCard = ({

                         creditcardtype,
                         firstName,
                         lastName,
                         gender,
                         email,
                         userName,
                         phonenumber,
                     }) => {
    return (
        <div className={'card'}>
            {/*<Title level={4}>NAME</Title>*/}

            <div>
                <div style={{ fontSize: '30px', color: 'grey', padding: '5px' }}>
                    <FaUserCircle />
                </div>
                <span style={{ fontSize: '20px' }}>
                    {firstName} {lastName}
                </span>
            </div>
            <div className={'card_content'}>
                <div>
                    <Title level={5}>UserName</Title>
                    <Text>{userName}</Text>
                    <Title level={5}> Gender: </Title>
                    <Text>{gender}</Text>
                </div>
                <div>
                    <Title level={5}>
                        {' '}
                        <AiOutlineMail />
                    </Title>
                    <Text>{email}</Text>
                    <Title level={5}>
                        {' '}
                        <AiOutlineMail />
                    </Title>
                    <Text>{phonenumber}</Text>
                    <Title level={5}>
                        {' '}
                        <AiOutlineCreditCard />
                    </Title>
                    <Text>{creditcardtype}</Text>
                </div>
            </div>
        </div>
    );
};

export default PatientCard;
