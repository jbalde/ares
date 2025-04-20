import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Layout style={{ minHeight: "100vh" }}>
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
	);
}
