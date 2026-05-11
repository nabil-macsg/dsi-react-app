// StripDown.jsx

import React from "react";

import "./StripDown.scss";

import Layout from "../../components/Layout";
import Header from "../../components/Header";

const stepsData = [
  {
    id: 1,
    title: "Tool Information",
    desc: "Basic details & reason",
    status: "done",
  },
  {
    id: 2,
    title: "Component Assessment",
    desc: "Condition per component",
    status: "done",
  },
  {
    id: 3,
    title: "Salvageable Parts",
    desc: "Add to spare inventory",
    status: "active",
  },
  {
    id: 4,
    title: "Parts to Dispose",
    desc: "Scrap list with reason",
    status: "pending",
  },
  {
    id: 5,
    title: "Photo Evidence & Sign Off",
    desc: "Upload photos, signatures",
    status: "pending",
  },
];

export default function StripDown() {
  return (
    <Layout>
      <Header
        title={null}
        breadcrumb={
          <div className="breadcrumb">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            Maintenance
            <i className="fa-solid fa-chevron-right"></i>
            Strip Down
            <i className="fa-solid fa-chevron-right"></i>

            <span>HYD675BP188</span>
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
              Submit
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="pms-page">

          {/* SIDEBAR */}
          <div className="pms-sidebar">

            <div className="sidebar-head">

              <h4>Strip Down Sections</h4>

              <p>Step 3 of 5 in progress</p>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <span>40% complete</span>

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

            {/* SUMMARY */}
            <div className="strip-summary">

              <div className="summary-title">
                Strip down summary
              </div>

              <div className="summary-row">
                <span>Total components</span>
                <strong>14</strong>
              </div>

              <div className="summary-row">
                <span>Condition: Good</span>
                <strong className="green">6</strong>
              </div>

              <div className="summary-row">
                <span>Condition: Worn</span>
                <strong className="amber">5</strong>
              </div>

              <div className="summary-row">
                <span>Condition: Scrap</span>
                <strong className="red">3</strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Parts to salvage</span>
                <strong className="green">9</strong>
              </div>

              <div className="summary-row">
                <span>Parts to dispose</span>
                <strong className="red">3</strong>
              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="pms-content">

      <div className="body-layout">


  <div className="form-area">

    <div className="tool-info-bar">
      <div className="tib-left">
        <div>
          <div className="tib-sn">HYD675BP188</div>
          <div className="tib-type">6-3/4" PBL Sub · Saipem Nigeria · Africa Region</div>
        </div>
        <div className="tib-pills">
          <span className="tib-pill purple"><i className="fa-solid fa-layer-group" style={{fontSize:"9px"}}></i> Strip down path</span>
          <span className="tib-pill">DSI FZE Yard</span>
          <span className="tib-pill red"><i className="fa-solid fa-triangle-exclamation" style={{fontSize:"9px"}}></i> Beyond economical repair</span>
        </div>
      </div>
      <div className="tib-right">
        <div style={{textAlign:"right"}}>
          <div className="tib-stat-val">01 Aug 2025</div>
          <div className="tib-stat-label">Last service date</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div className="tib-stat-val">Sasikarunan</div>
          <div className="tib-stat-label">Prepared by</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div className="tib-stat-val">SD-2026-012</div>
          <div className="tib-stat-label">Job reference</div>
        </div>
      </div>
    </div>

    {/* Section 1 */}
    <div className="section-card" id="sec-toolinfo">
      <div className="section-head">
        <div className="section-title-row">
          <div className="section-icon si-green"><i className="fa-solid fa-circle-check"></i></div>
          <div>
            <div className="section-title">Section 1 — Tool Information</div>
            <div className="section-sub">Strip down reason, authorization and general notes</div>
          </div>
        </div>
        <span className="section-badge badge-done"><i className="fa-solid fa-check" style={{fontSize:"9px"}}></i> Complete</span>
      </div>
      <div className="section-body">
        <div className="form-grid grid-3">
          <div className="form-field">
            <div className="field-label">Strip down reason</div>
            <input className="field-input filled" value="Beyond economical repair" readOnly />
          </div>
          <div className="form-field">
            <div className="field-label">Authorized by</div>
            <input className="field-input filled" value="Shafi Karunan — QA Supervisor" readOnly />
          </div>
          <div className="form-field">
            <div className="field-label">Strip down date</div>
            <input className="field-input filled" value="10 May 2026" readOnly />
          </div>
        </div>
        <div className="form-field" style={{marginTop:"12px"}}>
          <div className="field-label">General observations</div>
          <div className="field-input filled" style={{height:"auto",padding:"8px 10px",fontSize:"12.5px",color:"var(--text-secondary)",background:"var(--bg-secondary)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)"}}>
            Severe corrosion on main body OD. Ball seat shear pressure below minimum threshold. Sleeve keyway has indentation marks exceeding 1/16". Tool deemed uneconomical to repair after full assessment.
          </div>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="section-card" id="sec-assessment">
      <div className="section-head">
        <div className="section-title-row">
          <div className="section-icon si-green"><i className="fa-solid fa-circle-check"></i></div>
          <div>
            <div className="section-title">Section 2 — Component Assessment</div>
            <div className="section-sub">Condition rating per component with salvage and scrap decisions</div>
          </div>
        </div>
        <span className="section-badge badge-done"><i className="fa-solid fa-check" style={{fontSize:"9px"}}></i> Complete — 14 components assessed</span>
      </div>
      <div className="section-body">
        <table className="comp-table">
          <thead>
            <tr>
              <th style={{width:"200px"}}>Component</th>
              <th style={{width:"120px"}}>Serial / Batch</th>
              <th style={{width:"130px"}}>Condition</th>
              <th style={{width:"80px",textAlign:"center"}}>Salvage</th>
              <th style={{width:"60px",textAlign:"center"}}>Qty</th>
              <th style={{width:"70px",textAlign:"center"}}>Scrap</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="comp-name">Main Body</div><div className="comp-sn">475BP01</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>MB-675-044</td>
              <td><span className="condition-badge cb-scrap"><i className="fa-solid fa-circle-xmark" style={{fontSize:"9px"}}></i> Scrap</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" disabled /></td>
              <td style={{textAlign:"center"}}>—</td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" checked /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Severe corrosion beyond repair</td>
            </tr>
            <tr>
              <td><div className="comp-name">Sleeve Assembly</div><div className="comp-sn">01069-02-10</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>SL-675-188</td>
              <td><span className="condition-badge cb-scrap"><i className="fa-solid fa-circle-xmark" style={{fontSize:"9px"}}></i> Scrap</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" disabled /></td>
              <td style={{textAlign:"center"}}>—</td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" checked /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Keyway damage exceeds 1/16"</td>
            </tr>
            <tr>
              <td><div className="comp-name">Spring</div><div className="comp-sn">928-021</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>SPR-475-021</td>
              <td><span className="condition-badge cb-good"><i className="fa-solid fa-circle-check" style={{fontSize:"9px"}}></i> Good</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" checked /></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" disabled /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Good condition, 5 cycles remaining</td>
            </tr>
            <tr>
              <td><div className="comp-name">Guide Pin</div><div className="comp-sn">GP-675-009</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>—</td>
              <td><span className="condition-badge cb-worn"><i className="fa-solid fa-circle-half-stroke" style={{fontSize:"9px"}}></i> Worn</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" checked /></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" disabled /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Usable with new O-rings</td>
            </tr>
            <tr>
              <td><div className="comp-name">Locking Insert x2</div><div className="comp-sn">625-2-25 / 552-4-71</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>—</td>
              <td><span className="condition-badge cb-good"><i className="fa-solid fa-circle-check" style={{fontSize:"9px"}}></i> Good</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" checked /></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="2" type="number" min="1" /></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" disabled /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Shear pressures still within spec</td>
            </tr>
            <tr>
              <td><div className="comp-name">Ball Seat</div><div className="comp-sn">00784-03-16</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>BS-675-016</td>
              <td><span className="condition-badge cb-scrap"><i className="fa-solid fa-circle-xmark" style={{fontSize:"9px"}}></i> Scrap</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" disabled /></td>
              <td style={{textAlign:"center"}}>—</td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" checked /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Below min shear pressure threshold</td>
            </tr>
            <tr>
              <td><div className="comp-name">Ball Catcher Cage</div><div className="comp-sn">961-4-1</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>BC-675-001</td>
              <td><span className="condition-badge cb-worn"><i className="fa-solid fa-circle-half-stroke" style={{fontSize:"9px"}}></i> Worn</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" checked /></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" disabled /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>ID within min limit, usable</td>
            </tr>
            <tr>
              <td><div className="comp-name">Top Sub</div><div className="comp-sn">HYD675TS-002</div></td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>TS-675-002</td>
              <td><span className="condition-badge cb-good"><i className="fa-solid fa-circle-check" style={{fontSize:"9px"}}></i> Good</span></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="salvage-cb" checked /></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td style={{textAlign:"center"}}><input type="checkbox" className="scrap-cb" disabled /></td>
              <td style={{fontSize:"11.5px",color:"var(--text-secondary)"}}>Dimensions within spec</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Section 3 - Salvageable Parts */}
    <div className="section-card" id="sec-salvage">
      <div className="section-head">
        <div className="section-title-row">
          <div className="section-icon si-green"><i className="fa-solid fa-recycle"></i></div>
          <div>
            <div className="section-title">Section 3 — Salvageable Parts</div>
            <div className="section-sub">Parts marked for salvage — confirm quantities and add to spare parts inventory</div>
          </div>
        </div>
        <span className="section-badge badge-inprog"><i className="fa-solid fa-circle-half-stroke" style={{fontSize:"9px"}}></i> In progress</span>
      </div>
      <div className="section-body">
        <div className="info-box" style={{marginBottom:"14px",marginTop:"0"}}>
          <i className="fa-solid fa-circle-info"></i>
          <p>Parts listed below have been marked as salvageable from the component assessment. Confirm quantities and part condition before submitting — these will be automatically added to the DSI spare parts inventory upon approval.</p>
        </div>

        <table className="parts-table">
          <thead>
            <tr>
              <th style={{width:"200px"}}>Part name</th>
              <th style={{width:"130px"}}>Source serial</th>
              <th style={{width:"100px"}}>Condition</th>
              <th style={{width:"70px",textAlign:"center"}}>Qty</th>
              <th style={{width:"130px"}}>Storage location</th>
              <th>Notes</th>
              <th style={{width:"40px"}}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{fontWeight:"500"}}>Spring</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>928-021</td>
              <td><span className="condition-badge cb-good"><i className="fa-solid fa-circle-check" style={{fontSize:"9px"}}></i> Good</span></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>DSI FZE Yard — Shelf A3</option><option>DSI FZE Yard — Shelf B1</option></select></td>
              <td><input className="notes-input" placeholder="Add notes…" value="5 cycles remaining" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr>
              <td style={{fontWeight:"500"}}>Guide Pin</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>GP-675-009</td>
              <td><span className="condition-badge cb-worn"><i className="fa-solid fa-circle-half-stroke" style={{fontSize:"9px"}}></i> Worn</span></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>DSI FZE Yard — Shelf A3</option><option>DSI FZE Yard — Shelf B1</option></select></td>
              <td><input className="notes-input" placeholder="Add notes…" value="Requires new O-rings before use" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr>
              <td style={{fontWeight:"500"}}>Locking Insert</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>625-2-25</td>
              <td><span className="condition-badge cb-good"><i className="fa-solid fa-circle-check" style={{fontSize:"9px"}}></i> Good</span></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="2" type="number" min="1" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>DSI FZE Yard — Shelf A3</option><option>DSI FZE Yard — Shelf B1</option></select></td>
              <td><input className="notes-input" placeholder="Add notes…" value="Shear pressures within spec" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr>
              <td style={{fontWeight:"500"}}>Ball Catcher Cage</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>961-4-1</td>
              <td><span className="condition-badge cb-worn"><i className="fa-solid fa-circle-half-stroke" style={{fontSize:"9px"}}></i> Worn</span></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>DSI FZE Yard — Shelf B1</option><option>DSI FZE Yard — Shelf A3</option></select></td>
              <td><input className="notes-input" placeholder="Add notes…" value="ID 1.258&quot; — within min limit" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr>
              <td style={{fontWeight:"500"}}>Top Sub</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>HYD675TS-002</td>
              <td><span className="condition-badge cb-good"><i className="fa-solid fa-circle-check" style={{fontSize:"9px"}}></i> Good</span></td>
              <td style={{textAlign:"center"}}><input className="qty-input" value="1" type="number" min="1" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>DSI FZE Yard — Shelf A3</option><option>DSI FZE Yard — Shelf B1</option></select></td>
              <td><input className="notes-input" placeholder="Add notes…" value="All dimensions within spec" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr className="add-part-row">
              <td colSpan="7">
                <div className="add-row-btn"><i className="fa-solid fa-circle-plus" style={{fontSize:"13px"}}></i> Add another salvageable part</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="warn-box">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <p>Worn parts added to inventory must be clearly marked before storage. They may only be dispatched to agents with explicit QA approval. Parts with condition "Worn" will be flagged in the spare parts inventory.</p>
        </div>

        <div className="nav-btns">
          <button className="prev-btn"><i className="fa-solid fa-arrow-left" style={{fontSize:"11px"}}></i> Previous</button>
          <button className="next-btn">Save & next section <i className="fa-solid fa-arrow-right" style={{fontSize:"11px"}}></i></button>
        </div>
      </div>
    </div>

    {/* Section 4 - Parts to Dispose */}
    <div className="section-card" id="sec-dispose">
      <div className="section-head">
        <div className="section-title-row">
          <div className="section-icon si-red"><i className="fa-solid fa-trash-can"></i></div>
          <div>
            <div className="section-title">Section 4 — Parts to Dispose</div>
            <div className="section-sub">Scrap components — disposal method and authorization</div>
          </div>
        </div>
        <span className="section-badge badge-pending">Not started</span>
      </div>
      <div className="section-body">
        <table className="scrap-table">
          <thead>
            <tr>
              <th style={{width:"200px"}}>Component</th>
              <th style={{width:"130px"}}>Serial / Batch</th>
              <th style={{width:"150px"}}>Reason for disposal</th>
              <th style={{width:"140px"}}>Disposal method</th>
              <th>Authorization notes</th>
              <th style={{width:"40px"}}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{fontWeight:"500",color:"var(--scrap)"}}>Main Body</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>MB-675-044</td>
              <td><input className="notes-input" value="Severe corrosion — beyond repair" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>Scrap metal recycling</option><option>Controlled destruction</option><option>Return to manufacturer</option></select></td>
              <td><input className="notes-input" placeholder="Authorization notes…" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr>
              <td style={{fontWeight:"500",color:"var(--scrap)"}}>Sleeve Assembly</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>SL-675-188</td>
              <td><input className="notes-input" value="Keyway damage exceeds 1/16&quot;" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>Scrap metal recycling</option><option>Controlled destruction</option><option>Return to manufacturer</option></select></td>
              <td><input className="notes-input" placeholder="Authorization notes…" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr>
              <td style={{fontWeight:"500",color:"var(--scrap)"}}>Ball Seat</td>
              <td style={{fontFamily:"var(--mono)",fontSize:"11px",color:"var(--text-tertiary)"}}>BS-675-016</td>
              <td><input className="notes-input" value="Below minimum shear pressure" /></td>
              <td><select className="field-select" style={{height:"30px",fontSize:"11.5px"}}><option>Scrap metal recycling</option><option>Controlled destruction</option><option>Return to manufacturer</option></select></td>
              <td><input className="notes-input" placeholder="Authorization notes…" /></td>
              <td style={{textAlign:"center"}}><i className="fa-solid fa-trash" style={{color:"var(--dsi-red)",cursor:"pointer",fontSize:"12px"}}></i></td>
            </tr>
            <tr className="add-part-row">
              <td colSpan="6">
                <div className="add-row-btn" style={{color:"var(--dsi-red)"}}><i className="fa-solid fa-circle-plus" style={{fontSize:"13px"}}></i> Add another disposal item</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Section 5 - Photo & Sign Off */}
    <div className="section-card" id="sec-signoff">
      <div className="section-head">
        <div className="section-title-row">
          <div className="section-icon si-purple"><i className="fa-solid fa-signature"></i></div>
          <div>
            <div className="section-title">Section 5 — Photo Evidence & Sign Off</div>
            <div className="section-sub">Upload strip down photos and obtain required signatures</div>
          </div>
        </div>
        <span className="section-badge badge-pending">Not started</span>
      </div>
      <div className="section-body">
        <div style={{fontSize:"12px",fontWeight:"600",color:"var(--text-secondary)",marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.05em"}}>Photo evidence</div>
        <div className="photo-row">
          <div className="photo-box uploaded"><i className="fa-solid fa-image"></i><div className="photo-label">Overall tool condition ✓</div></div>
          <div className="photo-box uploaded"><i className="fa-solid fa-image"></i><div className="photo-label">Main body corrosion ✓</div></div>
          <div className="photo-box"><i className="fa-solid fa-camera"></i><div className="photo-label">Sleeve keyway damage</div></div>
          <div className="photo-box"><i className="fa-solid fa-camera"></i><div className="photo-label">Salvageable parts</div></div>
        </div>
        <div className="form-divider"></div>
        <div style={{fontSize:"12px",fontWeight:"600",color:"var(--text-secondary)",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.05em"}}>Sign off</div>
        <div className="signoff-grid">
          <div className="signoff-card">
            <div className="signoff-role">Strip down performed by</div>
            <div className="signoff-name">Sasikarunan</div>
            <input className="signoff-date-input" type="date" value="2026-05-10" />
            <div className="sig-box signed"><i className="fa-solid fa-check" style={{fontSize:"11px",marginRight:"5px"}}></i> Signed</div>
            <div className="signoff-status ss-done"><i className="fa-solid fa-circle-check" style={{fontSize:"11px"}}></i> Completed 10 May 2026</div>
          </div>
          <div className="signoff-card" style={{borderColor:"var(--amber-border)",background:"var(--amber-pale)"}}>
            <div className="signoff-role">Verified & approved by — QA</div>
            <div className="signoff-name">Shafi Karunan</div>
            <input className="signoff-date-input" type="date" />
            <div className="sig-box" style={{borderColor:"var(--amber-border)"}}><i className="fa-solid fa-pen" style={{fontSize:"11px",marginRight:"5px",color:"var(--amber)"}}></i> Sign here</div>
            <div className="signoff-status ss-current"><i className="fa-solid fa-clock" style={{fontSize:"11px"}}></i> Awaiting QA review</div>
          </div>
        </div>
        <div className="info-box" style={{marginTop:"14px"}}>
          <i className="fa-solid fa-circle-info"></i>
          <p>Upon QA approval, salvageable parts will be automatically posted to the DSI spare parts inventory and scrap components will be logged for disposal tracking. This action cannot be undone.</p>
        </div>
      </div>
    </div>

  </div>
</div>

          </div>

        </div>
      </div>
    </Layout>
  );
}