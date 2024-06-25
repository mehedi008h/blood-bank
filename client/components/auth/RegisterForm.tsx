"use client";

import { Button, Form, FormProps, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type FieldType = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
};

const RegisterForm = () => {
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
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
        >
            <div className="flex justify-between items-center gap-3">
                {/* first name field  */}
                <Form.Item<FieldType>
                    name="firstName"
                    label={
                        <p className="dark:text-neutral-200 text-neutral-600">
                            First Name
                        </p>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please input your First name!",
                        },
                    ]}
                    className="text-neutral-400"
                >
                    <Input
                        className="h-10"
                        prefix={
                            <UserOutlined className="site-form-item-icon !text-neutral-500" />
                        }
                        placeholder="Jhon"
                    />
                </Form.Item>

                {/* email field  */}
                <Form.Item<FieldType>
                    name="lastName"
                    label={
                        <p className="dark:text-neutral-200 text-neutral-600">
                            Last Name
                        </p>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please input your Last name!",
                        },
                    ]}
                >
                    <Input
                        className="h-10"
                        prefix={
                            <UserOutlined className="site-form-item-icon !text-neutral-500" />
                        }
                        placeholder="Doe"
                    />
                </Form.Item>
            </div>
            {/* email field  */}
            <Form.Item<FieldType>
                name="email"
                label={
                    <p className="dark:text-neutral-200 text-neutral-600">
                        Email
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                ]}
            >
                <Input
                    className="h-10"
                    prefix={
                        <MailOutlined className="site-form-item-icon !text-neutral-500" />
                    }
                    placeholder="xyz@example.com"
                />
            </Form.Item>

            {/* password field  */}
            <Form.Item<FieldType>
                name="password"
                label={
                    <p className="dark:text-neutral-200 text-neutral-600">
                        Password
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                    {
                        min: 8,
                        message: "Password must be at least 8 characters long",
                    },
                    { type: "url", warningOnly: true },
                ]}
            >
                <Input.Password
                    className="h-10"
                    prefix={
                        <LockOutlined className="site-form-item-icon !text-neutral-500" />
                    }
                    placeholder="********"
                />
            </Form.Item>

            {/* sign in button  */}
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full !h-10 mt-2"
                >
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
