import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Checkbox, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-5d2be8cfb3/icons';
import './RequestIDCardModal.css';

const { Option } = Select;

const RequestIDCardModal = ({ open, onClose, member, activePersonKey }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // For now just simulate a send success
    message.success('ID Card request sent');
    onClose?.();
  };

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="request-footer">
          <button type="button" onClick={triggerSubmit} className="btn-send">Send</button>
        </div>
      )}
      destroyOnClose
      className="request-id-card-modal"
      title={<div className="request-modal-title">Request ID Card</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item label="Product" name="product">
          <Select 
            placeholder="Select product" 
            suffixIcon={<FontAwesomeIcon icon={byPrefixAndName.fas['chevron-down']} />}
            defaultValue="dental"
          >
            <Option value="dental">Dental</Option>
            <Option value="vision">Vision</Option>
            <Option value="hearing">Hearing</Option>
            <Option value="life">Life & AD&D</Option>
            <Option value="disability">Disability</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Delivery Method" name="deliveryMethod">
          <Checkbox.Group defaultValue={['email', 'mail']}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="text">Text</Checkbox>
              <Checkbox value="mail">Mail</Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RequestIDCardModal;


