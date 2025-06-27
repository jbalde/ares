import { Card, Col, Row } from "antd";
import ReportsTableComponent from "./reports-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getReports = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.report.findMany({});
  },
  ["list-reports"],
  { revalidate: 10, tags: ["list-reports"] },
);

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Reports</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Reports list</h2>
          <ReportsTableComponent reports={reports} />
        </Card>
      </Col>
    </Row>
  );
}
