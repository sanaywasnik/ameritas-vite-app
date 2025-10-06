import React, { useState } from 'react';
import { Modal, Button, Input, Table, message } from 'antd';

import './ClaimDetailsModal.css';

const { TextArea } = Input;

const ClaimDetailsModal = ({ open, onClose, claimId }) => {
  const [comment, setComment] = useState('');

  // Mock claim documents data
  const claimDocuments = [
    { name: 'Claim Form', uploadDate: '2 days ago' },
    { name: 'Benefit Form', uploadDate: '1 week ago' },
    { name: 'Surgical Notes', uploadDate: '3 days ago' },
    { name: 'Xrays EOB from primary carrier return correspondence', uploadDate: '5 days ago' }
  ];

  // Mock comment history data
  const commentHistory = [
    {
      key: '1',
      dateTime: '2024-01-15 10:30 AM',
      name: 'Sanay Wasnik',
      comment: 'Initial claim review completed. All documents verified and processed.'
    },
    {
      key: '2',
      dateTime: '2024-01-14 2:15 PM',
      name: 'Sarah Johnson',
      comment: 'Additional documentation requested from provider. Waiting for response.'
    },
    {
      key: '3',
      dateTime: '2024-01-13 9:45 AM',
      name: 'Mike Chen',
      comment: 'Claim submitted for processing. All required forms received.'
    },
    {
      key: '4',
      dateTime: '2024-01-12 4:20 PM',
      name: 'Lisa Davis',
      comment: 'Patient eligibility confirmed. Coverage verified for treatment period.'
    }
  ];

  const commentColumns = [
    {
      title: 'Date & Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
      width: 150
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 120
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment'
    }
  ];

  const handleAddComment = () => {
    if (!comment.trim()) {
      message.warning('Please enter a comment');
      return;
    }
    message.success('Comment added successfully');
    setComment('');
  };

  const handleReprocessClaim = () => {
    message.success('Claim reprocessing initiated');
  };

  const handleSendEOB = () => {
    message.success('EOB sent successfully');
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      className="claim-details-modal"
      title={<div className="claim-modal-title">Claim Number: {claimId}</div>}
      width={900}
    >
      <div className="claim-content">
        {/* Claim Documents Section */}
        <div className="claim-section">
          <h4 className="section-title">Claim Documents</h4>
          <div className="documents-list">
            {claimDocuments.map((doc, index) => (
              <div key={index} className="document-link">
                <Icons.FilePdf className="document-icon" />
                <div className="document-info">
                  <div className="document-name">{doc.name}</div>
                  <div className="document-date">Uploaded: {doc.uploadDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="claim-actions">
          <Button 
            type="default" 
            onClick={handleReprocessClaim}
            className="action-btn"
          >
            Reprocess Claims
            <div className="btn-subtitle">(only for pending claims)</div>
          </Button>
          <Button 
            type="default" 
            onClick={handleSendEOB}
            className="action-btn"
          >
            Send EOB
            <div className="btn-subtitle">(only for paid claims)</div>
          </Button>
          <Button 
            type="default" 
            onClick={handleSendEOB}
            className="action-btn"
          >
            Send EOB
          </Button>
        </div>

        {/* Add Comment Section */}
        <div className="comment-section">
          <div className="comment-input-area">
            <TextArea
              placeholder="Add your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="comment-textarea"
            />
            <Button 
              type="primary" 
              onClick={handleAddComment}
              className="add-comment-btn"
            >
              Add Comment
            </Button>
          </div>
        </div>

        {/* Comment History */}
        <div className="comment-history-section">
          <h4 className="section-title">Claim Comment History</h4>
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

export default ClaimDetailsModal;
