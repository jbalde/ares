import { Card, Col, Row } from "antd";
import CreateCustomerForm from "./form";

export default function CustomerCreatePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Create customer</h2>
          <CreateCustomerForm />
        </Card>
      </Col>
    </Row>
  );
}
