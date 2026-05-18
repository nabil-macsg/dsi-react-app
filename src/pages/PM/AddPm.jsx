import React, { useState } from "react";

import "./Pm.scss";

import Layout from "../../components/LayoutPM";
import Header from "../../components/HeaderPM";

const stepsData = [
  {
    id: 1,
    title: "Seal Kit",
    desc: "Type, batch, expiry",
    status: "done",
  },
  {
    id: 2,
    title: "Sleeve Assembly",
    desc: "SN, OD, inspection",
    status: "done",
  },
  {
    id: 3,
    title: "Main Body",
    desc: "Dimensions, assembly",
    status: "active",
  },
  {
    id: 4,
    title: "Main Body Assembly",
    desc: "Spring, guide pin",
    status: "pending",
  },
  {
    id: 5,
    title: "Top Sub",
    desc: "Dimensions, torque",
    status: "pending",
  },
  {
    id: 6,
    title: "Testing",
    desc: "Function, hydrostatic",
    status: "pending",
  },
  {
    id: 7,
    title: "Ball Catcher & Final",
    desc: "Assembly, dimensions",
    status: "pending",
  },
  {
    id: 8,
    title: "Equipment Used",
    desc: "Calibration records",
    status: "pending",
  },
  {
    id: 9,
    title: "Sign Off",
    desc: "Technician, QA",
    status: "pending",
  },
];

const checklistData = [
  {
    id: 1,
    label:
      "Dimensions confirmed within minimum requirements stated in the acceptance criteria",
    checked: false,
  },
  {
    id: 2,
    label: "No damages on the sleeve coating confirmed",
    checked: false,
  },
  {
    id: 3,
    label:
      "No damages on ports in the sleeve ID confirmed",
    checked: false,
  },
  {
    id: 4,
    label: "Key way is aligned to the ports",
    checked: false,
  },
  {
    id: 5,
    label:
      'Keyway is good and free from indentation marks deeper than 1/16"',
    checked: false,
  },
  {
    id: 6,
    label:
      "Sleeve dry run test conducted — ports aligned",
    checked: false,
  },
  {
    id: 7,
    label:
      "Seal lips confirmed facing away from the ports",
    checked: false,
  },
  {
    id: 8,
    label: "Main body has been liberally greased",
    checked: false,
  },
  {
    id: 9,
    label:
      "Spiralox confirmed installed correctly",
    checked: false,
  },
];

