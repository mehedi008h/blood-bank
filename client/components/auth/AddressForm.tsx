"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Button, Form, Input, Select } from "antd";
import { AimOutlined } from "@ant-design/icons";
import { FieldType } from "@/types/form";

enum AddressType {
    CURRENT = "current",
    PERMANENT = "permanent",
}

const AddressForm = () => {
    const [addressType, setAddressType] = useState<string>(
        AddressType.PERMANENT
    );

    const toogleAddress = (type: string) => {
        setAddressType(type);
    };
    return (
        <div className="">
            {/* current address  */}
            <>
                <div className="flex items-center justify-between bg-neutral-700 p-2 rounded-md mb-4">
                    <h5 className="text-neutral-900 font-semibold text-lg uppercase dark:text-neutral-200">
                        Current Address
                    </h5>
                    {addressType === AddressType.CURRENT ? (
                        <IoIosArrowDown
                            onClick={() => toogleAddress(AddressType.PERMANENT)}
                            size={18}
                            className="text-neutral-300"
                        />
                    ) : (
                        <IoIosArrowForward
                            onClick={() => toogleAddress(AddressType.CURRENT)}
                            size={18}
                            className="text-neutral-300"
                        />
                    )}
                </div>

                {addressType === AddressType.CURRENT && (
                    <>
                        {/* Division field  */}
                        <Form.Item<FieldType>
                            name="peDvivision"
                            label={
                                <p className="dark:text-neutral-200 text-neutral-600">
                                    Division
                                </p>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Division!",
                                },
                            ]}
                            className="text-neutral-400"
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
                        {/* zill & thana field  */}
                        <div className="flex items-center gap-5">
                            <Form.Item<FieldType>
                                name="peZilla"
                                label={
                                    <p className="dark:text-neutral-200 text-neutral-600">
                                        Zilla
                                    </p>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Zilla!",
                                    },
                                ]}
                                className="w-full"
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
                            <Form.Item<FieldType>
                                name="peThana"
                                label={
                                    <p className="dark:text-neutral-200 text-neutral-600">
                                        Thana
                                    </p>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Thana!",
                                    },
                                ]}
                                className="w-full"
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
                        <Form.Item<FieldType>
                            name="peAddress"
                            label={
                                <p className="dark:text-neutral-200 text-neutral-600">
                                    Address
                                </p>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Address!",
                                },
                            ]}
                        >
                            <Input className="h-10" placeholder="Doe" />
                        </Form.Item>
                        <Button
                            type="link"
                            icon={<AimOutlined />}
                            className="!px-0"
                        >
                            Add Google map loaction
                        </Button>{" "}
                    </>
                )}
            </>

            {/* Permanent Address  */}
            <>
                <div className="flex items-center justify-between bg-neutral-700 p-2 rounded-md mb-4 mt-4">
                    <h5 className="text-neutral-900 font-semibold text-lg uppercase dark:text-neutral-200">
                        Permanent Address
                    </h5>

                    {addressType === AddressType.PERMANENT ? (
                        <IoIosArrowDown
                            onClick={() => toogleAddress(AddressType.CURRENT)}
                            size={18}
                            className="text-neutral-300"
                        />
                    ) : (
                        <IoIosArrowForward
                            onClick={() => toogleAddress(AddressType.PERMANENT)}
                            size={18}
                            className="text-neutral-300"
                        />
                    )}
                </div>

                {addressType === AddressType.PERMANENT && (
                    <>
                        {/* Division field  */}
                        <Form.Item<FieldType>
                            name="peDvivision"
                            label={
                                <p className="dark:text-neutral-200 text-neutral-600">
                                    Division
                                </p>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Division!",
                                },
                            ]}
                            className="text-neutral-400"
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
                        {/* zill & thana field  */}
                        <div className="flex items-center gap-5">
                            <Form.Item<FieldType>
                                name="peZilla"
                                label={
                                    <p className="dark:text-neutral-200 text-neutral-600">
                                        Zilla
                                    </p>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Zilla!",
                                    },
                                ]}
                                className="w-full"
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
                            <Form.Item<FieldType>
                                name="peThana"
                                label={
                                    <p className="dark:text-neutral-200 text-neutral-600">
                                        Thana
                                    </p>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Thana!",
                                    },
                                ]}
                                className="w-full"
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
                        <Form.Item<FieldType>
                            name="peAddress"
                            label={
                                <p className="dark:text-neutral-200 text-neutral-600">
                                    Address
                                </p>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Address!",
                                },
                            ]}
                        >
                            <Input className="h-10" placeholder="Doe" />
                        </Form.Item>
                        <Button
                            type="link"
                            icon={<AimOutlined />}
                            className="!px-0"
                        >
                            Add Google map loaction
                        </Button>
                    </>
                )}
            </>
        </div>
    );
};

export default AddressForm;
