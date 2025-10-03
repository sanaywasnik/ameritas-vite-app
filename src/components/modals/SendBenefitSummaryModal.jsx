import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Input, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-5d2be8cfb3/icons';
import './SendBenefitSummaryModal.css';

const { Option } = Select;
const { TextArea } = Input;

const SendBenefitSummaryModal = ({ open, onClose, member, activePersonKey }) => {
  const [form] = Form.useForm();
  const [isDependentOnly, setIsDependentOnly] = useState(false);

  useEffect(() => {
    if (member && activePersonKey && activePersonKey !== 'primary') {
      setIsDependentOnly(true);
    } else {
      setIsDependentOnly(false);
    }
  }, [member, activePersonKey]);

  const memberOptions = member ? [
    { label: member.name, value: 'primary' },
    ...(member.dependents || []).map((dep, idx) => ({
      label: `${dep.name} [Dependent]`,
      value: `dep-${idx}`
    }))
  ] : [];

  const handleFinish = (values) => {
    // For now just simulate a send success
    message.success('Benefit summary sent');
    onClose?.();
  };

  const handleView = () => {
    // For now just simulate opening a view
    message.info('Opening benefit summary view...');
  };

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="send-footer">
          <button type="button" className="btn-secondary" onClick={handleView}>View</button>
          <button type="button" onClick={triggerSubmit} className="btn-primary">Send</button>
        </div>
      )}
      destroyOnClose
      className="send-benefit-summary-modal"
      title={<div className="send-modal-title">Send Benefit Summary</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item label="Member Details" name="memberDetails">
          <Select placeholder="Select member" suffixIcon={<FontAwesomeIcon icon={byPrefixAndName.fas['chevron-down']} />}>
            {memberOptions.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Coverage Type" name="coverageType">
          <Select placeholder="Select coverage type" suffixIcon={<FontAwesomeIcon icon={byPrefixAndName.fas['chevron-down']} />}>
            <Option value="dental">Dental</Option>
            <Option value="vision">Vision</Option>
            <Option value="hearing">Hearing</Option>
            <Option value="life">Life & AD&D</Option>
            <Option value="disability">Disability</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Delivery Method" name="deliveryMethod">
          <Select placeholder="Select delivery method" suffixIcon={<FontAwesomeIcon icon={byPrefixAndName.fas['chevron-down']} />}>
            <Option value="email">Email</Option>
            <Option value="mail">Mail</Option>
            <Option value="both">Both Email and Mail</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Additional Notes" name="notes">
          <TextArea 
            placeholder="Add any additional notes or instructions..."
            rows={3}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendBenefitSummaryModal;
