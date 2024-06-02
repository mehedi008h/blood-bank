import { AuthWrapper, LoginForm } from "@/components";
import React from "react";

const LoginPage = () => {
    return (
        <AuthWrapper
            footerText="Need an account?"
            footerLinkText="Sign up here"
            footerLink="/auth/login"
        >
            <LoginForm />
        </AuthWrapper>
    );
};

export default LoginPage;
