// ReceiptForm.jsx

import React, { useState } from "react";
import {
  FaSignOutAlt,
  FaBell,
  FaBoxes,
  FaCamera,
  FaCalendarAlt,
  FaCheck,
  FaCheckCircle,
  FaChevronRight,
  FaClock,
  FaExclamationTriangle,
  FaFileAlt,
  FaTachometerAlt,
  FaCog,
  FaImage,
  FaLayerGroup,
  FaPen,
  FaSignature,
  FaTimes,
  FaTruck,
  FaTools,
  FaInfoCircle,
} from "react-icons/fa";

import Layout from "../../components/Layout";
import Header from "../../components/Header";

import "./Receipt.scss";
import { useNavigate } from "react-router-dom";

const ReceiptForm = () => {
  const [tools, setTools] = useState([
    {
      id: 1,
      serial: "HYD825BP399",
      type: '8-1/4" PBL High Flow',
      condition: "good",
      seals: true,
      protectors: true,
      notes: "",
    },
    {
      id: 2,
      serial: "HYD825BP386",
      type: '8-1/4" PBL High Flow',
      condition: "incomplete",
      seals: true,
      protectors: false,
      notes: "Thread protector missing on pin end — box end OK",
    },
  ]);

  const updateCondition = (id, value) => {
    setTools((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, condition: value } : item
      )
    );
  };
