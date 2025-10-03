import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, Space } from 'antd';
import { Icons } from './Icons';
import './QuickActions.css';
import UpdatePersonalInfoModal from './modals/UpdatePersonalInfoModal.jsx';
import UpdateCOBModal from './modals/UpdateCOBModal.jsx';
import UpdateDependentStatusModal from './modals/UpdateDependentStatusModal.jsx';
import RequestIDCardModal from './modals/RequestIDCardModal.jsx';
import SendBenefitSummaryModal from './modals/SendBenefitSummaryModal.jsx';
import SendPatientDetailsModal from './modals/SendPatientDetailsModal.jsx';
import SendDocumentModal from './modals/SendDocumentModal.jsx';
import SendPlanDocModal from './modals/SendPlanDocModal.jsx';
import TPAModal from './modals/TPAModal.jsx';
import ProcedureCodeLookupModal from './modals/ProcedureCodeLookupModal.jsx';

const QuickActions = ({ member, activePersonKey, disabled = true, onActionOpen, usePortal = false }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openCOB, setOpenCOB] = useState(false);
  const [openDependent, setOpenDependent] = useState(false);
  const [openIDCard, setOpenIDCard] = useState(false);
  const [openBenefitSummary, setOpenBenefitSummary] = useState(false);
  const [openPatientDetails, setOpenPatientDetails] = useState(false);
  const [openDocument, setOpenDocument] = useState(false);
  const [openPlanDoc, setOpenPlanDoc] = useState(false);
  const [openTPA, setOpenTPA] = useState(false);
  const [openProcedureCode, setOpenProcedureCode] = useState(false);
  const actions = [
    { key: 'update-info', label: 'Update Personal Information', icon: <Icons.UserPen /> },
    { key: 'update-cob', label: 'Update COB', icon: <Icons.UserGear /> },
    { key: 'update-dependent', label: 'Update Dependent Status', icon: <Icons.UsersGear /> },
    { key: 'find-provider', label: 'Find Provider', icon: <Icons.MagnifyingGlassLocation /> },
    { key: 'request-id', label: 'Request ID Card', icon: <Icons.IdCardClip /> },
    { key: 'procedure-lookup', label: 'Procedure Code Lookup', icon: <Icons.SuitcaseMedical /> },
    { key: 'benefit-summary', label: 'Send Benefit Summary', icon: <Icons.FileMedical /> },
    { key: 'patient-details', label: 'Send Patient Details', icon: <Icons.FileUser /> },
    { key: 'send-document', label: 'Send Document', icon: <Icons.File /> },
    { key: 'plan-doc', label: 'Send Plan Doc', icon: <Icons.FileLines /> },
    { key: 'tpa', label: 'TPA', icon: <Icons.BuildingMemo /> },
  ];

  const handleActionClick = (key) => {
    if (disabled) return;
    console.log('Action clicked:', key);
    if (key === 'update-info') setOpenUpdate(true);
    if (key === 'update-cob') setOpenCOB(true);
    if (key === 'update-dependent') setOpenDependent(true);
    if (key === 'request-id') setOpenIDCard(true);
    if (key === 'benefit-summary') setOpenBenefitSummary(true);
    if (key === 'patient-details') setOpenPatientDetails(true);
    if (key === 'send-document') setOpenDocument(true);
    if (key === 'plan-doc') setOpenPlanDoc(true);
    if (key === 'tpa') setOpenTPA(true);
    if (key === 'procedure-lookup') setOpenProcedureCode(true);
    if (onActionOpen) onActionOpen(key);
  };

  const maybePortal = (node) => (usePortal ? createPortal(node, document.body) : node);

  return (
    <Card className="quick-actions-card" variant="outlined" styles={{ body: { padding: 0 } }}>
      <div className="quick-actions-header qa-header">
        <Icons.Bolt className="qa-bolt" color="#f59e0b" />
        <h3 className="quick-actions-title">Quick Actions</h3>
      </div>
      <div className="qa-divider" />

      <Space direction="vertical" className="qa-content" size="small">
        {actions.map((action) => (
          <div
            key={action.key}
            className={`action-item ${disabled ? 'disabled' : ''}`}
            onClick={() => handleActionClick(action.key)}
          >
            <span className="action-icon fa-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </div>
        ))}
      </Space>
      {maybePortal(<UpdatePersonalInfoModal open={openUpdate} onClose={() => setOpenUpdate(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<UpdateCOBModal open={openCOB} onClose={() => setOpenCOB(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<UpdateDependentStatusModal open={openDependent} onClose={() => setOpenDependent(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<RequestIDCardModal open={openIDCard} onClose={() => setOpenIDCard(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<SendBenefitSummaryModal open={openBenefitSummary} onClose={() => setOpenBenefitSummary(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<SendPatientDetailsModal open={openPatientDetails} onClose={() => setOpenPatientDetails(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<SendDocumentModal open={openDocument} onClose={() => setOpenDocument(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<SendPlanDocModal open={openPlanDoc} onClose={() => setOpenPlanDoc(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<TPAModal open={openTPA} onClose={() => setOpenTPA(false)} member={member} activePersonKey={activePersonKey} />)}
      {maybePortal(<ProcedureCodeLookupModal open={openProcedureCode} onClose={() => setOpenProcedureCode(false)} member={member} activePersonKey={activePersonKey} />)}
    </Card>
  );
};

export default QuickActions;
