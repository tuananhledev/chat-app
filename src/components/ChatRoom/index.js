import React from 'react';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';



import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Messager from '../../pages/Messager';
import MessageWindow from '../../components/MessageWindow';


import DefaultLayout from '../../Layouts/DefaultLayout';


export default function ChatRoom() {
    return (

        <Row>
            <DefaultLayout>
                <Col span={5}>
                    <Sidebar />
                </Col>
                <Col span={19}>
                    <ChatWindow />
                </Col>
            </DefaultLayout>
        </Row>
    );
}



// <DefaultLayout>
//             <Row>
//                 <Col span={24}>
//                     <Sidebar />
//                 </Col>
//                 <Col span={16}>
//                     <ChatWindow />
//                 </Col>
//             </Row>
//         </DefaultLayout>