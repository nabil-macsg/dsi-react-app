import React, { useState } from "react";

import "./Dispatch.scss";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const selectedTools = [
  {
    sn: "HYD825BP399",
    type: "PBL High Flow",
    size: '8-1/4"',
    status: "In storage",
    agent: "DSI FZE Yard",
  },
  {
    sn: "HYD825BP386",
    type: "PBL High Flow",
    size: '8-1/4"',
    status: "In storage",
    agent: "DSI FZE Yard",
  },
];

const checklistData = [
  {
    id: 1,
    label:
      "Both tools have a valid service report within the last 6 months",
    auto: true,
    checked: true,
  },
  {
    id: 2,
    label:
      "Ball seat shear pressure is stencilled on both tools",
    auto: true,
    checked: true,
  },
  {
    id: 3,
    label:
      "Port holes have been greased and taped on all tools",
    auto: false,
    checked: false,
  },
  {
    id: 4,
    label:
      "Service connections are torqued or clearly marked as 'Loose Joint'",
    auto: false,
    checked: false,
  },
  {
    id: 5,
    label:
      "Both connections properly doped and thread protectors installed",
    auto: false,
    checked: false,
  },
];
const spares = [
  {
    id: 1,
    type: "Seal Kit",
    partNo: "HTSEDM417968",
    qty: 2,
    unit: "Kit",
    stock: "14 Kits",
    low: false,
  },
  {
    id: 2,
    type: "Activation Ball",
    partNo: "ACT884521",
    qty: 10,
    unit: "Each",
    stock: "48 Units",
    low: false,
  },
  {
    id: 3,
    type: "Locking Ball",
    partNo: "LKB998741",
    qty: 4,
    unit: "Each",
    stock: "6 Units",
    low: true,
  },
];
export default function AddDispatch() {
  const [checks, setChecks] = useState(checklistData);

  const toggleCheck = (id) => {
    setChecks((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };

  const completedChecks = checks.filter((c) => c.checked).length;
const navigate = useNavigate();
  return (
    <Layout>
      <Header
      title={null}
        breadcrumb={<div className="breadcrumb">
        <i className="fa-solid fa-truck " ></i>
        Tool Movement
        <i className="fa-solid fa-chevron-right" ></i>
        Movements
        <i className="fa-solid fa-chevron-right" ></i>
        <span>New Dispatch</span>
      </div>}
        rightContent={
          <>
            <button className="cancel-btn"  onClick={() => navigate(-1)}>
              <i className="fa-solid fa-xmark"></i>
              Cancel
            </button>

            <button className="draft-btn"  onClick={() => navigate(-1)}>
              <i className="fa-regular fa-floppy-disk"></i>
              Save Draft
            </button>

            <button className="submit-btn" disabled  onClick={() => navigate(-1)}>
              <i className="fa-solid fa-paper-plane"></i>
              Initiate Dispatch
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="add-dispatch-page">

          {/* LEFT STEP PANEL */}
          <div className="dispatch-sidebar">

            <div className="dispatch-sidebar-head">
              <h4>Dispatch Form</h4>

              <p>Step 2 of 5 in progress</p>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <span>40% complete</span>
            </div>

            <div className="dispatch-steps">

              <div className="step-item done">
                <div className="step-number">
                  <i className="fa-solid fa-check"></i>
                </div>

                <div>
                  <h5>Select Tools</h5>
                  <p>Choose tools to dispatch</p>
                </div>
              </div>

              <div className="step-item active">
                <div className="step-number">2</div>

                <div>
                  <h5>Destination</h5>
                  <p>Agent, region, DT number</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>

                <div>
                  <h5>Spare Parts</h5>
                  <p>Parts dispatched with tools</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>

                <div>
                  <h5>Checklist</h5>
                  <p>Verify readiness</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">5</div>

                <div>
                  <h5>Review & Submit</h5>
                  <p>Final confirmation</p>
                </div>
              </div>

            </div>

            <div className="dispatch-summary">

              <div className="summary-title">
                Dispatch Summary
              </div>

              <div className="summary-row">
                <span>Tools selected</span>
                <strong>2</strong>
              </div>

              <div className="summary-row">
                <span>Destination</span>
                <strong>Pending...</strong>
              </div>

              <div className="summary-row">
                <span>Spare parts</span>
                <strong>Pending...</strong>
              </div>

              <div className="dispatch-ref">
                <label>DT Reference</label>
                <h4>DT-2026-091</h4>
              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="dispatch-content">

            {/* STEP 1 */}
            <div className="dispatch-card">

              <div className="card-head">

                <div>
                  <h3>Step 1 — Selected Tools</h3>
                  <p>2 tools selected for dispatch</p>
                </div>

                <span className="status-badge done">
                  Complete
                </span>

              </div>

              <div className="card-body">

                {selectedTools.map((tool) => (
                  <div
                    className="selected-tool"
                    key={tool.sn}
                  >
                    <i className="fa-solid fa-screwdriver-wrench"></i>

                    <div className="tool-info">
                      <h5>{tool.sn}</h5>

                      <p>
                        {tool.size} {tool.type} ·{" "}
                        {tool.status} · {tool.agent}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* STEP 2 */}
            <div className="dispatch-card">

              <div className="card-head">

                <div>
                  <h3>Step 2 — Destination Details</h3>

                  <p>
                    Select the agent, region and provide
                    dispatch reference
                  </p>
                </div>

                <span className="status-badge progress">
                  In Progress
                </span>

              </div>

              <div className="card-body">

                <div className="form-grid grid-3">

                  <div className="form-field">
                    <label>Region</label>

                    <select>
                      <option>Middle East</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Agent</label>

                    <select>
                      <option>
                        Zhigermunai Service LLP
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>DT Number</label>

                    <input
                      type="text"
                      value="11005261"
                      readOnly
                    />
                  </div>

                </div>

                <div className="form-grid grid-2">

                  <div className="form-field">
                    <label>Dispatch Date</label>

                    <input
                      type="date"
                      value="2026-05-14"
                      readOnly
                    />
                  </div>

                  <div className="form-field">
                    <label>Arrival Date</label>

                    <input
                      type="date"
                      value="2026-05-18"
                      readOnly
                    />
                  </div>

                </div>

              </div>

            </div>
{/* STEP 3 */}
<div className="dispatch-card">

  <div className="card-head">

    <div>
      <h3>Step 3 — Spare Parts</h3>

      <p>
        Log spare parts included in this dispatch
      </p>
    </div>

    <span className="status-badge pending">
      Pending
    </span>

  </div>

  <div className="card-body">

    <div className="warning-box">
      <i className="fa-solid fa-triangle-exclamation"></i>

      <p>
        Agent currently has 22 spare parts in stock.
        Review existing inventory before dispatch.
      </p>
    </div>

    <div className="spares-table-wrap">

      <table className="spares-table">

        <thead>
          <tr>
            <th>Part Type</th>
            <th>Part No.</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {spares.map((item) => (
            <tr key={item.id}>

              <td>
                <select>
                  <option>{item.type}</option>
                </select>
              </td>

              <td>
                <input
                  type="text"
                  value={item.partNo}
                  readOnly
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.qty}
                  readOnly
                />
              </td>

              <td>
                <select>
                  <option>{item.unit}</option>
                </select>
              </td>

              <td>
                <span
                  className={`stock-badge ${
                    item.low ? "low" : "ok"
                  }`}
                >
                  {item.stock}
                </span>
              </td>

              <td>
                <button className="remove-btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

    <button className="add-spare-btn">
      <i className="fa-solid fa-circle-plus"></i>
      Add Spare Part
    </button>

  </div>

</div>
 {/* STEP 4 */}
            <div className="dispatch-card">

              <div className="card-head">

                <div>
                  <h3>
                    Step 4 — Pre Dispatch Checklist
                  </h3>

                  <p>
                    Verify all conditions before dispatch
                  </p>
                </div>

                <span className="status-badge pending">
                  Pending
                </span>

              </div>

              <div className="card-body">

                <div className="checklist-wrap">

                  {checks.map((item) => (
                    <div
                      key={item.id}
                      className={`check-item ${
                        item.checked ? "checked" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() =>
                          toggleCheck(item.id)
                        }
                      />

                      <div className="check-content">
                        <h5>{item.label}</h5>

                        <span>
                          {item.auto
                            ? "Auto verified"
                            : "Manual check"}
                        </span>
                      </div>
                    </div>
                  ))}

                </div>

                <div className="review-box">
                  <div className="review-row">
                    <span>Checklist Progress</span>

                    <strong>
                      {completedChecks} /{" "}
                      {checks.length}
                    </strong>
                  </div>
                </div>

              </div>

            </div>
{/* STEP 5 */}
<div className="dispatch-card">

  <div className="card-head">

    <div>
      <h3>Step 5 — Review & Submit</h3>

      <p>
        Final review before dispatch submission
      </p>
    </div>

    <span className="status-badge pending">
      Pending
    </span>

  </div>

  <div className="card-body">

    <div className="review-box">

      <div className="review-row">
        <span>Selected Tools</span>

        <strong>
          {selectedTools.length}
        </strong>
      </div>

      <div className="review-row">
        <span>Region</span>

        <strong>Middle East</strong>
      </div>

      <div className="review-row">
        <span>Agent</span>

        <strong>
          Zhigermunai Service LLP
        </strong>
      </div>

      <div className="review-row">
        <span>Spare Parts</span>

        <strong>
          {spares.length} Items
        </strong>
      </div>

      <div className="review-row">
        <span>Checklist Status</span>

        <strong>
          {completedChecks} /{" "}
          {checks.length}
        </strong>
      </div>

    </div>

    <div className="submit-warning">
      <i className="fa-solid fa-circle-info"></i>

      <p>
        All checklist items must be completed
        before initiating dispatch.
      </p>
    </div>

    <div className="dispatch-actions">

      <button className="secondary-btn">
        Save Draft
      </button>

      <button
        className="primary-btn"
        disabled={
          completedChecks !== checks.length
        }
      >
        <i className="fa-solid fa-paper-plane"></i>
        Initiate Dispatch
      </button>

    </div>

  </div>

</div>
           

          </div>

        </div>
      </div>
    </Layout>
  );
}