export default function AddPm() {
  const [checks, setChecks] =
    useState(checklistData);

  const toggleCheck = (id) => {
    setChecks((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
            ...item,
            checked: !item.checked,
          }
          : item
      )
    );
  };

  const completedChecks = checks.filter(
    (item) => item.checked
  ).length;

  return (
    <Layout>
      <Header
        title={null}
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

            <button className="draft-btn">
              <i className="fa-regular fa-floppy-disk"></i>
              Save Draft
            </button>

            <button className="submit-btn">
              <i className="fa-solid fa-paper-plane"></i>
              Submit for Approval
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="pms-page">

          {/* SIDEBAR */}
          <div className="pms-sidebar">

            <div className="sidebar-head">

              <h4>Service Report Sections</h4>

              <p>Step 3 of 9 in progress</p>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <span>30% complete</span>

            </div>

            <div className="steps-list">

              {stepsData.map((step) => (
                <div
                  key={step.id}
                  className={`step-item ${step.status}`}
                >

                  <div className="step-number">

                    {step.status === "done" ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      step.id
                    )}

                  </div>

                  <div className="step-content">

                    <h5>{step.title}</h5>

                    <p>{step.desc}</p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* CONTENT */}
          <div className="pms-content">

            {/* TOOL INFO */}
            <div className="tool-info-bar">

              <div className="tool-left">

                <div>
                  <h3>HYD475BP112</h3>

                  <p>
                    4-3/4" PBL Sub · Standard BC
                    Sub
                  </p>
                </div>

                <div className="tool-tags">

                  <span>Service path</span>

                  <span>DSI FZE Yard</span>

                  <span className="danger">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    Service overdue
                  </span>

                </div>

              </div>

              <div className="tool-right">

                <div className="tool-stat">
                  <strong>
                    23 Jan 2026
                  </strong>

                  <span>Service date</span>
                </div>

                <div className="tool-stat">
                  <strong>
                    Sasikarunan
                  </strong>

                  <span>Prepared by</span>
                </div>

                <div className="tool-stat">
                  <strong>
                    MJN-2026-047
                  </strong>

                  <span>Job reference</span>
                </div>

              </div>

            </div>

            {/* MAIN BODY */}
            <div className="pms-card">

              <div className="card-head">

                <div>

                  <h3>
                    Section 3 — Main Body
                  </h3>

                  <p>
                    Thread dimensions, body
                    measurements and sleeve dry
                    run
                  </p>

                </div>

                <span className="status-badge progress">
                  In Progress
                </span>

              </div>

              <div className="card-body">

                <div className="form-grid grid-3">

                  <div className="form-field">

                    <label>
                      Inspection Date
                    </label>

                    <input
                      type="date"
                      value="2026-01-23"
                    />

                  </div>

                  <div className="form-field">

                    <label>
                      Guide Pin Port Thread Dia.
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="0.000"
                      />

                      <span>
                        inch
                      </span>

                    </div>

                  </div>

                  <div className="form-field">

                    <label>
                      Dimension A Value
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="0.00"
                      />

                      <span>
                        inch
                      </span>

                    </div>

                  </div>

                </div>

                <div className="form-grid grid-3">

                  <div className="form-field">

                    <label>
                      Dimension B Value
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="0.00"
                      />

                      <span>
                        inch
                      </span>

                    </div>

                  </div>

                  <div className="form-field">

                    <label>
                      Lubricant Used
                    </label>

                    <select>
                      <option>
                        Select lubricant
                      </option>

                      <option>
                        Alco EP-73 Grease
                      </option>

                      <option>
                        Molykote
                      </option>

                    </select>

                  </div>

                  <div className="form-field">

                    <label>
                      Ball Seat Serial Number
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. 00784-03-16"
                    />

                  </div>

                </div>

                <div className="form-grid grid-3">

                  <div className="form-field">

                    <label>
                      Ball Seat Shear Pressure
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="0"
                      />

                      <span>
                        PSI
                      </span>

                    </div>

                  </div>

                  <div className="form-field">

                    <label>
                      Dart Seat Installed?
                    </label>

                    <select>
                      <option>
                        Not Applicable
                      </option>

                      <option>
                        Yes
                      </option>

                      <option>
                        No
                      </option>
                    </select>

                  </div>

                  <div className="form-field">

                    <label>
                      Angle Spacer Installed?
                    </label>

                    <select>
                      <option>
                        Not Applicable
                      </option>

                      <option>
                        Yes
                      </option>

                      <option>
                        No
                      </option>

                    </select>

                  </div>

                </div>

                <div className="section-title">
                  Physical Checks
                </div>

                <div className="checklist-wrap">

                  {checks.map((item) => (
                    <div
                      key={item.id}
                      className={`check-item ${item.checked
                          ? "checked"
                          : ""
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

                        <h5>
                          {item.label}
                        </h5>

                        <span>
                          Required
                        </span>

                      </div>

                    </div>
                  ))}

                </div>

                <div className="info-box">

                  <i className="fa-solid fa-circle-info"></i>

                  <p>
                    Measure all dimensions prior
                    to assembly. Guide pin port
                    thread diameter must not
                    exceed the max dimension
                    stated in the acceptance
                    criteria.
                  </p>

                </div>

                <div className="section-title">
                  Photo Evidence
                </div>

                <div className="photo-grid">

                  <div className="photo-box">
                    <i className="fa-solid fa-camera"></i>

                    <span>
                      Guide pin port measurement
                    </span>
                  </div>

                  <div className="photo-box">
                    <i className="fa-solid fa-camera"></i>

                    <span>
                      Dimension A measurement
                    </span>
                  </div>

                  <div className="photo-box">
                    <i className="fa-solid fa-camera"></i>

                    <span>
                      Seal orientation
                    </span>
                  </div>

                  <div className="photo-box">
                    <i className="fa-solid fa-camera"></i>

                    <span>
                      Greased main body
                    </span>
                  </div>

                </div>

                <div className="bottom-actions">

                  <button className="secondary-btn">
                    <i className="fa-solid fa-arrow-left"></i>
                    Previous
                  </button>

                  <button className="primary-btn">

                    Save & Next Section

                    <i className="fa-solid fa-arrow-right"></i>

                  </button>

                </div>

              </div>

            </div>

            {/* TESTING */}
            <div className="pms-card">

              <div className="card-head">

                <div>

                  <h3>
                    Section 6 — Testing
                  </h3>

                  <p>
                    Function test and hydrostatic
                    pressure tests
                  </p>

                </div>

                <span className="status-badge pending">
                  Pending
                </span>

              </div>

              <div className="card-body">

                <div className="test-row">

                  <div className="form-field">

                    <label>
                      LP Start Pressure
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="535"
                      />

                      <span>
                        PSI
                      </span>

                    </div>

                  </div>

                  <div className="form-field">

                    <label>
                      LP End Pressure
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="533"
                      />

                      <span>
                        PSI
                      </span>

                    </div>

                  </div>

                  <div className="form-field">

                    <label>
                      Pressure Drop
                    </label>

                    <div className="measure-field">

                      <input
                        type="text"
                        placeholder="0.00"
                        readOnly
                      />

                      <span>
                        %
                      </span>

                    </div>

                  </div>

                  <div className="result-box pending">
                    <i className="fa-solid fa-clock"></i>
                    Pending
                  </div>

                </div>

                <div className="warning-box">

                  <i className="fa-solid fa-triangle-exclamation"></i>

                  <p>
                    Both low pressure and high
                    pressure tests must pass
                    before the form can be
                    submitted for approval.
                  </p>

                </div>

              </div>

            </div>

            {/* SIGN OFF */}
            <div className="pms-card">

              <div className="card-head">

                <div>

                  <h3>
                    Section 9 — Sign Off
                  </h3>

                  <p>
                    Technician, tester and QA
                    approval
                  </p>

                </div>

                <span className="status-badge pending">
                  Awaiting Completion
                </span>

              </div>

              <div className="card-body">

                <div className="sign-grid">

                  <div className="sign-card done">

                    <label>
                      Serviced By
                    </label>

                    <h5>
                      Sasikarunan
                    </h5>

                    <input
                      type="date"
                      value="2026-01-23"
                    />

                    <div className="signature-box signed">
                      Signed
                    </div>

                  </div>

                  <div className="sign-card current">

                    <label>
                      Tested By
                    </label>

                    <h5>
                      Ganeshkumar
                    </h5>

                    <input
                      type="date"
                      value="2026-01-27"
                    />

                    <div className="signature-box">
                      Sign Here
                    </div>

                  </div>

                  <div className="sign-card disabled">

                    <label>
                      QA Supervisor
                    </label>

                    <h5>
                      Shafi K.
                    </h5>

                    <input
                      type="date"
                      disabled
                    />

                    <div className="signature-box">
                      Awaiting Tester
                    </div>

                  </div>

                </div>

                <div className="info-box">

                  <i className="fa-solid fa-circle-info"></i>

                  <p>
                    All three signatures are
                    required before this service
                    report can be closed.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}