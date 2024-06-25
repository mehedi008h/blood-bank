import { Form, Upload } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const ImageUpload = () => {
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <div className="flex justify-center">
            <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload
                    action="/upload.do"
                    listType="picture-card"
                    className="text-neutral-900 dark:text-neutral-200"
                >
                    <button
                        style={{ border: 0, background: "none" }}
                        type="button"
                    >
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                </Upload>
            </Form.Item>
        </div>
    );
};

export default ImageUpload;
