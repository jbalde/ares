import { Card, Col, Row } from "antd";
import SlasTableComponent from "./slas-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getSlas = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.sLA.findMany({});
  },
  ["list-slas"],
  { revalidate: 10, tags: ["list-slas"] },
);

export default async function SlasPage() {
  const slas = await getSlas();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>SLAs</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>SLAs list</h2>
          <SlasTableComponent slas={slas} />
        </Card>
      </Col>
    </Row>
  );
}
