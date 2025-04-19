import "../globals.css";
import "@ant-design/v5-patch-for-react-19";
import { Layout } from "antd";
import SiderComponent from "./sider";
import { Content, Header } from "antd/es/layout/layout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<SiderComponent />
			<Layout>
				<Header style={{ padding: 0 }}></Header>
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
