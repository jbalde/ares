import { Avatar, Button, Dropdown, Flex, Layout, MenuProps } from "antd";
import SiderComponent from "./sider";
import { Content, Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

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
				<Header style={{ padding: "5px 16px" }}>
					<Flex
						align="flex-end"
						justify="center"
						vertical
						style={{ height: "100%" }}
					>
						<Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
							<Button
								shape="circle"
								icon={<Avatar icon={<UserOutlined />} />}
								size="large"
							></Button>
						</Dropdown>
					</Flex>
				</Header>
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
