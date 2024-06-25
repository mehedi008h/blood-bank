import React from "react";
import { Avatar, Divider } from "antd";
import {
    FacebookFilled,
    GithubFilled,
    GoogleCircleFilled,
} from "@ant-design/icons";

interface Props {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    socialLogin?: boolean;
}

const AuthWrapper = ({
    children,
    title,
    subtitle,
    socialLogin = false,
}: Props) => {
    return (
        <div className="w-full min-h-screen p-5 flex flex-col justify-center items-center">
            <div className="xl:w-[500px] lg:w-[400px] md:w-[400px] w-full px-2 mx-auto">
                {/* heading  */}
                <h3 className="text-3xl font-semibold text-neutral-700 dark:text-neutral-200 text-center">
                    {title}
                </h3>
                <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300 mt-2 mb-5 text-center ">
                    {subtitle}
                </p>

                {children}

                {/* social media login  */}
                {socialLogin && (
                    <>
                        {/* divider  */}
                        <Divider className="dark:border-neutral-400">
                            <p className="dark:text-neutral-400">OR</p>
                        </Divider>
                        <div className="flex justify-center items-center gap-4">
                            <Avatar
                                size={40}
                                icon={<GoogleCircleFilled />}
                                className="text-[#BD3032] bg-neutral-300 hover:bg-neutral-300 dark:bg-neutral-500 dark:hover:bg-neutral-600 cursor-pointer transition-all"
                            />
                            <Avatar
                                size={40}
                                icon={<FacebookFilled />}
                                className="text-[#1877F2] bg-neutral-300 hover:bg-neutral-300 dark:bg-neutral-500 dark:hover:bg-neutral-600 cursor-pointer transition-all"
                            />
                            <Avatar
                                size={40}
                                icon={<GithubFilled />}
                                className="text-black bg-neutral-300 hover:bg-neutral-300 dark:bg-neutral-500 dark:hover:bg-neutral-600 cursor-pointer transition-all"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthWrapper;
