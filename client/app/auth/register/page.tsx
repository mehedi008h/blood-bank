import { AuthWrapper, RegisterForm } from "@/components";
import React from "react";

const RegisterPage = () => {
    return (
        <AuthWrapper
            title="Create new account"
            subtitle="Provide your information to create a new account"
            socialLogin
        >
            <RegisterForm />
        </AuthWrapper>
    );
};

export default RegisterPage;
