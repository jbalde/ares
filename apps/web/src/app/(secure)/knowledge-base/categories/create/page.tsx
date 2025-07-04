import { Card, Col, Row } from "antd";
import CreateCategoryForm from "./form";

export default function CategoryCreatePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Create category</h2>
          <CreateCategoryForm />
        </Card>
      </Col>
    </Row>
  );
}
