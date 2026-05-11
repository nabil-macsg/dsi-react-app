import React, { useMemo, useState } from "react";

import "./Tools.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const toolsData = [
  {
    sn: "HYD475BP112",
    type: "PBL Sub",
    size: '4-3/4"',
    status: "In storage",
    region: "Middle East",
    agent: "DSI FZE Yard",
    lastService: "27 Jan 2026",
    nextDue: "27 Jul 2026",
    dueSeverity: "ok",
    cost: "42,500",
  },
  {
    sn: "HYD825BP399",
    type: "PBL High Flow",
    size: '8-1/4"',
    status: "In field",
    region: "Central Asia",
    agent: "Zhigermunai LLP",
    lastService: "06 Jan 2026",
    nextDue: "06 Jul 2026",
    dueSeverity: "warn",
    cost: "68,000",
  },
  {
    sn: "HYD525BP044",
    type: "PBL Sub",
    size: '5-1/4"',
    status: "Under maintenance",
    region: "Middle East",
    agent: "ADES Group",
    lastService: "10 Oct 2025",
    nextDue: "10 Apr 2026",
    dueSeverity: "overdue",
    cost: "48,000",
  },
  {
    sn: "HYD675BP211",
    type: "PBL Sub",
    size: '6-3/4"',
    status: "In field",
    region: "Middle East",
    agent: "Target Energy",
    lastService: "15 Nov 2025",
    nextDue: "15 May 2026",
    dueSeverity: "warn",
    cost: "55,000",
  },
  {
    sn: "HYD950BP033",
    type: "PBL Sub",
    size: '9-1/2"',
    status: "In storage",
    region: "Middle East",
    agent: "DSI FZE Yard",
    lastService: "02 Dec 2025",
    nextDue: "02 Jun 2026",
    dueSeverity: "ok",
    cost: "82,000",
  },
  {
    sn: "HYD700BP518",
    type: "PBL High Torque",
    size: '7"',
    status: "In field",
    region: "Africa",
    agent: "Nile Drilling",
    lastService: "18 Dec 2025",
    nextDue: "18 Jun 2026",
    dueSeverity: "ok",
    cost: "61,000",
  },
  {
    sn: "HYD350BP127",
    type: "PBL Compact",
    size: '3-1/2"',
    status: "Under maintenance",
    region: "South Asia",
    agent: "DSI Service Bay",
    lastService: "22 Sep 2025",
    nextDue: "22 Mar 2026",
    dueSeverity: "overdue",
    cost: "36,500",
  },
  {
    sn: "HYD875BP602",
    type: "PBL High Flow",
    size: '8-3/4"',
    status: "In storage",
    region: "Central Asia",
    agent: "KazMunay Tools",
    lastService: "11 Jan 2026",
    nextDue: "11 Jul 2026",
    dueSeverity: "ok",
    cost: "74,000",
  },
  {
    sn: "HYD600BP289",
    type: "PBL Sub",
    size: '6"',
    status: "Pending retirement",
    region: "Middle East",
    agent: "Al Mansoori",
    lastService: "08 Aug 2025",
    nextDue: "08 Feb 2026",
    dueSeverity: "overdue",
    cost: "44,000",
  },
  {
    sn: "HYD775BP455",
    type: "PBL High Torque",
    size: '7-3/4"',
    status: "In field",
    region: "South Asia",
    agent: "PetroServe India",
    lastService: "30 Dec 2025",
    nextDue: "30 Jun 2026",
    dueSeverity: "warn",
    cost: "66,500",
  },
];

const statusClasses = {
  "In field": "p-field",
  "In storage": "p-storage",
  "Under maintenance": "p-maint",
  "In transit": "p-transit",
  Retired: "p-retired",
};

