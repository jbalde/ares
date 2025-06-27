import { Card, Col, Row, Button } from "antd";
import { PrismaClient } from "@/db/prisma";
import CustomersTableComponent from "./customers-table";
import { unstable_cache } from "next/cache";
import Link from "next/link";

const getCustomers = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    const customers = await prisma.customer.findMany({});
    return customers;
  },
  ["list-customers"],
  { revalidate: 10, tags: ["list-customers"] }
);

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Customers</h1>
      </Col>
      <Col span={24}>
        <Link href="/customers/create">
          <Button type="primary">Create customer</Button>
        </Link>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Customers list</h2>
          <CustomersTableComponent customers={customers} />
        </Card>
      </Col>
    </Row>
  );
}
