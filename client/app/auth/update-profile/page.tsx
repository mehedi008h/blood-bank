import { AuthWrapper, UpdateProfileForm } from "@/components";
import React from "react";

const UpdateProfilePage = () => {
    return (
        <AuthWrapper
            title="Update your account"
            subtitle="Enter your information to update your profile"
        >
            <UpdateProfileForm />
        </AuthWrapper>
    );
};

export default UpdateProfilePage;
