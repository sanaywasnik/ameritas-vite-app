import React from 'react';
import { Card } from 'antd';
import './MemberDetails.css';

const MemberDetails = ({ memberData }) => {
  return (
    <div className="member-details">
      {/* Member Header Info Card */}
      <Card className={`member-header-card ${memberData ? 'auto-height' : ''}`} bordered={false}>
        <div className="member-info-section">
          <div className="grid-9x2">
            {/* Name spans 2 boxes in first row */}
            <div className="grid-cell span-2">
              <div className="info-item name-item">
                <span className="info-label ds-graph-subtitle">Subscriber Name</span>
                <div className="info-value member-name ds-h5">{memberData?.name || '--'}</div>
              </div>
            </div>

            {/* Remaining 7 cells of first row */}
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Carrier</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.carrier || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Subscriber ID</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.subscriberId || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Date of Birth</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.dob || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Email ID</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.email || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Mobile Number</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.mobile || '--'}</span>
              </div>
            </div>
            {/* Address section right after Mobile Number */}
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Address</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.address || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Skill Name</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.skillName || '--'}</span>
              </div>
            </div>

            {/* Second row - 9 cells */}
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Plan Sponsor</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.planSponsor || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Plan Sponsor Effective Date</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.planSponsorEffectiveDate || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Plan Sponsor Termination Date</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.planSponsorTerminationDate || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Plan Sponsor Address</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.planSponsorAddress || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Plan Sponsor Contact</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.planSponsorContact || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Plan Sponsor Contact No.</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.planSponsorContactNo || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">Billing Entity</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.billingEntity || '--'}</span>
              </div>
            </div>
            <div className="grid-cell">
              <div className="info-item">
                <span className="info-label ds-graph-subtitle">TPA</span>
                <span className="info-value value-normal ds-body-sm">{memberData?.tpa || '--'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plan sponsor grid is integrated above in the 9x2 layout */}
      </Card>
    </div>
  );
};

export default MemberDetails;
