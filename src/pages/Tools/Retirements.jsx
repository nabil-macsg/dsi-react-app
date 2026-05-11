import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "./Tools.scss"; // Reusing existing styles
import Layout from "../../components/Layout";
import Header from "../../components/Header";

const retiredTools = [
  {
    retirementId: "RT-2026-007",
    sn: "HYD675BP188",
    type: "6-3/4\" PBL Sub",
    size: '6-3/4"',
    retiredDate: "10 May 2026",
    reason: "Beyond economical repair - Severe corrosion",
    approvedBy: "Shafi Karunan",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-008",
    sn: "HYD525BP044",
    type: "5-1/4\" PBL Sub",
    size: '5-1/4"',
    retiredDate: "05 May 2026",
    reason: "Multiple failed pressure tests",
    approvedBy: "Sasikarunan",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-009",
    sn: "HYD950BP019",
    type: "9-1/2\" PBL Sub",
    size: '9-1/2"',
    retiredDate: "28 Apr 2026",
    reason: "Irreparable body damage",
    approvedBy: "Ganeshkumar",
    status: "Pending Approval",
  },
  {
    retirementId: "RT-2026-010",
    sn: "HYD350BP127",
    type: "3-1/2\" PBL Compact",
    size: '3-1/2"',
    retiredDate: "14 May 2026",
    reason: "Excessive internal wear after repeated field failures",
    approvedBy: "Rahul Menon",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-011",
    sn: "HYD600BP289",
    type: "6\" PBL Sub",
    size: '6"',
    retiredDate: "12 May 2026",
    reason: "Tool body deformation detected during inspection",
    approvedBy: "Sujithkumar",
    status: "Pending Approval",
  },
  {
    retirementId: "RT-2026-012",
    sn: "HYD925BP731",
    type: "9-1/4\" PBL High Flow",
    size: '9-1/4"',
    retiredDate: "09 May 2026",
    reason: "Repeated seal failures and pressure instability",
    approvedBy: "Yerlan Sadykov",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-013",
    sn: "HYD450BP188",
    type: "4-1/2\" PBL Compact",
    size: '4-1/2"',
    retiredDate: "16 May 2026",
    reason: "Obsolete configuration replaced by upgraded model",
    approvedBy: "Ganeshkumar",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-014",
    sn: "HYD775BP455",
    type: "7-3/4\" PBL High Torque",
    size: '7-3/4"',
    retiredDate: "18 May 2026",
    reason: "Severe thread damage affecting operational safety",
    approvedBy: "Shafi Karunan",
    status: "Pending Approval",
  },
  {
    retirementId: "RT-2026-015",
    sn: "HYD700BP518",
    type: "7\" PBL High Torque",
    size: '7"',
    retiredDate: "19 May 2026",
    reason: "Excessive fatigue cracks identified during inspection",
    approvedBy: "Azamat Bekov",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-016",
    sn: "HYD875BP602",
    type: "8-3/4\" PBL High Flow",
    size: '8-3/4"',
    retiredDate: "20 May 2026",
    reason: "Hydraulic chamber damage beyond repair limits",
    approvedBy: "Ruslan Akhmetov",
    status: "Pending Approval",
  },
  {
    retirementId: "RT-2026-017",
    sn: "HYD475BP112",
    type: "4-3/4\" PBL Sub",
    size: '4-3/4"',
    retiredDate: "21 May 2026",
    reason: "Repeated operational failures during deployment",
    approvedBy: "Sasikarunan",
    status: "Approved",
  },
  {
    retirementId: "RT-2026-018",
    sn: "HYD825BP399",
    type: "8-1/4\" PBL High Flow",
    size: '8-1/4"',
    retiredDate: "22 May 2026",
    reason: "Severe corrosion and non-compliance with QA standards",
    approvedBy: "Ganeshkumar",
    status: "Rejected",
  },
];

export default function Retirements() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredRetirements = useMemo(() => {
    return retiredTools.filter((r) => {
      const matchesSearch =
        !search ||
        r.retirementId.toLowerCase().includes(search.toLowerCase()) ||
        r.sn.toLowerCase().includes(search.toLowerCase()) ||
        r.reason.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = !statusFilter || r.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === filteredRetirements.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredRetirements.map((r) => r.retirementId));
    }
  };

  return (
    <Layout>
      <Header
        title="Retirements"
        subtitle="Retired tools & assets • 12 total"
        rightContent={
          <>
            <button className="topbar-btn">
              <i className="fa-solid fa-download"></i>
            </button>
            <button className="topbar-btn">
              <i className="fa-solid fa-sliders"></i>
            </button>
            <button className="add-btn">
              <i className="fa-solid fa-plus"></i>
              <Link to="/tools/retirements/add">Retire Tool</Link>
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="tools-page">

          {/* BULK BAR */}
          {selectedRows.length > 0 && (
            <div className="bulk-bar">
              <span className="bulk-count">
                {selectedRows.length} tool{selectedRows.length > 1 ? "s" : ""} selected
              </span>
              <button className="bulk-btn">
                <i className="fa-solid fa-file-export"></i> Export
              </button>
              <span className="bulk-clear" onClick={() => setSelectedRows([])}>
                <i className="fa-solid fa-xmark"></i> Clear
              </span>
            </div>
          )}

          {/* FILTERS */}
          <div className="filters-bar">
            <div className="filters-left">
              <div className="search-wrap">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search retirement ID, serial number..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">All Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending Approval">Pending Approval</option>
              </select>
            </div>

            <div className="filters-right">
              <span className="result-count">
                Showing {filteredRetirements.length} of 12 retirements
              </span>
            </div>
          </div>

          {/* TABLE */}
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "40px" }}>
                    <input type="checkbox" checked={selectedRows.length === filteredRetirements.length && filteredRetirements.length > 0} onChange={toggleAll} />
                  </th>
                  <th>Retirement ID</th>
                  <th>Serial Number</th>
                  <th>Tool Type</th>
                  <th>Retired Date</th>
                  <th>Reason</th>
                  <th>Approved By</th>
                  <th>Status</th>
                  <th style={{ width: "80px" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredRetirements.map((ret) => {
                  const isSelected = selectedRows.includes(ret.retirementId);
                  return (
                    <tr key={ret.retirementId} className={isSelected ? "selected" : ""} onClick={() => toggleRow(ret.retirementId)}>
                      <td onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" checked={isSelected} onChange={() => toggleRow(ret.retirementId)} />
                      </td>
                      <td className="mono">{ret.retirementId}</td>
                      <td className="mono">{ret.sn}</td>
                      <td>{ret.type}</td>
                      <td>{ret.retiredDate}</td>
                      <td style={{ maxWidth: "280px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {ret.reason}
                      </td>
                      <td>{ret.approvedBy}</td>
                      <td>
                        <span className={`pill ${ret.status === "Approved" ? "p-done" : "p-pending"}`}>
                          <span className="pill-dot"></span>
                          {ret.status}
                        </span>
                      </td>
                      <td>
                        <div className="row-actions">
                          <button className="row-btn"><i className="fa-solid fa-eye"></i></button>
                          <button className="row-btn"><i className="fa-solid fa-ellipsis"></i></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <div className="page-info">Page 1 of 3 · 12 total retirements</div>
            <div className="page-btns">
              <button className="page-btn"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}