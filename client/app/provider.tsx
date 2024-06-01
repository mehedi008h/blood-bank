"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const Provider = ({ children }: React.PropsWithChildren) => {
    return <AntdRegistry>{children}</AntdRegistry>;
};

export default Provider;
