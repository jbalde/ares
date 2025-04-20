import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ares Ticket Management System",
	description:
		"An open source issue management & help desk solution. A free freshdesk, zendesk, jira service management alternative",
	icons: {
		icon: "/logos/favicon.png",
		apple: "/logos/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
