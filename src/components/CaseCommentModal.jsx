import React, { useState } from 'react';
import { Modal, Table, Input, Button } from 'antd';
import './modals/ClaimDetailsModal.css';

const { TextArea } = Input;

const CaseCommentModal = ({ open, onClose, caseSummary }) => {
  const [comment, setComment] = useState('');

  const commentColumns = [
    { title: 'Date & Time', dataIndex: 'dateTime', key: 'dateTime', width: 160 },
    { title: 'Name', dataIndex: 'name', key: 'name', width: 140 },
    { title: 'Comment', dataIndex: 'comment', key: 'comment' },
  ];

  const commentHistory = [
    { key: '1', dateTime: '2024-03-01 10:20', name: 'Alex Johnson', comment: 'Case created and assigned.' },
    { key: '2', dateTime: '2024-03-02 11:45', name: 'Maria Gomez', comment: 'Requested additional documentation from provider.' },
  ];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      className="claim-details-modal"
      title={<div className="claim-modal-title">Add Comment</div>}
      width={900}
    >
      <div className="claim-content">
        <div className="claim-section">
          <div className="bs-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
            <div><div className="bs-label">Case ID</div><div className="bs-value">{caseSummary?.caseId || '--'}</div></div>
            <div><div className="bs-label">Case Type</div><div className="bs-value">{caseSummary?.caseType || '--'}</div></div>
            <div><div className="bs-label">Priority</div><div className="bs-value">{caseSummary?.priority || '--'}</div></div>
            <div><div className="bs-label">Case Status</div><div className="bs-value">{caseSummary?.caseStatus || '--'}</div></div>
          </div>
        </div>

        <div className="comment-section">
          <div className="comment-input-area">
            <TextArea
              placeholder="Add comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              className="comment-textarea"
            />
            <Button type="primary">Add Comment to Helix Case</Button>
          </div>
        </div>

        <div className="comment-history-section">
          <h4 className="section-title">Comment History</h4>
          <Table
            columns={commentColumns}
            dataSource={commentHistory}
            pagination={false}
            size="small"
            className="comment-history-table"
          />
        </div>
      </div>
    </Modal>
  );
};

export default CaseCommentModal;


