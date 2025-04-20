import { Avatar, Button, Dropdown, Flex, Layout, MenuProps } from "antd";
import SiderComponent from "./sider";
import { Content, Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import HeaderComponent from "./header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const items: MenuProps["items"] = [
		{
			key: "profile",
			label: <Link href="/profile">Profile</Link>,
		},
		{
			key: "settings",
			label: <Link href="/settings">Settings</Link>,
		},
		{
			key: "logout",
			label: "Logout",
		},
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<SiderComponent />
			<Layout>
				<HeaderComponent />
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
}
