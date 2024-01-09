import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/service';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
    const handleLogin = async (provider) => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
        }
    };

    const pageStyle = {
        backgroundColor: '#EEEEEE', // Đặt màu nền trang web
        height: '100vh', // Đặt chiều cao của trang
    };


    return (
        <div style={pageStyle}>
            <div style={{ textAlign: 'center' }}>
                <Row justify='center'>
                    <Col span={12} style={{ marginTop: '100px', }}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png'
                            alt='' style={{ width: '50px', height: '50px' }} />
                        <Title style={{ textAlign: 'center', fontWeight: 800 }} level={3}>
                            Welcome to Messenger
                        </Title>
                        <Title style={{ textAlign: 'center', color: '#AAAAAA' }} level={5}>
                            The simple way to text, call and video chat right from your desktop.
                        </Title>
                        <Button
                            style={{ width: '50%', marginTop: '50px', backgroundColor: '#0b5692', color: '#fff' }}
                            onClick={() => handleLogin(fbProvider)}
                        >
                            Log in with Facebook
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
