import React, { useEffect, useState } from 'react';
import { Card, Select, Tabs } from 'antd';
import QuickActions from './QuickActions';
import FloatingActionButton from './FloatingActionButton';
import ClaimHistory from './ClaimHistory';
import PatientHistory from './PatientHistory';
import BillingPayment from './BillingPayment';
import CoverageHistory from './CoverageHistory';
import CaseHistory from './CaseHistory';
// Using FontAwesome Pro via CDN
import './MemberDashboard.css';

const { Option } = Select;

const MemberDashboard = ({ member, activePersonKey }) => {
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('benefit');
  // When no member selected, keep selects empty to show placeholders
  const [selectedCoverage, setSelectedCoverage] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null); // 'primary' or dep index key

  // When a member loads, default coverage to Dental and person to Primary
  useEffect(() => {
    if (member) {
      setSelectedCoverage('dental');
      setSelectedPerson(activePersonKey || 'primary');
    } else {
      setSelectedCoverage(null);
      setSelectedPerson(null);
    }
  }, [member, activePersonKey]);

  // Check if we should show FAB and mobile layout based on screen width
  useEffect(() => {
    const checkWidth = () => {
      const w = window.innerWidth;
      setShowFab(w < 1400);
      setIsMobile(w <= 768);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const GridRow = ({ label, value }) => (
    <div className="bs-item"><div className="bs-label">{label}</div><div className="bs-value">{value || '--'}</div></div>
  );

  const DentalSummary = () => (
    <div className="tab-pad">
      <div className="bs-grid">
        <GridRow label="Coverage" value={member?.benefits?.dental?.top?.coverage} />
        <GridRow label="Restrictions" value={member?.benefits?.dental?.top?.restrictions} />
        <GridRow label="Opt-In" value={member?.coverageDetails?.dental?.optIn} />
        <GridRow label="Effective Date" value={member?.benefits?.dental?.top?.effectiveDate} />
        <GridRow label="Child Age" value={member?.benefits?.dental?.top?.childAge} />
        <GridRow label="Student Age" value={member?.benefits?.dental?.top?.studentAge} />
      </div>
      <div className="bs-item mt-12"><div className="bs-label">MTC</div><div className="bs-value">{member?.benefits?.dental?.top?.mtc || '--'}</div></div>

      <div className="bs-tables mt-16">
        <table className="bs-table">
          <colgroup>
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>In Net</th>
              <th>Out of Net (UCR)</th>
              <th>Waiting Period</th>
            </tr>
          </thead>
          <tbody>
            {(member?.benefits?.dental?.table || []).map((row) => (
              <tr key={row.type}>
                <td className="bold">{row.type}</td>
                <td>{row.inNet || '--'}</td>
                <td>{row.outNet || '--'}</td>
                <td>{row.waiting || '--'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="bs-table mt-16">
          <colgroup>
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>C/O</th>
              <th>Threshold</th>
              <th>Amount</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bold">{member?.benefits?.dental?.carryOver ? 'C/O' : '--'}</td>
              <td>{member?.benefits?.dental?.carryOver?.threshold || '--'}</td>
              <td>{member?.benefits?.dental?.carryOver?.amount || '--'}</td>
              <td>{member?.benefits?.dental?.carryOver?.limit || '--'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bs-grid mt-16">
        {(() => {
          const extra = member?.benefits?.dental?.extra || {};
          const rows = [
            { label: 'Endo', value: extra.endo },
            { label: 'Perio', value: extra.perio },
            { label: 'X-Rays', value: extra.xrays },
            { label: 'OS', value: extra.os || extra.oralSurgery },
            { label: 'Exam', value: extra.exam },
            { label: 'Proph', value: extra.proph || extra.prophylaxis },
            { label: 'BW', value: extra.bw },
            { label: 'FMX', value: extra.fmx },
            { label: 'Fluor', value: extra.fluor },
            { label: 'Fluor Age', value: extra.fluorAge },
            { label: 'Seal', value: extra.seal },
            { label: 'Seal Freq', value: extra.sealFreq },
            { label: 'Seal Age', value: extra.sealAge },
            { label: 'Seal Teeth', value: extra.sealTeeth },
            { label: 'Comp', value: extra.comp },
            { label: 'Crown', value: extra.crown },
            { label: 'Bridge', value: extra.bridge },
            { label: 'Dentur', value: extra.dentur },
          ];
          return rows.map((r) => (
            <div className="bs-item" key={r.label}>
              <div className="bs-label">{r.label}</div>
              <div className="bs-value">{r.value || '--'}</div>
            </div>
          ));
        })()}
      </div>
    </div>
  );

  const SimpleSummary = () => (
    <div className="tab-pad">
      <div className="bs-grid">
        <GridRow label="Coverage" value={member?.benefits?.[selectedCoverage]?.coverage} />
        <GridRow label="Restrictions" value={member?.benefits?.[selectedCoverage]?.restrictions} />
        <GridRow label="Opt-In" value={member?.coverageDetails?.[selectedCoverage]?.optIn} />
        <GridRow label="Effective Date" value={member?.benefits?.[selectedCoverage]?.effectiveDate} />
        <GridRow label="Term Date" value={member?.benefits?.[selectedCoverage]?.termDate || member?.coverageDetails?.[selectedCoverage]?.terminationDate} />
      </div>
    </div>
  );

  const LifeAddSummary = () => (
    <div className="tab-pad">
      <div className="bs-grid">
        <GridRow label="Benefit Schedule" value={member?.benefits?.life_add?.benefitSchedule} />
        <GridRow label="Maximum Benefit" value={member?.benefits?.life_add?.maximumBenefit} />
      </div>
      <div className="mt-16">
        <div className="info-note">If member needs life forms, they can email: <a href="mailto:admin.changes@rsli.com">admin.changes@rsli.com</a></div>
        <div className="info-note">If member has life claims or benefit questions, they can call: <a href="tel:8003517500">800-351-7500</a></div>
      </div>
    </div>
  );

  const LtdSummary = () => (
    <div className="tab-pad">
      <div className="bs-grid">
        <GridRow label="Benefit Amount" value={member?.benefits?.ltd?.benefitAmount} />
        <GridRow label="Guaranteed Issue" value={member?.benefits?.ltd?.guaranteedIssue} />
        <GridRow label="Elimination Period" value={member?.benefits?.ltd?.eliminationPeriod} />
        <GridRow label="Benefit Period" value={member?.benefits?.ltd?.benefitPeriod} />
      </div>
      <div className="mt-16">
        <div className="info-note">If member has LTD claims or benefit questions, they can call: <a href="tel:8003517500">800-351-7500</a></div>
      </div>
    </div>
  );

  const StdSummary = () => (
    <div className="tab-pad">
      <div className="bs-grid">
        <GridRow label="Benefit Amount" value={member?.benefits?.std?.benefitAmount} />
        <GridRow label="Maximum Weekly Benefit" value={member?.benefits?.std?.maxWeekly} />
        <GridRow label="Guaranteed Issue" value={member?.benefits?.std?.guaranteedIssue} />
        <GridRow label="Elimination Period" value={member?.benefits?.std?.eliminationPeriod} />
        <GridRow label="Benefit Period" value={member?.benefits?.std?.benefitPeriod} />
      </div>
      <div className="mt-16">
        <div className="info-note">If member has STD claims or benefit questions, they can call: <a href="tel:8003517500">800-351-7500</a></div>
      </div>
    </div>
  );

  const getTabs = () => {
    const summary = selectedCoverage === 'dental' ? (
      <DentalSummary />
    ) : selectedCoverage === 'life_add' ? (
      <LifeAddSummary />
    ) : selectedCoverage === 'ltd' ? (
      <LtdSummary />
    ) : selectedCoverage === 'std' ? (
      <StdSummary />
    ) : (
      <SimpleSummary />
    );

    if (selectedCoverage === 'life_add' || selectedCoverage === 'ltd' || selectedCoverage === 'std') {
      return [
        { key: 'benefit', label: 'Benefit Summary', children: summary },
        { key: 'coverage', label: 'Coverage History', children: <div className="tab-pad">Coverage history coming soon...</div> },
        { key: 'case', label: 'Case History', children: <div className="tab-pad">Case history coming soon...</div> },
      ];
    }

    return [
      { key: 'benefit', label: 'Benefit Summary', children: summary },
      { key: 'claim', label: 'Claim History', children: <div className="tab-pad"><ClaimHistory claims={member?.claims} /></div> },
      { key: 'patient', label: 'Patient History', children: <div className="tab-pad"><PatientHistory /></div> },
      { key: 'billing', label: 'Billing & Payment', children: <div className="tab-pad"><BillingPayment /></div> },
      { key: 'coverage', label: 'Coverage History', children: <div className="tab-pad"><CoverageHistory /></div> },
      { key: 'case', label: 'Case History', children: <div className="tab-pad"><CaseHistory /></div> },
    ];
  };

  return (
    <div className="member-dashboard">
      <div className="content-split">
        {/* Left stack: filters (no bg) + card */}
        <div className="left-stack">
          <div className="md-filters">
            <Select
              className="filter-select attach-bottom"
              suffixIcon={<i className={`fas fa-chevron-${coverageOpen ? 'up' : 'down'}`}></i>}
              onDropdownVisibleChange={(o) => setCoverageOpen(o)}
              style={{ width: 240 }}
              value={selectedCoverage}
              placeholder="Coverage type"
              disabled={!member}
              onChange={(v) => setSelectedCoverage(v)}
            >
              <Option value="dental">Dental</Option>
              <Option value="ortho">Ortho</Option>
              <Option value="vision">Vision</Option>
              <Option value="fusion">Fusion</Option>
              <Option value="lasik">Lasik</Option>
              <Option value="hearing">Hearing</Option>
              <Option value="life_add">Life and AD&D</Option>
              <Option value="ltd">LTD (Long term disability)</Option>
              <Option value="std">STD (Short term disability)</Option>
            </Select>
            <Select
              className="filter-select attach-bottom"
              suffixIcon={<i className={`fas fa-chevron-${memberOpen ? 'up' : 'down'}`}></i>}
              onDropdownVisibleChange={(o) => setMemberOpen(o)}
              style={{ width: 240 }}
              value={selectedPerson}
              placeholder="Member"
              disabled={!member}
              onChange={(v) => setSelectedPerson(v)}
            >
              {member && (
                <>
                  <Option value="primary">{member.name}</Option>
                  {(member.dependents || []).map((d, idx) => (
                    <Option value={`dep-${idx}`} key={`dep-${idx}`}>
                      {d.name} [Dependent]
                    </Option>
                  ))}
                </>
              )}
            </Select>
          </div>
          <Card className="left-80" bordered={false} bodyStyle={{ padding: 0 }}>
            {isMobile ? (
              <div className="md-tabs-mobile">
                <Select
                  value={activeTab}
                  onChange={setActiveTab}
                  disabled={!member}
                  style={{ width: '100%' }}
                >
                  {getTabs().map((t) => (
                    <Option key={t.key} value={t.key}>{t.label}</Option>
                  ))}
                </Select>
                <div>
                  {(getTabs().find((t) => t.key === activeTab) || getTabs()[0]).children}
                </div>
              </div>
            ) : (
              <Tabs
                defaultActiveKey="benefit"
                items={getTabs()}
                className={`dashboard-tabs ${!member ? 'ant-tabs-disabled' : ''}`}
                disabled={!member}
              />
            )}
          </Card>
        </div>

        {/* Right fixed width quick actions */}
        {!showFab && <QuickActions member={member} activePersonKey={selectedPerson} disabled={!member} />}
      </div>
      
      {/* FAB for mobile/small screens */}
      {showFab && <FloatingActionButton member={member} activePersonKey={selectedPerson} />}
    </div>
  );
};

export default MemberDashboard;


