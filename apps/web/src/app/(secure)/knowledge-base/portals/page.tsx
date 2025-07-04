import { Button, Card, Col, Row } from "antd";
import PortalsTableComponent from "./portals-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";
import Link from "next/link";

const getPortals = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.portal.findMany({});
  },
  ["list-portals"],
  { revalidate: 10, tags: ["list-portals"] },
);

export default async function KnowledgeBasePortalsPage() {
  const portals = await getPortals();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Portals</h1>
      </Col>
      <Col span={24}>
        <Link href="/knowledge-base/portals/create">
          <Button type="primary">Create portal</Button>
        </Link>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Portals list</h2>
          <PortalsTableComponent portals={portals} />
        </Card>
      </Col>
    </Row>
  );
}
