import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import Link from "next/link";

export default async function PortalPage({ params }: { params: Promise<{ id: string }> }) {
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
        <Card
          title={portal.name || "Portal"}
          extra={
            <Link href={`/knowledge-base/portals/${portal.id}/edit`}>
              <Button type="primary">Edit portal</Button>
            </Link>
          }
        >
          <p>
            <strong>Slug:</strong> {portal.slug}
          </p>
          <p>
            <strong>URL:</strong> {portal.url}
          </p>
          <p>
            <strong>Description:</strong> {portal.description || "-"}
          </p>
        </Card>
      </Col>
    </Row>
  );
}
