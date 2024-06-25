"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiDonateBlood, BiUser } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import ThemeSwitcher from "../common/ThemeSwitcher";
import { Steps } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { FaRegCircleUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const AuthSidebar = () => {
    const [current, setCurrent] = useState(0);

    const router = useRouter();

    const onChange = (value: number) => {
        console.log("onChange:", value);
        setCurrent(value);
    };

    return (
        <div className="h-screen w-full flex flex-col justify-between bg-neutral-200 dark:bg-[#171a1e] p-10">
            <header>
                {/* logo  */}
                <Link href={"/"} className="flex items-end gap-2">
                    <BiDonateBlood size={40} color="red" />
                    <h2 className="text-2xl font-semibold">Blood Bank</h2>
                </Link>

                {/* body  */}
                <div className="mt-12">
                    <Steps
                        current={current}
                        onChange={onChange}
                        direction="vertical"
                        items={[
                            {
                                title: (
                                    <h2 className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                        Create new account
                                    </h2>
                                ),
                                description: (
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        Provide your information to create a new
                                        account
                                    </p>
                                ),
                                icon: (
                                    <UserOutlined className="!text-neutral-400" />
                                ),
                                onClick: () => router.push("/auth/register"),
                            },
                            {
                                title: (
                                    <h2 className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                        Verify your account
                                    </h2>
                                ),
                                description: (
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        Enter your verification code
                                    </p>
                                ),
                                icon: (
                                    <MailOutlined className="!text-neutral-400" />
                                ),
                                onClick: () =>
                                    router.push("/auth/verify-email"),
                            },
                            {
                                title: (
                                    <h2 className="text-neutral-600 dark:text-neutral-200 font-semibold">
                                        Update your account
                                    </h2>
                                ),
                                description: (
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        Provide your information
                                    </p>
                                ),
                                icon: (
                                    <UserOutlined className="!text-neutral-400" />
                                ),
                                onClick: () =>
                                    router.push("/auth/update-profile"),
                            },
                        ]}
                    />
                </div>
            </header>

            {/* footer  */}
            <div className="w-full flex justify-between items-center">
                {/* logo  */}
                <div className="text-xl font-semibold text-neutral-500">
                    <Link href={"/"}>
                        <FaRegCircleUser />
                    </Link>
                </div>

                <div className="flex gap-5 items-center">
                    {/* back link  */}
                    <Link href={"/"} className="flex items-center gap-2">
                        <BsArrowLeft
                            size={25}
                            className="text-black dark:text-white"
                        />{" "}
                        <p>Go Back</p>
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    );
};

export default AuthSidebar;