export default function Tools() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredTools = useMemo(() => {
    return toolsData.filter((t) => {
      return (
        (!statusFilter || t.status === statusFilter) &&
        (!regionFilter || t.region === regionFilter) &&
        (!sizeFilter || t.size === sizeFilter) &&
        (!search ||
          t.sn.toLowerCase().includes(search.toLowerCase()) ||
          t.type.toLowerCase().includes(search.toLowerCase()) ||
          t.agent.toLowerCase().includes(search.toLowerCase()) ||
          t.region.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }, [search, statusFilter, regionFilter, sizeFilter]);

  const toggleRow = (sn) => {
    setSelectedRows((prev) =>
      prev.includes(sn)
        ? prev.filter((id) => id !== sn)
        : [...prev, sn]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === filteredTools.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredTools.map((t) => t.sn));
    }
  };

  return (
    <Layout>
      <Header
        title="Tool Inventory"
        subtitle="142 tools registered · Last synced with Dynamics 4 min ago"
        syncText="Last synced with Dynamics 4 min ago"
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
              <Link to="/tools/add">Register Tool</Link>
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
                {selectedRows.length} tool
                {selectedRows.length > 1 ? "s" : ""} selected
              </span>

              <button className="bulk-btn">
                <i className="fa-solid fa-paper-plane"></i>
                Dispatch
              </button>

              <button className="bulk-btn">
                <i className="fa-solid fa-gear"></i>
                Schedule Maintenance
              </button>

              <button className="bulk-btn">
                <i className="fa-solid fa-file-export"></i>
                Export
              </button>

              <span
                className="bulk-clear"
                onClick={() => setSelectedRows([])}
              >
                <i className="fa-solid fa-xmark"></i>
                Clear
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
                  placeholder="Search serial number, type, agent…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All statuses</option>
                <option>In field</option>
                <option>In storage</option>
                <option>Under maintenance</option>
                <option>In transit</option>
                <option>Retired</option>
              </select>

              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option value="">All regions</option>
                <option>Middle East</option>
                <option>Central Asia</option>
                <option>South Asia</option>
                <option>Africa</option>
              </select>

              <select
                value={sizeFilter}
                onChange={(e) => setSizeFilter(e.target.value)}
              >
                <option value="">All sizes</option>
                <option>4-3/4"</option>
                <option>5-1/4"</option>
                <option>6-3/4"</option>
                <option>8-1/4"</option>
                <option>9-1/2"</option>
              </select>

              <select>
                <option value="">All types</option>
                <option>PBL Sub</option>
                <option>High Flow Sub</option>
                <option>Jetting Tool</option>
              </select>
            </div>

            <div className="filters-right">
              <span className="result-count">
                Showing {filteredTools.length} of 142 tools
              </span>

              <div className="view-toggle">
                <button className="view-btn active">
                  <i className="fa-solid fa-table-list"></i>
                </button>

                <button className="view-btn">
                  <i className="fa-solid fa-grip"></i>
                </button>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="table-wrap">

            <table>
              <thead>
                <tr>
                  <th style={{ width: "40px" }}>
                    <input
                      type="checkbox"
                      checked={
                        filteredTools.length > 0 &&
                        selectedRows.length === filteredTools.length
                      }
                      onChange={toggleAll}
                    />
                  </th>

                  <th>Serial No</th>
                  <th>Tool Type</th>
                  <th>Size</th>
                  <th>Status</th>
                  <th>Region</th>
                  <th>Assigned Agent</th>
                  <th>Last Service</th>
                  <th>Next Service Due</th>
                  <th>Acq. Cost (USD)</th>
                  <th style={{ width: "90px" }}></th>
                </tr>
              </thead>

              <tbody>
                {filteredTools.map((tool) => {
                  const isSelected = selectedRows.includes(tool.sn);

                  return (
                    <tr
                      key={tool.sn}
                      className={isSelected ? "selected" : ""}
                      onClick={() => toggleRow(tool.sn)}
                    >
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(tool.sn)}
                        />
                      </td>

                      <td className="mono">{tool.sn}</td>

                      <td>{tool.type}</td>

                      <td className="mono">{tool.size}</td>

                      <td>
                        <span
                          className={`pill ${statusClasses[tool.status]}`}
                        >
                          <span className="pill-dot"></span>
                          {tool.status}
                        </span>
                      </td>

                      <td>{tool.region}</td>

                      <td>{tool.agent}</td>

                      <td>{tool.lastService}</td>

                      <td className={`date-${tool.dueSeverity}`}>
                        {tool.nextDue}
                      </td>

                      <td className="mono">${tool.cost}</td>

                      <td>
                        <div className="row-actions">

                          <button className="row-btn">
                            <i className="fa-solid fa-eye"></i>
                          </button>

                          <button className="row-btn">
                            <i className="fa-solid fa-paper-plane"></i>
                          </button>

                          <button className="row-btn">
                            <i className="fa-solid fa-ellipsis"></i>
                          </button>

                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="pagination">

            <div className="page-info">
              Page 1 of 10 · 142 tools total
            </div>

            <div className="page-btns">

              <button className="page-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <button className="page-btn active">1</button>

              <button className="page-btn">2</button>

              <button className="page-btn">3</button>

              <button className="page-btn dots">
                ...
              </button>

              <button className="page-btn">10</button>

              <button className="page-btn">
                <i className="fa-solid fa-chevron-right"></i>
              </button>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}