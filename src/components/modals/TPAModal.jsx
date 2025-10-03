import React from 'react';
import { Modal, Table } from 'antd';
import './TPAModal.css';

const TPAModal = ({ open, onClose, member, activePersonKey }) => {
  // Mock TPA data
  const tpaData = [
    {
      key: '1',
      tpa: 'Ameritas TPA Services',
      contactName: 'John Smith',
      tpaServices: 'Claims Processing, Customer Service',
      tpaPhone: '(402) 555-1234',
      address: '123 Main St, Omaha, NE 68102',
      emailId: 'john.smith@ameritas.com'
    },
    {
      key: '2',
      tpa: 'Health Solutions TPA',
      contactName: 'Sarah Johnson',
      tpaServices: 'Benefits Administration, Provider Relations',
      tpaPhone: '(402) 555-5678',
      address: '456 Business Ave, Lincoln, NE 68508',
      emailId: 'sarah.johnson@healthsolutions.com'
    }
  ];

  const columns = [
    {
      title: 'TPA',
      dataIndex: 'tpa',
      key: 'tpa',
      width: 150
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      key: 'contactName',
      width: 120
    },
    {
      title: 'TPA Services',
      dataIndex: 'tpaServices',
      key: 'tpaServices',
      width: 200
    },
    {
      title: 'TPA Phone',
      dataIndex: 'tpaPhone',
      key: 'tpaPhone',
      width: 120
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200
    },
    {
      title: 'Email ID',
      dataIndex: 'emailId',
      key: 'emailId',
      width: 200
    }
  ];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      className="tpa-modal"
      title={<div className="tpa-modal-title">TPA</div>}
      width={1000}
    >
      <Table
        columns={columns}
        dataSource={tpaData}
        pagination={false}
        size="small"
        className="tpa-table"
        scroll={{ x: 1000 }}
      />
    </Modal>
  );
};

export default TPAModal;
