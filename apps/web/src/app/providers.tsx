"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout, theme } from "antd";
import { ThemeProvider } from "next-themes";

export function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AntdRegistry>
			<ThemeProvider>
				<ConfigProvider
					theme={{
						algorithm: theme.darkAlgorithm,
						token: {
							// Seed Token
							colorPrimary: "#b81414",
							borderRadius: 3,
						},
					}}
				>
					<Layout>{children}</Layout>
				</ConfigProvider>
			</ThemeProvider>
		</AntdRegistry>
	);
}
