"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <AntdRegistry>{children}</AntdRegistry>
        </NextThemesProvider>
    );
}
