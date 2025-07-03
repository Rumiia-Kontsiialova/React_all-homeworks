import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: '20px' }}>
      <Title level={3}>Форма с использованием ANT Design</Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Введите описание' }]}
        >
          <Input.TextArea placeholder="Введите описание" rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card title="Отправленные данные" style={{ marginTop: 20 }}>
          <p><strong>Имя:</strong> {submittedData.name}</p>
          <p><strong>Описание:</strong> {submittedData.description}</p>
        </Card>
      )}
    </div>
  );
}

export default App;
