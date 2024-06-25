"use client";

import { Button, DatePicker, Form, FormProps, Input, Select } from "antd";
import {
    LockOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    AimOutlined,
} from "@ant-design/icons";
import { IoIosArrowDown, IoMdLocate } from "react-icons/io";

import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { BiPhone } from "react-icons/bi";
import AddressForm from "./AddressForm";
import DescriptionForm from "./DescriptionForm";
import { FieldType } from "@/types/form";
import ImageUpload from "./ImageUpload";

enum STEPS {
    INFO = 0,
    LOCATION = 1,
    DESCRIPTION = 2,
    IMAGES = 3,
}

const UpdateProfileForm = () => {
    const [step, setStep] = useState(STEPS.INFO);
    const router = useRouter();

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    // login success
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        if (step !== STEPS.IMAGES) {
            return onNext();
        }
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

    const actionLabel = useMemo(() => {
        if (step === STEPS.IMAGES) {
            return "Create";
        }

        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return undefined;
        }

        return "Back";
    }, [step]);

    let form = (
        <>
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
                    className="text-neutral-400 w-full"
                >
                    <Input
                        className="h-10"
                        prefix={
                            <UserOutlined className="site-form-item-icon !text-neutral-500" />
                        }
                        placeholder="Jhon"
                    />
                </Form.Item>

                {/* last name field  */}
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
                    className="text-neutral-400 w-full"
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

            {/*phone field  */}
            <Form.Item<FieldType>
                name="phone"
                label={
                    <p className="dark:text-neutral-200 text-neutral-600">
                        phone
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: "Please input your Phone number!",
                    },
                ]}
            >
                <Input
                    className="h-10"
                    type="number"
                    prefix={
                        <PhoneOutlined className="site-form-item-icon !text-neutral-500" />
                    }
                    placeholder="01712345678"
                />
            </Form.Item>

            <div className="flex justify-between items-center gap-3">
                {/* gender field  */}
                <Form.Item<FieldType>
                    name="gender"
                    label={
                        <p className="dark:text-neutral-200 text-neutral-600">
                            Geneder
                        </p>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please select your Geneder!",
                        },
                    ]}
                    className="text-neutral-400 w-full"
                >
                    <Select
                        className="!h-10 !w-full"
                        placeholder="Choose Option"
                    >
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>

                {/* blood group field  */}
                <Form.Item<FieldType>
                    name="bloodGroup"
                    label={
                        <p className="dark:text-neutral-200 text-neutral-600">
                            Blood Group
                        </p>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please select your Blood Group!",
                        },
                    ]}
                    className="text-neutral-400 w-full"
                >
                    <Select
                        className="!h-10 !w-full"
                        placeholder="Choose Option"
                    >
                        {[
                            "A +",
                            "B +",
                            "AB +",
                            "O +",
                            "O -",
                            "AB -",
                            "B -",
                            "A -",
                        ].map((group) => (
                            <Select.Option key={group} value="A+">
                                {group}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </div>

            {/*phone field  */}
            <Form.Item<FieldType>
                name="dob"
                label={
                    <p className="dark:text-neutral-200 text-neutral-600">
                        Date of Birth
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: "Please input your Date of birth!",
                    },
                ]}
            >
                <DatePicker className="h-10 w-full" />
            </Form.Item>
        </>
    );

    if (step === STEPS.LOCATION) {
        form = <AddressForm />;
    }

    if (step === STEPS.DESCRIPTION) {
        form = <DescriptionForm />;
    }

    if (step === STEPS.IMAGES) {
        form = <ImageUpload />;
    }

    return (
        <>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                {form}

                <div className="flex  gap-5">
                    {secondaryActionLabel && (
                        <Button
                            type="dashed"
                            htmlType="submit"
                            className="w-full !h-10 mt-2"
                            onClick={
                                step === STEPS.DESCRIPTION ? undefined : onBack
                            }
                        >
                            {secondaryActionLabel}
                        </Button>
                    )}
                    <Form.Item className="w-full">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full !h-10 mt-2"
                        >
                            {actionLabel}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </>
    );
};

export default UpdateProfileForm;
