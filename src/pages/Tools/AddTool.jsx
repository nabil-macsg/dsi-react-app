import React, { useMemo, useState } from "react";

import "./Tools.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";



export default function AddTool() {
const navigate = useNavigate();
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
           {/* CANCEL - Goes back to previous page */}
    <button className="cancel-btn" onClick={() => navigate(-1)}>
      <i className="fa-solid fa-xmark"></i>
      Cancel
    </button>

    {/* SAVE DRAFT */}
    <button className="draft-btn"  onClick={() => navigate(-1)}>
      <i className="fa-regular fa-floppy-disk"></i>
      Save Draft
    </button>

    {/* SUBMIT */}
    <button className="submit-btn"  onClick={() => navigate(-1)} >
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

              <div className="form-grid grid-2">



                <div className="form-field">
                  <label>Tool Name <span className="required">*</span></label>
                  <input type="text" placeholder="Enter tool name" />
                </div>

                <div className="form-field">
                  <label>Tool Category <span className="required">*</span></label>
                  <select>
                    <option value="">Select Category</option>
                    <option value="PBL Tool">PBL Tool</option>
                    <option value="Downhole Tool">Downhole Tool</option>
                    <option value="Spare Part">Spare Part</option>
                    <option value="Accessory">Accessory</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Business Unit <span className="required">*</span></label>
                  <select>
                    <option value="">Select Business Unit</option>
                    <option value="DSI FZE">DSI FZE</option>
                    <option value="DSI Nigeria">DSI Nigeria</option>
                    <option value="DSI Asia">DSI Asia</option>
                  </select>
                </div>
                
                <div className="form-field">
                  <label>Functional Location <span className="required">*</span></label>
                  <select>
                    <option value="">Select Functional Location</option>
                    <option value="Yard - Shelf A3">Yard - Shelf A3</option>
                    <option value="Yard - Shelf B1">Yard - Shelf B1</option>
                    <option value="Field - Agent">Field - Agent</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Tool Type <span className="required">*</span></label>
                  <select>
                    <option value="">Select Tool Type</option>
                    <option value="PBL Sub">PBL Sub</option>
                    <option value="PBL High Flow">PBL High Flow</option>
                    <option value="PBL Activator">PBL Activator</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Manufacturer <span className="required">*</span></label>
                  <input type="text" placeholder="e.g. Hydra" />
                </div>
              </div>

             
              <div className="form-grid grid-2">


                <div className="form-field">
                  <label>Model Number</label>
                  <input type="text" placeholder="e.g. HYD-675BP" />
                </div>

                <div className="form-field">
                  <label>Serial Number <span className="required">*</span></label>
                  <input type="text" placeholder="e.g. HYD475BP112" />
                </div>
                <div className="form-field">
                  <label>Part Number</label>
                  <input type="text" placeholder="Enter part number" />
                </div>
                 <div className="form-field">
                  <label>Tool Status <span className="required">*</span></label>
                  <select>
                    <option value="">Select Status</option>
                    <option value="In Storage">In Storage</option>
                    <option value="In Field">In Field</option>
                    <option value="Under Maintenance">Under Maintenance</option>
                    <option value="Pending Retirement">Pending Retirement</option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
              </div>

              <div className="form-grid grid-2">
                <div className="form-field">
                  <label>Tool Condition <span className="required">*</span></label>
                  <select>
                    <option value="">Select Condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Worn">Worn</option>
                    <option value="Scrap">Scrap</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Ownership Type <span className="required">*</span></label>
                  <select>
                    <option value="">Select Ownership</option>
                    <option value="Company Owned">Company Owned</option>
                    <option value="Rented">Rented</option>
                    <option value="Leased">Leased</option>
                    <option value="Customer Owned">Customer Owned</option>
                  </select>
                </div>
              </div>


              <div className="form-field" style={{ marginTop: "16px" }}>
                <label>Tool Description</label>
                <textarea
                  rows="4"
                  placeholder="Enter detailed description of the tool..."
                ></textarea>
              </div>
              <div className="form-field" style={{ marginTop: "16px" }}>
                <label>Attachments</label>
                <div className="photo-grid">

                  <div className="photo-box">
                    <i className="fa-solid fa-camera"></i>

                    <span>
                      Add Tools Photos
                      <input type="file"  style={{opacity:0}}/>
                    </span>
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