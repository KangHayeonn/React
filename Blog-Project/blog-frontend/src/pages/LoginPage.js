import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

// 로그인

const LoginPage = () => {
    return (
        <div>
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        </div>
    );
};

export default LoginPage;