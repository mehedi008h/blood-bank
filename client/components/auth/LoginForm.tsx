"use client";
import {
    FacebookFilled,
    GithubFilled,
    GoogleCircleFilled,
} from "@ant-design/icons";
import {
    Avatar,
    Button,
    Checkbox,
    Divider,
    Form,
    FormProps,
    Input,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const LoginForm = () => {
    const router = useRouter();
    // login success
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
        router.push("/dashboard");
        toast.success("Successfully Sign in");
    };

    // login failed
    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="xl:w-[400px] lg:w-[400px] md:w-[400px] w-full px-2 mx-auto">
            {/* heading  */}
            <h3 className="text-3xl font-semibold text-neutral-700 dark:text-neutral-200 text-center">
                Welcome Back
            </h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300 mt-2 mb-5 text-center ">
                Enter your email & password to Sign in.
            </p>

            {/* login form  */}
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* email field  */}
                <Form.Item<FieldType>
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input className="h-10" placeholder="xyz@example.com" />
                </Form.Item>

                {/* password field  */}
                <Form.Item<FieldType>
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        {
                            min: 8,
                            message:
                                "Password must be at least 8 characters long",
                        },
                    ]}
                    className="mt-8"
                >
                    <Input.Password className="h-10" placeholder="********" />
                </Form.Item>

                <div className="flex items-center justify-between">
                    {/* remember me */}
                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className="dark:text-neutral-400">
                            Remember me
                        </Checkbox>
                    </Form.Item>

                    <Form.Item<FieldType>>
                        <Link href={"/"} className="text-blue-400">
                            Forgot Password
                        </Link>
                    </Form.Item>
                </div>

                {/* sign in button  */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full !h-10 -mt-4"
                    >
                        Sign In
                    </Button>
                </Form.Item>
            </Form>

            {/* divider  */}
            <Divider className="dark:border-neutral-400">
                <p className="dark:text-neutral-400">OR</p>
            </Divider>

            {/* social media login  */}
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
        </div>
    );
};

export default LoginForm;
