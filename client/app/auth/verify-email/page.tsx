import { AuthWrapper, VerifyForm } from "@/components";
import React from "react";

const VerifyEmail = () => {
    return (
        <AuthWrapper
            title="Verify your account"
            subtitle="Enter your verification code"
        >
            <VerifyForm />
        </AuthWrapper>
    );
};

export default VerifyEmail;
