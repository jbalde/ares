import { Card, Col, Row } from "antd";
import CreateArticleForm from "./form";

export default function ArticleCreatePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Create article</h2>
          <CreateArticleForm />
        </Card>
      </Col>
    </Row>
  );
}
