import { AuthSidebar } from "@/components";
import { Carousel } from "antd";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen grid grid-cols-12 bg-neutral-100  dark:bg-[#1C1F25]">
            {/* form section  */}
            <div className="xl:col-span-4 lg:col-span-4 col-span-12">
                <AuthSidebar />
            </div>

            {/* Carousel section  */}
            <div className="col-span-8 w-full xl:block lg:block hidden">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