const navigate = useNavigate();
  return (
    <Layout>
      <div className="receipt-page">
        <Header
                title={null}
                syncText={null}
                breadcrumb={
                  <div className="breadcrumb">
                    <i className="fa-solid fa-gear"></i>
                    Maintenance
                    <i className="fa-solid fa-chevron-right"></i>
                    All Jobs
                    <i className="fa-solid fa-chevron-right"></i>
        
                    <span>
                      Service Report — HYD475BP112
                    </span>
                  </div>
                }
                rightContent={
                  <>
                    <div className="auto-save-text">
                      <i className="fa-regular fa-clock"></i>
                      Auto-saved 2 min ago
                    </div>
        
                    <button className="cancel-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-xmark"></i>
              Cancel
            </button>
        
                    <button className="submit-btn">
                      <i className="fa-solid fa-circle-check"></i>
                     Confirm Reciept
                    </button>
                  </>
                }
              />

        <div className="receipt-body">
          {/* LEFT PANEL */}
          <div className="receipt-sidebar">
            <div className="receipt-sidebar-header">
              <h4>Incoming dispatch</h4>
              <p>Verify details match your delivery</p>
            </div>

            <div className="dispatch-card_in">
              <div className="dispatch-label">DT reference number</div>
              <div className="dispatch-number">DT-11005261</div>

              <div className="dispatch-divider" />

              <div className="dispatch-row">
                <span>Dispatched by</span>
                <strong>DSI FZE — Sujithkumar</strong>
              </div>

              <div className="dispatch-row">
                <span>Dispatch date</span>
                <strong>12 Jan 2026</strong>
              </div>

              <div className="dispatch-row">
                <span>Origin</span>
                <strong>DSI FZE Yard, Dubai UAE</strong>
              </div>

              <div className="dispatch-row">
                <span>Destination</span>
                <strong>Aktau Industrial Zone, Kazakhstan</strong>
              </div>

              <div className="dispatch-row">
                <span>Expected arrival</span>
                <strong>18 Jan 2026</strong>
              </div>

              <div className="dispatch-status">
                <span className="dot" />
                In transit · 6 days
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-title">Tools dispatched (2)</div>

              {tools.map((tool) => (
                <div className="tool-chip" key={tool.id}>
                  <div className="tool-icon">
                    <FaTools/>
                  </div>

                  <div className="tool-content">
                    <h5>{tool.serial}</h5>
                    <p>{tool.type}</p>
                  </div>

                  <span className={`tool-status ${tool.condition}`}>
                    {tool.condition}
                  </span>
                </div>
              ))}
            </div>

            <div className="sidebar-section">
              <div className="sidebar-title">
                Spare parts dispatched (4)
              </div>

              <div className="spare-row">
                <span>Seal Kit — Standard</span>
                <strong>2 kits</strong>
              </div>

              <div className="spare-row">
                <span>Activation Ball 2.75"</span>
                <strong>10 units</strong>
              </div>

              <div className="spare-row">
                <span>Locking Ball 1.375"</span>
                <strong>4 units</strong>
              </div>

              <div className="spare-row">
                <span>Dart 2.75"</span>
                <strong>2 units</strong>
              </div>
            </div>
          </div>

          {/* MAIN FORM */}
          <div className="receipt-content">
            {/* SECTION 1 */}
            <div className="receipt-card">
              <div className="card-header">
                <div className="card-title">
                  <div className="card-icon blue">
                    <FaCalendarAlt/>
                  </div>

                  <div>
                    <h3>Section 1 — Receipt Details</h3>
                    <p>
                      Confirm when and where the delivery was received
                    </p>
                  </div>
                </div>

                <span className="badge warning">In progress</span>
              </div>

              <div className="card-body">
                <div className="form-grid grid-3">
                  <div className="form-field">
                    <label>Date received</label>
                    <input type="date" defaultValue="2026-01-18" />
                  </div>

                  <div className="form-field">
                    <label>Time received</label>
                    <input type="time" defaultValue="10:30" />
                  </div>

                  <div className="form-field">
                    <label>Received by</label>
                    <input defaultValue="Azamat Bekov" />
                  </div>
                </div>

                <div className="form-grid grid-2 mt-12">
                  <div className="form-field">
                    <label>Receipt location</label>
                    <input defaultValue="Aktau Industrial Zone, Gate 3" />
                  </div>

                  <div className="form-field">
                    <label>Carrier / logistics reference</label>
                    <input defaultValue="DHL-KZ-20260118-447" />
                  </div>
                </div>

                <div className="info-box mt-16">
                  <FaInfoCircle/>
                  <p>
                    Ensure you inspect all tools and spare parts before
                    confirming receipt.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="receipt-card">
              <div className="card-header">
                <div className="card-title">
                  <div className="card-icon amber">
                    <FaTools/>
                  </div>

                  <div>
                    <h3>Section 2 — Tool Condition on Arrival</h3>
                    <p>Rate the condition of each tool as received</p>
                  </div>
                </div>

                <span className="badge warning">In progress</span>
              </div>

              <div className="card-body">
                <div className="table-wrapper">
                  <table className="receipt-table">
                    <thead>
                      <tr>
                        <th>Serial No.</th>
                        <th>Tool Type</th>
                        <th>Condition</th>
                        <th>Seals</th>
                        <th>Protectors</th>
                        <th>Notes</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tools.map((tool) => (
                        <tr key={tool.id}>
                          <td className="mono">{tool.serial}</td>

                          <td>{tool.type}</td>

                          <td>
                            <select
                              value={tool.condition}
                              onChange={(e) =>
                                updateCondition(
                                  tool.id,
                                  e.target.value
                                )
                              }
                              className={`condition-select ${tool.condition}`}
                            >
                              <option value="good">Good</option>
                              <option value="damaged">
                                Damaged
                              </option>
                              <option value="incomplete">
                                Incomplete
                              </option>
                            </select>
                          </td>

                          <td>
                            <input
                              type="checkbox"
                              checked={tool.seals}
                              readOnly
                            />
                          </td>

                          <td>
                            <input
                              type="checkbox"
                              checked={tool.protectors}
                              readOnly
                            />
                          </td>

                          <td>
                            <input
                              value={tool.notes}
                              placeholder="Notes..."
                              readOnly
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="warning-box mt-16">
                  <FaExclamationTriangle />
                  <p>
                    Tool HYD825BP386 has been marked as incomplete.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 3 */}
            <div className="receipt-card">
              <div className="card-header">
                <div className="card-title">
                  <div className="card-icon green">
                    <FaBoxes />
                  </div>

                  <div>
                    <h3>Section 3 — Spare Parts Verification</h3>
                    <p>
                      Confirm quantities received against dispatched
                      amounts
                    </p>
                  </div>
                </div>

                <span className="badge warning">In progress</span>
              </div>

              <div className="card-body">
                <div className="table-wrapper">
                  <table className="receipt-table">
                    <thead>
                      <tr>
                        <th>Part Type</th>
                        <th>Batch</th>
                        <th>Dispatched</th>
                        <th>Received</th>
                        <th>Status</th>
                        <th>Notes</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Seal Kit — Standard</td>
                        <td className="mono">HTSEDM417968</td>
                        <td>2</td>
                        <td>
                          <input
                            className="qty-input match"
                            defaultValue="2"
                          />
                        </td>
                        <td>
                          <span className="match-badge success">
                            <FaCheck />
                            Match
                          </span>
                        </td>
                        <td>
                          <input placeholder="Notes..." />
                        </td>
                      </tr>

                      <tr>
                        <td>Locking Ball 1.375"</td>
                        <td className="mono">
                          Ertalyte — White
                        </td>
                        <td>4</td>
                        <td>
                          <input
                            className="qty-input mismatch"
                            defaultValue="3"
                          />
                        </td>
                        <td>
                          <span className="match-badge danger">
                            <FaTimes />
                            Short
                          </span>
                        </td>
                        <td>
                          <input defaultValue="Only 3 received — 1 missing" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SECTION 4 */}
            <div className="receipt-card">
              <div className="card-header">
                <div className="card-title">
                  <div className="card-icon gray">
                    <FaCamera />
                  </div>

                  <div>
                    <h3>Section 4 — Photo Evidence</h3>
                    <p>Upload delivery photos</p>
                  </div>
                </div>

                <span className="badge warning">In progress</span>
              </div>

              <div className="card-body">
                <div className="photo-grid">
                  <div className="photo-box uploaded">
                    <FaCamera />
                    <span>Delivery crate opened ✓</span>
                  </div>

                  <div className="photo-box uploaded">
                    <FaCamera />
                    <span>Both tools received ✓</span>
                  </div>

                  <div className="photo-box">
                    <FaCamera />
                    <span>Missing protector</span>
                  </div>

                  <div className="photo-box">
                    <FaCamera />
                    <span>Spare parts kit box</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 5 */}
            <div className="receipt-card">
              <div className="card-header">
                <div className="card-title">
                  <div className="card-icon green">
                    <FaSignature />
                  </div>

                  <div>
                    <h3>Section 5 — Confirmation & Signature</h3>
                    <p>Sign to confirm receipt</p>
                  </div>
                </div>

                <span className="badge pending">
                  Awaiting completion
                </span>
              </div>

              <div className="card-body">
                <div className="success-box">
                  <FaInfoCircle />
                  <p>
                    By signing below, you confirm receipt of the tools
                    and spare parts listed in dispatch DT-11005261.
                  </p>
                </div>

                <div className="signature-grid">
                  <div className="signature-card">
                    <h5>Received by — Agent representative</h5>

                    <input defaultValue="Azamat Bekov" />

                    <div className="signature-box">
                      <FaPen />
                      Tap to sign
                    </div>

                    <input type="date" defaultValue="2026-01-18" />
                  </div>

                  <div className="signature-card muted">
                    <h5>DSI witness (optional)</h5>

                    <input placeholder="Representative name" />

                    <div className="signature-box">
                      <FaPen />
                      Tap to sign
                    </div>

                    <input type="date" />
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="receipt-footer">
              <div className="footer-summary">
                <div className="summary-item">
                  <h4 className="green">2</h4>
                  <span>Tools received</span>
                </div>

                <div className="summary-item">
                  <h4 className="amber">1</h4>
                  <span>Incomplete</span>
                </div>

                <div className="summary-item">
                  <h4 className="red">2</h4>
                  <span>Discrepancies</span>
                </div>
              </div>

              <div className="footer-actions">
                <button className="btn-secondary">
                  <FaExclamationTriangle />
                  Flag for review
                </button>

                <button className="btn-primary">
                  <FaCheckCircle />
                  Confirm receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReceiptForm;