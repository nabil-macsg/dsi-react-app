import React, { useMemo, useState } from "react";
import "./Tools.scss";   // Create this file
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const movementsData = [
  {
    dtRef: "DT-11005261",
    tools: "2 × 8-1/4\" PBL",
    destination: "Zhigermunai LLP",
    region: "Central Asia",
    dispatched: "12 Jan 2026",
    expectedArrival: "18 Jan 2026",
    status: "Delivered",
    statusClass: "p-delivered",
  },
  {
    dtRef: "DT-11005289",
    tools: "1 × 4-3/4\" PBL",
    destination: "ADES Group",
    region: "Middle East",
    dispatched: "28 Apr 2026",
    expectedArrival: "05 May 2026",
    status: "In Transit",
    statusClass: "p-transit",
  },
  {
    dtRef: "DT-11005301",
    tools: "3 × 6-3/4\" PBL",
    destination: "Target Energy",
    region: "Africa",
    dispatched: "02 May 2026",
    expectedArrival: "10 May 2026",
    status: "In Transit",
    statusClass: "p-transit",
  },
  {
    dtRef: "DT-11005308",
    tools: "1 × 9-1/2\" PBL",
    destination: "DSI Maintenance",
    region: "Middle East",
    dispatched: "05 May 2026",
    expectedArrival: "08 May 2026",
    status: "Initiated",
    statusClass: "p-initiated",
  },
  {
    dtRef: "DT-11005312",
    tools: "2 × 8-1/4\" PBL",
    destination: "Saipem Nigeria",
    region: "Africa",
    dispatched: "08 May 2026",
    expectedArrival: "15 May 2026",
    status: "Discrepancy",
    statusClass: "p-discrepancy",
  },
  {
    dtRef: "DT-11005318",
    tools: "1 × 5-1/4\" PBL",
    destination: "Al Mansoori",
    region: "Middle East",
    dispatched: "09 May 2026",
    expectedArrival: "13 May 2026",
    status: "Delivered",
    statusClass: "p-delivered",
  },
  {
    dtRef: "DT-11005322",
    tools: "2 × 7\" PBL",
    destination: "PetroServe India",
    region: "South Asia",
    dispatched: "10 May 2026",
    expectedArrival: "16 May 2026",
    status: "In Transit",
    statusClass: "p-transit",
  },
  {
    dtRef: "DT-11005327",
    tools: "1 × 6\" PBL",
    destination: "Nile Drilling",
    region: "Africa",
    dispatched: "11 May 2026",
    expectedArrival: "18 May 2026",
    status: "Initiated",
    statusClass: "p-initiated",
  },
  {
    dtRef: "DT-11005331",
    tools: "4 × 8-3/4\" PBL",
    destination: "KazMunay Tools",
    region: "Central Asia",
    dispatched: "11 May 2026",
    expectedArrival: "19 May 2026",
    status: "In Transit",
    statusClass: "p-transit",
  },
  {
    dtRef: "DT-11005336",
    tools: "1 × 4-1/2\" PBL",
    destination: "DSI Africa Hub",
    region: "Africa",
    dispatched: "12 May 2026",
    expectedArrival: "17 May 2026",
    status: "Delivered",
    statusClass: "p-delivered",
  },
  {
    dtRef: "DT-11005341",
    tools: "2 × 9-1/4\" PBL",
    destination: "KazDrill Services",
    region: "Central Asia",
    dispatched: "12 May 2026",
    expectedArrival: "20 May 2026",
    status: "Discrepancy",
    statusClass: "p-discrepancy",
  },
  {
    dtRef: "DT-11005349",
    tools: "3 × 6-3/4\" PBL",
    destination: "Halliburton UAE",
    region: "Middle East",
    dispatched: "13 May 2026",
    expectedArrival: "18 May 2026",
    status: "In Transit",
    statusClass: "p-transit",
  },
];

const statusClasses = {
  "Delivered": "p-delivered",
  "In Transit": "p-transit",
  "Initiated": "p-initiated",
  "Discrepancy": "p-discrepancy",
  "Completed": "p-completed",
};

export default function AllDispatch() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredMovements = useMemo(() => {
    return movementsData.filter((m) => {
      const matchesSearch =
        !search ||
        m.dtRef.toLowerCase().includes(search.toLowerCase()) ||
        m.destination.toLowerCase().includes(search.toLowerCase()) ||
        m.tools.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = !statusFilter || m.status === statusFilter;
      const matchesRegion = !regionFilter || m.region === regionFilter;

      return matchesSearch && matchesStatus && matchesRegion;
    });
  }, [search, statusFilter, regionFilter]);

  const toggleRow = (dtRef) => {
    setSelectedRows((prev) =>
      prev.includes(dtRef) ? prev.filter((id) => id !== dtRef) : [...prev, dtRef]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === filteredMovements.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredMovements.map((m) => m.dtRef));
    }
  };

  return (
    <Layout>
      <Header
        title="All Dispatches"
        subtitle="All dispatches & movements • 23 active"
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
              <Link to="/dispatch/add">New Dispatch</Link>
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="tools-page">   {/* Reusing same container class */}

          {/* BULK BAR */}
          {selectedRows.length > 0 && (
            <div className="bulk-bar">
              <span className="bulk-count">
                {selectedRows.length} movement{selectedRows.length > 1 ? "s" : ""} selected
              </span>
              <button className="bulk-btn">
                <i className="fa-solid fa-truck"></i> Update Status
              </button>
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
                  placeholder="Search DT ref, agent, tools..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">All Statuses</option>
                <option value="Delivered">Delivered</option>
                <option value="In Transit">In Transit</option>
                <option value="Initiated">Initiated</option>
                <option value="Discrepancy">Discrepancy</option>
              </select>

              <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
                <option value="">All Regions</option>
                <option value="Middle East">Middle East</option>
                <option value="Central Asia">Central Asia</option>
                <option value="Africa">Africa</option>
              </select>
            </div>

            <div className="filters-right">
              <span className="result-count">
                Showing {filteredMovements.length} of 42 movements
              </span>
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
                      checked={selectedRows.length === filteredMovements.length && filteredMovements.length > 0}
                      onChange={toggleAll}
                    />
                  </th>
                  <th>DT Reference</th>
                  <th>Tools</th>
                  <th>Destination</th>
                  <th>Region</th>
                  <th>Dispatched</th>
                  <th>Expected Arrival</th>
                  <th>Status</th>
                  <th style={{ width: "80px" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredMovements.map((movement) => {
                  const isSelected = selectedRows.includes(movement.dtRef);
                  return (
                    <tr
                      key={movement.dtRef}
                      className={isSelected ? "selected" : ""}
                      onClick={() => toggleRow(movement.dtRef)}
                    >
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(movement.dtRef)}
                        />
                      </td>
                      <td className="mono">{movement.dtRef}</td>
                      <td>{movement.tools}</td>
                      <td>{movement.destination}</td>
                      <td>{movement.region}</td>
                      <td>{movement.dispatched}</td>
                      <td>{movement.expectedArrival}</td>
                      <td>
                        <span className={`pill ${movement.statusClass}`}>
                          <span className="pill-dot"></span>
                          {movement.status}
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

          {/* PAGINATION */}
          <div className="pagination">
            <div className="page-info">Page 1 of 5 · 42 total movements</div>
            <div className="page-btns">
              <button className="page-btn"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">4</button>
              <button className="page-btn"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}