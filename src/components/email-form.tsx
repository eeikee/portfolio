import React from 'react';
import { Form, Input, Button, message } from 'antd';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const templateParams = {
      from_name: values.name,
      to_name: 'Ekonuma',
      phone: values.phone || 'N/A',
      subject: values.subject,
      message: values.message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        message.success('E-mail enviado com sucesso!');
        form.resetFields();
      }, (error) => {
        console.log('FAILED...', error);
        message.error('Erro ao enviar e-mail. Tente novamente.');
      });
  };

  return (
    <Form form={form} name="email_form" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Nome"
        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Telefone"
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="subject"
        label="Assunto"
        rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="message"
        label="Mensagem"
        rules={[{ required: true, message: 'Por favor, insira sua mensagem!' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmailForm;
