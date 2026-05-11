import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

const availableTools = [
  { sn: "HYD475BP112", name: "4-3/4\" PBL Sub" },
  { sn: "HYD950BP033", name: "9-1/2\" PBL Sub" },
  { sn: "HYD675BP211", name: "6-3/4\" PBL Sub" },
];

export default function AddRetirement() {
  const [form, setForm] = useState({
    toolSn: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Retirement request submitted successfully!");
    // You can add navigation or API call here
  };

  return (
    <Layout>
      <Header
        title="Retire Tool"
        subtitle="Mark tool for retirement"
        syncText=""
        rightContent={
          <>
             <button className="cancel-btn">
              <i className="fa-solid fa-xmark"></i>
              Cancel
            </button>
            <button className="submit-btn" onClick={handleSubmit}>
                <i className="fa-solid fa-paper-plane"></i>
              Submit Retirement Request
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="pm-page">
          <div className="card" >
            <div className="card-body" style={{width:"50%"}}>

              <div className="form-field ">
                <label>Select Tool to Retire <span className="required">*</span></label>
                <select
                  value={form.toolSn}
                  onChange={(e) => setForm({ ...form, toolSn: e.target.value })}
                  
                >
                  <option value="">-- Select Tool --</option>
                  {availableTools.map(tool => (
                    <option key={tool.sn} value={tool.sn}>
                      {tool.sn} — {tool.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field" style={{ marginTop: "20px" }}>
                <label>Reason for Retirement <span className="required">*</span></label>
                <textarea
                  rows="6"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  placeholder="Provide detailed reason for retirement (e.g. beyond economical repair, irreparable damage, etc.)"
                  
                />
              </div>

              <div style={{ marginTop: "30px", color: "#6b7280", fontSize: "13px" }}>
                This tool will be moved to Retired status after QA approval.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}