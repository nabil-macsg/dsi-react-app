import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "./Tools.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

const receiptsData = [
  {
    receiptId: "RC-2026-018",
    dtRef: "DT-11005261",
    toolsCount: 2,
    toolsDetail: '8-1/4" PBL High Flow × 2',
    receivedDate: "18 Jan 2026",
    receivedBy: "Azamat Bekov",
    status: "Completed",
    condition: "Good",
    discrepancies: 0,
  },
  {
    receiptId: "RC-2026-019",
    dtRef: "DT-11005289",
    toolsCount: 1,
    toolsDetail: '4-3/4" PBL Sub',
    receivedDate: "05 May 2026",
    receivedBy: "Ganeshkumar",
    status: "Completed with Notes",
    condition: "Incomplete",
    discrepancies: 1,
  },
  {
    receiptId: "RC-2026-020",
    dtRef: "DT-11005301",
    toolsCount: 3,
    toolsDetail: '6-3/4" PBL Sub × 3',
    receivedDate: "10 May 2026",
    receivedBy: "Sasikarunan",
    status: "Pending Verification",
    condition: "Pending",
    discrepancies: 0,
  },
  {
    receiptId: "RC-2026-021",
    dtRef: "DT-11005312",
    toolsCount: 2,
    toolsDetail: '8-1/4" PBL High Flow × 2',
    receivedDate: "15 May 2026",
    receivedBy: "Sujithkumar",
    status: "Completed",
    condition: "Good",
    discrepancies: 0,
  },
];

export default function Receipts() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredReceipts = useMemo(() => {
    return receiptsData.filter((r) => {
      const matchesSearch =
        !search ||
        r.receiptId.toLowerCase().includes(search.toLowerCase()) ||
        r.dtRef.toLowerCase().includes(search.toLowerCase()) ||
        r.receivedBy.toLowerCase().includes(search.toLowerCase());

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
    if (selectedRows.length === filteredReceipts.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredReceipts.map((r) => r.receiptId));
    }
  };

  return (
    <Layout>
      <Header
        title="Receipts"
        subtitle="All received dispatches • 18 total"
        rightContent={
          <>
            <button className="topbar-btn">
              <i className="fa-solid fa-download"></i>
            </button>
            <button className="topbar-btn">
              <i className="fa-solid fa-sliders"></i>
            </button>
            <button className="add-btn">
                <Link to={'/receipt/detail'}>  
              <i className="fa-solid fa-plus"></i> New Receipt</Link>
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
                {selectedRows.length} receipt{selectedRows.length > 1 ? "s" : ""} selected
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
                  placeholder="Search receipt ID, DT ref, received by..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Completed with Notes">Completed with Notes</option>
                <option value="Pending Verification">Pending Verification</option>
              </select>
            </div>

            <div className="filters-right">
              <span className="result-count">
                Showing {filteredReceipts.length} of 18 receipts
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
                      checked={selectedRows.length === filteredReceipts.length && filteredReceipts.length > 0}
                      onChange={toggleAll}
                    />
                  </th>
                  <th>Receipt ID</th>
                  <th>DT Reference</th>
                  <th>Tools Received</th>
                  <th>Received Date</th>
                  <th>Received By</th>
                  <th>Condition</th>
                  <th>Discrepancies</th>
                  <th>Status</th>
                  <th style={{ width: "80px" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredReceipts.map((receipt) => {
                  const isSelected = selectedRows.includes(receipt.receiptId);

                  return (
                    <tr
                      key={receipt.receiptId}
                      className={isSelected ? "selected" : ""}
                      onClick={() => toggleRow(receipt.receiptId)}
                    >
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(receipt.receiptId)}
                        />
                      </td>

                      {/* Clickable Receipt ID - Goes to /receipt/detail */}
                      <td className="mono">
                        <Link 
                          to="/receipt/detail"
                          className="receipt-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {receipt.receiptId}
                        </Link>
                      </td>

                      <td className="mono">{receipt.dtRef}</td>
                      <td>{receipt.toolsDetail}</td>
                      <td>{receipt.receivedDate}</td>
                      <td>{receipt.receivedBy}</td>
                      <td>
                        <span className={`pill ${receipt.condition.toLowerCase()}`}>
                          {receipt.condition}
                        </span>
                      </td>
                      <td className={receipt.discrepancies > 0 ? "text-red" : ""}>
                        {receipt.discrepancies}
                      </td>
                      <td>
                        <span className={`pill ${receipt.status === "Completed" ? "p-done" : "p-pending"}`}>
                          <span className="pill-dot"></span>
                          {receipt.status}
                        </span>
                      </td>
                      <td>
                        <div className="row-actions">
                          <button className="row-btn">
                            <Link 
                              to="/receipt/detail"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fa-solid fa-eye"></i>
                            </Link>
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
            <div className="page-info">Page 1 of 4 · 18 total receipts</div>
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