"use client";

import { Button, Form, FormProps, Input } from "antd";

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
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div className="flex justify-between items-center gap-3 mb-2">
                {/* first name field  */}
                <Form.Item<FieldType>
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your First name!",
                        },
                    ]}
                >
                    <Input className="h-10" placeholder="Jhon" />
                </Form.Item>

                {/* email field  */}
                <Form.Item<FieldType>
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Last name!",
                        },
                    ]}
                >
                    <Input className="h-10" placeholder="Doe" />
                </Form.Item>
            </div>
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
                <Input className="h-10 mt-2" placeholder="xyz@example.com" />
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
                        message: "Password must be at least 8 characters long",
                    },
                ]}
            >
                <Input.Password className="h-10 mt-2" placeholder="********" />
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
