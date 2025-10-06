import React from 'react';
import { Tooltip, Modal, Table } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-5d2be8cfb3/icons';
import './LeftRail.css';

const LeftRail = ({ household, allMembers }) => {
  const items = [
    { key: 'chat', label: 'Chat', icon: byPrefixAndName.fas['messages'] },
    { key: 'email', label: 'Email', icon: byPrefixAndName.fas['envelope'] },
  ];

  const columns = [
    { title: 'SUBSCRIBER ID', dataIndex: 'subscriberId', key: 'subscriberId' },
    { title: 'Primary First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    { title: 'DOB', dataIndex: 'dob', key: 'dob' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Dependent Name', dataIndex: 'depName', key: 'depName' },
    { title: 'Relation', dataIndex: 'relation', key: 'relation' },
    { title: 'Dep DOB', dataIndex: 'depDob', key: 'depDob' },
    { title: 'Dep Email', dataIndex: 'depEmail', key: 'depEmail' },
    { title: 'SSN', dataIndex: 'ssn', key: 'ssn' },
    { title: 'Dependent ID', dataIndex: 'depId', key: 'depId' },
  ];

  const dataSource = (allMembers || []).flatMap((m) => {
    const [firstName, ...rest] = m.name.split(' ');
    const lastName = rest.join(' ');
    const base = { subscriberId: m.subscriberId, firstName, lastName, dob: m.dob, email: m.email, ssn: m.ssn };
    const rows = [ { key: `${m.subscriberId}-self`, ...base, depName: '—', relation: 'Self', depDob: '—', depEmail: '—', depId: '—' } ];
    (m.dependents || []).forEach((d, idx) => rows.push({ key: `${m.subscriberId}-${idx}`, subscriberId: d.subscriberId || m.subscriberId, firstName, lastName, dob: '—', email: '—', depName: d.name, relation: d.relation, depDob: d.dob, depEmail: d.email || '—', ssn: d.ssn, depId: d.dependentId || '—' }));
    return rows;
  });

  const [open, setOpen] = React.useState(false);

  return (
    <nav className="left-rail">
      {items.map((item) => (
        <Tooltip title={item.label} placement="right" key={item.key}>
          <button className="rail-item" aria-label={item.label}>
            <FontAwesomeIcon icon={item.icon} className="rail-icon" />
            <span className="rail-label">{item.label}</span>
          </button>
        </Tooltip>
      ))}

      <button className="rail-item" aria-label="Members" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={byPrefixAndName.fas['users']} className="rail-icon" />
        <span className="rail-label">Members</span>
      </button>
      <Modal open={open} onCancel={() => setOpen(false)} footer={null} width={1200} title="Test Data - Subscribers & Dependents">
        <Table columns={columns} dataSource={dataSource} size="small" pagination={{ pageSize: 10 }} scroll={{ x: true }} />
      </Modal>
    </nav>
  );
};

export default LeftRail;


