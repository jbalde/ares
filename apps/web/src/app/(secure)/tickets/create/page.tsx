import { Breadcrumb, Card, Col, Row } from "antd";
import CreateTicketForm from "./form";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";

export default function TicketCreatePage() {
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
                                                        {
                                                                href: "/tickets/create",
                                                                title: "Create ticket",
                                                        },
                                                ]}
                                        />
                                </Col>
                                <Col span={24}>
                                        <Card variant="borderless">
                                                <h2>Create ticket</h2>
                                                <CreateTicketForm />
                                        </Card>
				</Col>
			</Row>
		</>
	);
}
