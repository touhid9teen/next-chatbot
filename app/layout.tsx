import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate | Premium E-commerce Experience",
  description: "Discover a curated collection of high-end lifestyle products designed for the modern individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1677ff',
                borderRadius: 12,
                fontFamily: 'inherit',
              },
              components: {
                Button: {
                  controlHeight: 40,
                  fontWeight: 600,
                },
                Card: {
                  borderRadiusLG: 16,
                },
                Layout: {
                  headerBg: 'transparent',
                }

              }
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
