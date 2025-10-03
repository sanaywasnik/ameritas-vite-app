import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import CaseCommentModal from './CaseCommentModal.jsx';
import './ClaimHistory.css';

const CaseHistory = () => {
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const columns = [
    { title: 'Case ID', dataIndex: 'caseId', key: 'caseId', width: 160, fixed: 'left' },
    { title: 'Case Type', dataIndex: 'caseType', key: 'caseType', width: 160 },
    { title: 'Assignee', dataIndex: 'assignee', key: 'assignee', width: 160 },
    { title: 'Priority', dataIndex: 'priority', key: 'priority', width: 120 },
    { title: 'Customer ID', dataIndex: 'customerId', key: 'customerId', width: 160 },
    { title: 'Case Status', dataIndex: 'caseStatus', key: 'caseStatus', width: 160 },
    { title: 'Case Notes', dataIndex: 'caseNotes', key: 'caseNotes', width: 240 },
    { title: 'Submitted By', dataIndex: 'submittedBy', key: 'submittedBy', width: 160 },
    { title: 'Creation Date Time', dataIndex: 'createdAt', key: 'createdAt', width: 200 },
    { title: 'Resolution Date Time', dataIndex: 'resolvedAt', key: 'resolvedAt', width: 200 },
    { title: 'Add Comments', dataIndex: 'actions', key: 'actions', width: 160, fixed: 'right', render: (_t, record) => (
      <Button onClick={() => { setSelectedCase(record); setOpen(true); }} size="small">Add Comment</Button>
    ) },
  ];

  const data = [
    { key: '1', caseId: '42161436134', caseType: 'Billing', assignee: 'Alex J', priority: 'Urgent', customerId: 'SUBA10234', caseStatus: 'In Progress', caseNotes: 'Awaiting provider docs', submittedBy: 'CSR-12', createdAt: '12/09/2024 10:45', resolvedAt: '-' },
    { key: '2', caseId: '42161436135', caseType: 'Eligibility', assignee: 'Sam K', priority: 'High', customerId: 'SUBA10234', caseStatus: 'New', caseNotes: '-', submittedBy: 'CSR-45', createdAt: '12/01/2024 08:15', resolvedAt: '-' },
    { key: '3', caseId: '42161436136', caseType: 'Claims', assignee: 'Priya M', priority: 'Medium', customerId: 'SUBA10234', caseStatus: 'Resolved', caseNotes: 'Member notified', submittedBy: 'CSR-02', createdAt: '11/20/2024 14:05', resolvedAt: '11/22/2024 16:30' },
  ];

  return (
    <>
      <div className="claim-history-container">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
          className="claim-history-table"
          scroll={{ x: 1600 }}
        />
      </div>
      <CaseCommentModal open={open} onClose={() => setOpen(false)} caseSummary={selectedCase} />
    </>
  );
};

export default CaseHistory;



