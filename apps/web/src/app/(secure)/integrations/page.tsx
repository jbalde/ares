import { Card, Col, Row } from "antd";
import IntegrationsTableComponent from "./integrations-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getIntegrations = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.integration.findMany({});
  },
  ["list-integrations"],
  { revalidate: 10, tags: ["list-integrations"] },
);

export default async function IntegrationsPage() {
  const integrations = await getIntegrations();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Integrations</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Integrations list</h2>
          <IntegrationsTableComponent integrations={integrations} />
        </Card>
      </Col>
    </Row>
  );
}
