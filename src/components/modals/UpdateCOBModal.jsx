import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Input, DatePicker, message } from 'antd';

import './UpdateCOBModal.css';

const { Option } = Select;

const UpdateCOBModal = ({ open, onClose, member, activePersonKey }) => {
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
    // For now just simulate an update success
    message.success('COB information updated');
    onClose?.();
  };

  const triggerSubmit = () => form.submit();

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={(
        <div className="update-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>Discard</button>
          <button type="button" onClick={triggerSubmit} className="btn-primary">Update</button>
        </div>
      )}
      destroyOnClose
      className="update-cob-modal"
      title={<div className="update-modal-title">Update COB</div>}
    >
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item label="Member Details" name="memberKey">
          <Select placeholder="Select member" disabled={!member} options={isDependentOnly ? memberOptions.filter(o => o.value === activePersonKey) : memberOptions} />
        </Form.Item>

        <Form.Item label="Other Carrier Name" name="otherCarrierName">
          <Input placeholder="Enter carrier name" />
        </Form.Item>

        <Form.Item label="Other Carrier Effective Date" name="effectiveDate">
          <DatePicker 
            placeholder="Select date" 
            style={{ width: '100%' }}
            suffixIcon={<Icons.CalendarSolid />}
          />
        </Form.Item>

        <Form.Item label="Other Carrier Termination Date" name="terminationDate">
          <DatePicker 
            placeholder="Select date" 
            style={{ width: '100%' }}
            suffixIcon={<Icons.CalendarSolid />}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateCOBModal;
