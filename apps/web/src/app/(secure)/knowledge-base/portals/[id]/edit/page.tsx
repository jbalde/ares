import { Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import EditPortalForm from "./form";

export default async function EditPortalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const prisma = new PrismaClient();
  const portal = await prisma.portal.findUnique({
    where: { id: Number(id) },
  });

  if (!portal) {
    return <h1>Portal not found</h1>;
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless" title="Edit portal">
          <EditPortalForm portal={portal} />
        </Card>
      </Col>
    </Row>
  );
}
