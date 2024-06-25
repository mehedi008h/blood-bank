import { FieldType } from "@/types/form";
import { Form, Input } from "antd";
import React from "react";

const DescriptionForm = () => {
    return (
        <div>
            <Form.Item<FieldType>
                name="peAddress"
                label={
                    <p className="dark:text-neutral-200 text-neutral-600">
                        Work
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: "Please input your Work!",
                    },
                ]}
            >
                <Input className="h-10" placeholder="Doe" />
            </Form.Item>

            <Form.Item<FieldType>
                name="peAddress"
                label={
                    <p className="dark:text-neutral-200 text-neutral-600">
                        Bio
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: "Please input your Address!",
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
        </div>
    );
};

export default DescriptionForm;
