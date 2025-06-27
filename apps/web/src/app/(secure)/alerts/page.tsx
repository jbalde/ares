import { Card, Col, Row } from "antd";
import AlertsTableComponent from "./alerts-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getAlerts = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.alert.findMany({});
  },
  ["list-alerts"],
  { revalidate: 10, tags: ["list-alerts"] },
);

export default async function AlertsPage() {
  const alerts = await getAlerts();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Alerts</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Alerts list</h2>
          <AlertsTableComponent alerts={alerts} />
        </Card>
      </Col>
    </Row>
  );
}
