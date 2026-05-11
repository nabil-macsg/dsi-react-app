import React, { useMemo, useState } from "react";

import "./Tools.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";



export default function AddTool() {

  return (
    <Layout>
      <Header
            title={null}
              breadcrumb={<div className="breadcrumb">
              <i className="fa fa-screwdriver-wrench" ></i>
              Tools
            
              <i className="fa-solid fa-chevron-right" ></i>
              <span>New Tool</span>
            </div>}
              rightContent={
                <>
                  <button className="cancel-btn">
                    <i className="fa-solid fa-xmark"></i>
                    Cancel
                  </button>
      
                  <button className="draft-btn">
                    <i className="fa-regular fa-floppy-disk"></i>
                    Save Draft
                  </button>
      
                  <button className="submit-btn" disabled>
                    <i className="fa-solid fa-paper-plane"></i>
                   Submit Tool
                  </button>
                </>
              }
            />
      <div className="scroll-body">
        <div className="tools-page">
            <div className="card">
              <div className="card-body">

  <div className="form-grid grid-3">
    <div className="form-field">
      <label>Serial Number <span className="required">*</span></label>
      <input type="text" placeholder="e.g. HYD475BP112" />
    </div>

    <div className="form-field">
      <label>Type <span className="required">*</span></label>
      <select>
        <option value="">Select Type</option>
        <option value="PBL Sub">PBL Sub</option>
        <option value="PBL High Flow">PBL High Flow</option>
        <option value="PBL Activator">PBL Activator</option>
      </select>
    </div>

    <div className="form-field">
      <label>Size <span className="required">*</span></label>
      <select>
        <option value="">Select Size</option>
        <option value='4-3/4"'>4-3/4"</option>
        <option value='5-1/4"'>5-1/4"</option>
        <option value='6-3/4"'>6-3/4"</option>
        <option value='8-1/4"'>8-1/4"</option>
        <option value='9-1/2"'>9-1/2"</option>
      </select>
    </div>
  </div>

  <div className="form-grid grid-3">
    <div className="form-field">
      <label>Region <span className="required">*</span></label>
      <select>
        <option value="">Select Region</option>
        <option value="Middle East">Middle East</option>
        <option value="Central Asia">Central Asia</option>
        <option value="South Asia">South Asia</option>
        <option value="Africa">Africa</option>
      </select>
    </div>

    <div className="form-field">
      <label>Agent / Location <span className="required">*</span></label>
      <select>
        <option value="">Select Agent</option>
        <option value="DSI FZE Yard">DSI FZE Yard</option>
        <option value="Zhigermunai Service LLP">Zhigermunai Service LLP</option>
        <option value="ADES Group">ADES Group</option>
        <option value="Target Energy">Target Energy</option>
        <option value="Saipem Nigeria">Saipem Nigeria</option>
      </select>
    </div>

    <div className="form-field">
      <label>Current Status <span className="required">*</span></label>
      <select>
        <option value="In storage">In Storage</option>
        <option value="In field">In Field</option>
        <option value="Under maintenance">Under Maintenance</option>
        <option value="Pending retirement">Pending Retirement</option>
      </select>
    </div>
  </div>

  <div className="form-grid grid-3">
    <div className="form-field">
      <label>Last Service Date</label>
      <input type="date" />
    </div>

    <div className="form-field">
      <label>Next Due Date <span className="required">*</span></label>
      <input type="date" />
    </div>

    <div className="form-field">
      <label>Tool Value (USD)</label>
      <input type="text" placeholder="e.g. 42500" />
    </div>
  </div>

  <div className="form-field" >
    <label>Notes / Remarks</label>
    <textarea 
      rows="3" 
      placeholder="Add any additional information about the tool..."
    ></textarea>
  </div>

  

</div>
            </div>

        </div>
      </div>
    </Layout>
  );
}