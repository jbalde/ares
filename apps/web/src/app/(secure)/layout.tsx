import { Layout } from "antd";
import SiderComponent from "./sider";
import { Content } from "antd/es/layout/layout";
import HeaderComponent from "./header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
