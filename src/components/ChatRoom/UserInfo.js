import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';

import { auth } from '../../firebase/config';
import { AuthContext } from '../../Context/AuthProvider';
import { AppContext } from '../../Context/AppProvider';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #CCCCCC;

  .username {
    color: black;
    margin-left: 5px;
    font-weight:700;
    font-size:15px;
  }
`;

export default function UserInfo() {
    const {
        user: { displayName, photoURL },
    } = React.useContext(AuthContext);
    const { clearState } = React.useContext(AppContext);

    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Typography.Text className='username'>{displayName}</Typography.Text>
            </div>
            <Button
                ghost
                onClick={() => {
                    // clear state in App Provider when logout
                    clearState();
                    auth.signOut();
                }}
                style={{ color: "#fff", backgroundColor: 'blue' }}
            >
                Đăng xuất
            </Button>
        </WrapperStyled>
    );
}
