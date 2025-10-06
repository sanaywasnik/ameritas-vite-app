import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Checkbox, message } from 'antd';

import './SendDocumentModal.css';

const { Option } = Select;

const SendDocumentModal = ({ open, onClose, member, activePersonKey }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // For now just simulate a send success
    message.success('Document sent');
    onClose?.();
  };

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="send-footer">
          <button type="button" onClick={triggerSubmit} className="btn-send">Send</button>
        </div>
      )}
      destroyOnClose
      className="send-document-modal"
      title={<div className="send-modal-title">Send Document</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item label="Product" name="product">
          <Select 
            placeholder="Select product" 
            suffixIcon={<Icons.ChevronDown />}
            defaultValue="hippa-auth"
          >
            <Option value="hippa-auth">HIPPA Authorization Form</Option>
            <Option value="benefit-summary">Benefit Summary</Option>
            <Option value="claim-form">Claim Form</Option>
            <Option value="id-card">ID Card</Option>
            <Option value="coverage-letter">Coverage Letter</Option>
            <Option value="enrollment-form">Enrollment Form</Option>
            <Option value="provider-directory">Provider Directory</Option>
            <Option value="policy-document">Policy Document</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Delivery Method" name="deliveryMethod">
          <Checkbox.Group defaultValue={['email']}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="fax">Fax</Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendDocumentModal;
