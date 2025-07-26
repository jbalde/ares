import { Breadcrumb, Button, Card, Col, Row } from "antd";
import TicketsTableComponent from "./tickets-table";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import { PrismaClient } from "@/lib/db/prisma";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";

const getTickets = unstable_cache(
	async () => {
		const prisma = new PrismaClient();
		const tickets = await prisma.ticket.findMany({});

		return tickets;
	},
	["list-tickets"],
	{ revalidate: 10, tags: ["list-tickets"] }
);

export default async function TicketsPage() {
	const tickets = await getTickets();

        return (
                <>
                        <Row gutter={[16, 16]}>
                                <Col span={24}>
                                        <Breadcrumb
                                                items={[
                                                        {
                                                                href: "/",
                                                                title: (
                                                                        <HugeiconsIcon icon={Home07Icon} size={20} />
                                                                ),
                                                        },
                                                        {
                                                                href: "/tickets",
                                                                title: "Tickets",
                                                        },
                                                ]}
                                        />
                                </Col>
                                <Col span={24}>
                                        <h1>Tickets</h1>
                                </Col>
				<Col span={24}>
					<Link href="/tickets/create">
						<Button type="primary">Create ticket</Button>
					</Link>
				</Col>
				<Col span={24}>
					<Card variant="borderless">
						<h2>Open tickets</h2>
						<TicketsTableComponent tickets={tickets} />
					</Card>
				</Col>
			</Row>
		</>
	);
}
