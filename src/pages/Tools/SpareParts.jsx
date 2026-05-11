import React, { useMemo, useState } from "react";
import "./Tools.scss"; 
import "./SpareParts.scss"; 

import Layout from "../../components/Layout";
import Header from "../../components/Header";

const sparePartsData = [
  {
    partType: "Seal Kit - Standard",
    partNo: "HTSEDM417968",
    agent: "Zhigermunai LLP",
    previouslyDispatched: 18,
    usedInMaintenance: 12,
    balanceInHand: 6,
    lastDispatchDate: "08 May 2026",
  },
  {
    partType: "Activation Ball 2.75\"",
    partNo: "ACT884521",
    agent: "ADES Group",
    previouslyDispatched: 45,
    usedInMaintenance: 38,
    balanceInHand: 7,
    lastDispatchDate: "12 May 2026",
  },
  {
    partType: "Locking Ball 1.375\"",
    partNo: "LKB998741",
    agent: "Target Energy",
    previouslyDispatched: 24,
    usedInMaintenance: 19,
    balanceInHand: 5,
    lastDispatchDate: "05 May 2026",
  },
  {
    partType: "Seal Kit - Standard",
    partNo: "HTSEDM417968",
    agent: "Saipem Nigeria",
    previouslyDispatched: 32,
    usedInMaintenance: 28,
    balanceInHand: 4,
    lastDispatchDate: "15 May 2026",
  },
  {
    partType: "Dart 2.75\"",
    partNo: "DART-275-W",
    agent: "Zhigermunai LLP",
    previouslyDispatched: 15,
    usedInMaintenance: 15,
    balanceInHand: 0,
    lastDispatchDate: "02 May 2026",
  },
  {
    partType: "O-Ring Kit",
    partNo: "ORK-675",
    agent: "ADES Group",
    previouslyDispatched: 28,
    usedInMaintenance: 35,
    balanceInHand: -7,
    lastDispatchDate: "10 May 2026",
  },
];

export default function SpareParts() {
  const [search, setSearch] = useState("");
  const [agentFilter, setAgentFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredData = useMemo(() => {
    return sparePartsData.filter((item) => {
      const matchesSearch =
        !search ||
        item.partType.toLowerCase().includes(search.toLowerCase()) ||
        item.partNo.toLowerCase().includes(search.toLowerCase()) ||
        item.agent.toLowerCase().includes(search.toLowerCase());

      const matchesAgent = !agentFilter || item.agent === agentFilter;

      return matchesSearch && matchesAgent;
    });
  }, [search, agentFilter]);

  const toggleRow = (partNo) => {
    setSelectedRows((prev) =>
      prev.includes(partNo) ? prev.filter((x) => x !== partNo) : [...prev, partNo]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map((item) => item.partNo));
    }
  };

  return (
    <Layout>
      <Header
        title="Spare Parts Tracker"
        subtitle="Inventory per agent • Real-time balance"
        rightContent={
          <>
            <button className="topbar-btn">
              <i className="fa-solid fa-download"></i>
            </button>
            <button className="topbar-btn">
              <i className="fa-solid fa-sliders"></i>
            </button>
            {/* <button className="add-btn">
              <i className="fa-solid fa-plus"></i> Add Spare Part
            </button> */}
          </>
        }
      />

      <div className="scroll-body">
        <div className="tools-page">

          {/* Filters */}
          <div className="filters-bar">
            <div className="filters-left">
              <div className="search-wrap">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search part type, number or agent..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select value={agentFilter} onChange={(e) => setAgentFilter(e.target.value)}>
                <option value="">All Agents</option>
                <option value="Zhigermunai LLP">Zhigermunai LLP</option>
                <option value="ADES Group">ADES Group</option>
                <option value="Target Energy">Target Energy</option>
                <option value="Saipem Nigeria">Saipem Nigeria</option>
              </select>
            </div>

            <div className="filters-right">
              <span className="result-count">
                Showing {filteredData.length} records
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "40px" }}>
                    <input
                      type="checkbox"
                      checked={selectedRows.length === filteredData.length && filteredData.length > 0}
                      onChange={toggleAll}
                    />
                  </th>
                  <th>Part Type</th>
                  <th>Part Number</th>
                  <th>Agent</th>
                  <th>Previously Dispatched</th>
                  <th>Used in Maintenance</th>
                  <th>Balance in Hand</th>
                  <th>Last Dispatch Date</th>
                  <th style={{ width: "80px" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => {
                  const isSelected = selectedRows.includes(item.partNo);
                  const balance = item.balanceInHand;

                  return (
                    <tr key={item.partNo} className={isSelected ? "selected" : ""}>
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(item.partNo)}
                        />
                      </td>
                      <td>{item.partType}</td>
                      <td className="mono">{item.partNo}</td>
                      <td>{item.agent}</td>
                      <td className="mono text-center">{item.previouslyDispatched}</td>
                      <td className="mono text-center">{item.usedInMaintenance}</td>
                      <td className="mono text-center">
                        <span className={`balance-badge ${balance <= 0 ? "low" : "ok"}`}>
                          {balance}
                        </span>
                      </td>
                      <td>{item.lastDispatchDate}</td>
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

          {/* Pagination */}
          <div className="pagination">
            <div className="page-info">Page 1 of 3 · 24 total records</div>
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