import React, { useMemo, useState } from "react";

import "./Movements.scss";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import { useEffect } from 'react';
import Chart from 'chart.js/auto';


export default function Movements() {
 
useEffect(() => {
  // Movement Volume Chart
  const movChart = new Chart(document.getElementById('movChart'), {
    type: 'bar',
    data: {
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        { label: 'To agents', data: [12, 18, 10, 15, 14, 9], backgroundColor: '#C0392B', borderRadius: 3, barPercentage: 0.6 },
        { label: 'Returns to yard', data: [6, 8, 5, 9, 7, 4], backgroundColor: '#1E8449', borderRadius: 3, barPercentage: 0.6 },
        { label: 'To maintenance', data: [3, 4, 2, 5, 3, 2], backgroundColor: '#B7770D', borderRadius: 3, barPercentage: 0.6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { mode: 'index' } },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 }, color: '#9CA3AF' } },
        y: { stacked: true, grid: { color: '#F3F4F6' }, ticks: { font: { size: 10 }, color: '#9CA3AF' }, border: { display: false } }
      }
    }
  });

  // Tool Type Chart
  const typeChart = new Chart(document.getElementById('typeChart'), {
    type: 'bar',
    data: {
      labels: ['8-1/4" PBL High Flow', '6-3/4" PBL Sub', '4-3/4" PBL Sub', '9-1/2" PBL Sub', '5-1/4" PBL Sub'],
      datasets: [{
        data: [38, 29, 24, 14, 9],
        backgroundColor: ['#C0392B', '#2471A3', '#1E8449', '#B7770D', '#9CA3AF'],
        borderRadius: 4,
        barPercentage: 0.6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: '#F3F4F6' }, ticks: { font: { size: 10 }, color: '#9CA3AF' }, border: { display: false } },
        y: { grid: { display: false }, ticks: { font: { size: 10.5 }, color: '#374151' } }
      }
    }
  });

  return () => {
    movChart.destroy();
    typeChart.destroy();
  };
}, []);
  return (
    <Layout>
        <Header
  title="Movement Overview"
  subtitle="DSI FZE · All regions · May 2026"
  syncText="Dynamics synced"
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
      <div className="tools-page">

{/* KPI ROW */}
<div className="kpi-row">
  <div className="kpi-card">
    <div className="kpi-top">
      <div className="kpi-label">Active movements</div>
      <div className="kpi-icon ki-blue"><i className="fa-solid fa-truck"></i></div>
    </div>
    <div className="kpi-value">7</div>
    <div className="kpi-footer">Currently in transit or pending</div>
  </div>

  <div className="kpi-card">
    <div className="kpi-top">
      <div className="kpi-label">Dispatches this month</div>
      <div className="kpi-icon ki-red"><i className="fa-solid fa-paper-plane"></i></div>
    </div>
    <div className="kpi-value">14</div>
    <div className="kpi-footer up">
      <i className="fa-solid fa-arrow-up" style={{fontSize:"9px"}}></i> +3 vs last month
    </div>
  </div>

  <div className="kpi-card">
    <div className="kpi-top">
      <div className="kpi-label">Returns this month</div>
      <div className="kpi-icon ki-green"><i className="fa-solid fa-rotate-left"></i></div>
    </div>
    <div className="kpi-value">9</div>
    <div className="kpi-footer neutral">6 to yard · 3 to maintenance</div>
  </div>

  <div className="kpi-card">
    <div className="kpi-top">
      <div className="kpi-label">Avg transit time</div>
      <div className="kpi-icon ki-amber"><i className="fa-solid fa-clock"></i></div>
    </div>
    <div className="kpi-value">4.2</div>
    <div className="kpi-footer">Days · last 90 days</div>
  </div>

  <div className="kpi-card">
    <div className="kpi-top">
      <div className="kpi-label">Discrepancies</div>
      <div className="kpi-icon ki-purple"><i className="fa-solid fa-triangle-exclamation"></i></div>
    </div>
    <div className="kpi-value">3</div>
    <div className="kpi-footer down">2 open · 1 resolved</div>
  </div>
</div>

{/* FUNNEL */}
<div className="funnel-card">
  <div className="card-head">
    <div className="card-title">Movement status funnel — all active movements (7)</div>
    <div className="card-link">View all movements →</div>
  </div>
  <div className="funnel-wrap">
    <div className="funnel-stage">
      <div className="funnel-bar-wrap"><div className="funnel-bar" style={{background:"#2471A3", height:"52px"}}></div></div>
      <div className="funnel-count">7</div>
      <div className="funnel-label">Dispatch<br />Initiated</div>
      <div className="funnel-pct">100%</div>
    </div>
    <div className="funnel-arrow"><i className="fa-solid fa-chevron-right"></i></div>

    <div className="funnel-stage">
      <div className="funnel-bar-wrap"><div className="funnel-bar" style={{background:"#7D3C98", height:"40px"}}></div></div>
      <div className="funnel-count">5</div>
      <div className="funnel-label">In<br />Transit</div>
      <div className="funnel-pct">71%</div>
    </div>
    <div className="funnel-arrow"><i className="fa-solid fa-chevron-right"></i></div>

    <div className="funnel-stage">
      <div className="funnel-bar-wrap"><div className="funnel-bar" style={{background:"#B7770D", height:"20px"}}></div></div>
      <div className="funnel-count">2</div>
      <div className="funnel-label">Pending<br />Acknowledgement</div>
      <div className="funnel-pct">29%</div>
    </div>
    <div className="funnel-arrow"><i className="fa-solid fa-chevron-right"></i></div>

    <div className="funnel-stage">
      <div className="funnel-bar-wrap"><div className="funnel-bar" style={{background:"#1E8449", height:"0px"}}></div></div>
      <div className="funnel-count" style={{color:"var(--text-tertiary)"}}>0</div>
      <div className="funnel-label">Delivered<br />& Confirmed</div>
      <div className="funnel-pct">0%</div>
    </div>
    <div className="funnel-arrow"><i className="fa-solid fa-chevron-right"></i></div>

    <div className="funnel-stage">
      <div className="funnel-bar-wrap"><div className="funnel-bar" style={{background:"#9CA3AF", height:"0px"}}></div></div>
      <div className="funnel-count" style={{color:"var(--text-tertiary)"}}>0</div>
      <div className="funnel-label">Movement<br />Closed</div>
      <div className="funnel-pct">0%</div>
    </div>
  </div>

  {/* Month Totals */}
  <div style={{marginTop:"14px", paddingTop:"12px", borderTop:"1px solid var(--border-light)", display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"0"}}>
    <div style={{textAlign:"center", borderRight:"1px solid var(--border-light)", padding:"0 10px"}}>
      <div style={{fontSize:"10px", color:"var(--text-tertiary)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"3px"}}>This month total</div>
      <div style={{fontSize:"16px", fontWeight:"700", fontFamily:"var(--mono)", color:"var(--text-primary)"}}>23</div>
      <div style={{fontSize:"10.5px", color:"var(--text-tertiary)"}}>all movements</div>
    </div>
    <div style={{textAlign:"center", borderRight:"1px solid var(--border-light)", padding:"0 10px"}}>
      <div style={{fontSize:"10px", color:"var(--text-tertiary)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"3px"}}>To agents</div>
      <div style={{fontSize:"16px", fontWeight:"700", fontFamily:"var(--mono)", color:"var(--blue)"}}>14</div>
      <div style={{fontSize:"10.5px", color:"var(--text-tertiary)"}}>field dispatches</div>
    </div>
    <div style={{textAlign:"center", borderRight:"1px solid var(--border-light)", padding:"0 10px"}}>
      <div style={{fontSize:"10px", color:"var(--text-tertiary)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"3px"}}>To maintenance</div>
      <div style={{fontSize:"16px", fontWeight:"700", fontFamily:"var(--mono)", color:"var(--amber)"}}>5</div>
      <div style={{fontSize:"10.5px", color:"var(--text-tertiary)"}}>service returns</div>
    </div>
    <div style={{textAlign:"center", borderRight:"1px solid var(--border-light)", padding:"0 10px"}}>
      <div style={{fontSize:"10px", color:"var(--text-tertiary)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"3px"}}>To yard</div>
      <div style={{fontSize:"16px", fontWeight:"700", fontFamily:"var(--mono)", color:"var(--green)"}}>4</div>
      <div style={{fontSize:"10.5px", color:"var(--text-tertiary)"}}>returns to storage</div>
    </div>
    <div style={{textAlign:"center", padding:"0 10px"}}>
      <div style={{fontSize:"10px", color:"var(--text-tertiary)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:"3px"}}>Closed</div>
      <div style={{fontSize:"16px", fontWeight:"700", fontFamily:"var(--mono)", color:"var(--text-secondary)"}}>16</div>
      <div style={{fontSize:"10.5px", color:"var(--text-tertiary)"}}>completed</div>
    </div>
  </div>
</div>

{/* MID ROW */}
<div className="mid-row">
  <div className="card">
    <div className="card-head">
      <div className="card-title">Movement volume — dispatches vs returns (last 6 months)</div>
      <div className="card-link">Export →</div>
    </div>
    <div className="legend-row">
      <div className="legend-item"><div className="legend-sq" style={{background:"#C0392B"}}></div>To agents</div>
      <div className="legend-item"><div className="legend-sq" style={{background:"#1E8449"}}></div>Returns to yard</div>
      <div className="legend-item"><div className="legend-sq" style={{background:"#B7770D"}}></div>To maintenance</div>
    </div>
    <div style={{position:"relative", width:"100%", height:"160px"}}>
      <canvas id="movChart"></canvas>
    </div>
  </div>

  <div className="card">
    <div className="card-head">
      <div className="card-title">Dispatches by destination type</div>
    </div>
    <div className="dest-list">
      <div className="dest-row">
        <div className="dest-label">To agents — field</div>
        <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#C0392B", width:"82%"}}></div></div>
        <div className="dest-count">46</div>
      </div>
      <div className="dest-row">
        <div className="dest-label">To maintenance</div>
        <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#B7770D", width:"38%"}}></div></div>
        <div className="dest-count">21</div>
      </div>
      <div className="dest-row">
        <div className="dest-label">Returns to yard</div>
        <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#1E8449", width:"32%"}}></div></div>
        <div className="dest-count">18</div>
      </div>
      <div className="dest-row">
        <div className="dest-label">Inter-agent transfer</div>
        <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#2471A3", width:"12%"}}></div></div>
        <div className="dest-count">7</div>
      </div>
      <div className="dest-row">
        <div className="dest-label">Retirement disposal</div>
        <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#9CA3AF", width:"5%"}}></div></div>
        <div className="dest-count">3</div>
      </div>
    </div>

    <div className="avg-stats" style={{marginTop:"12px"}}>
      <div className="avg-stat-card">
        <div className="avg-stat-val">4.2 <span style={{fontSize:"14px", color:"var(--text-tertiary)"}}>days</span></div>
        <div className="avg-stat-label">Avg. transit time to agent</div>
      </div>
      <div className="avg-stat-card">
        <div className="avg-stat-val">2.8 <span style={{fontSize:"14px", color:"var(--text-tertiary)"}}>days</span></div>
        <div className="avg-stat-label">Avg. time to acknowledge</div>
      </div>
    </div>
  </div>
</div>

{/* BOTTOM ROW */}
<div className="bot-row">
  <div className="card">
    <div className="card-head">
      <div className="card-title">Recent movements</div>
      <div className="card-link">View all →</div>
    </div>
    <table className="mov-table">
      <thead>
        <tr>
          <th>DT Ref</th>
          <th>Tools</th>
          <th>Destination / Agent</th>
          <th>Dispatched</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span className="dt-ref">DT-11005261</span></td>
          <td style={{fontSize:"11.5px"}}>2 × 8-1/4" PBL</td>
          <td style={{fontSize:"11.5px", color:"var(--text-secondary)"}}>Zhigermunai LLP</td>
          <td style={{fontSize:"11px", color:"var(--text-tertiary)"}}>12 Jan 2026</td>
          <td><span className="pill p-delivered"><span className="pill-dot" style={{background:"var(--green)"}}></span>Delivered</span></td>
        </tr>
        <tr>
          <td><span className="dt-ref">DT-11005289</span></td>
          <td style={{fontSize:"11.5px"}}>1 × 4-3/4" PBL</td>
          <td style={{fontSize:"11.5px", color:"var(--text-secondary)"}}>ADES Group</td>
          <td style={{fontSize:"11px", color:"var(--text-tertiary)"}}>28 Apr 2026</td>
          <td><span className="pill p-transit"><span className="pill-dot" style={{background:"var(--purple)"}}></span>In transit</span></td>
        </tr>
        <tr>
          <td><span className="dt-ref">DT-11005301</span></td>
          <td style={{fontSize:"11.5px"}}>3 × 6-3/4" PBL</td>
          <td style={{fontSize:"11.5px", color:"var(--text-secondary)"}}>Target Energy</td>
          <td style={{fontSize:"11px", color:"var(--text-tertiary)"}}>02 May 2026</td>
          <td><span className="pill p-transit"><span className="pill-dot" style={{background:"var(--purple)"}}></span>In transit</span></td>
        </tr>
        <tr>
          <td><span className="dt-ref">DT-11005308</span></td>
          <td style={{fontSize:"11.5px"}}>1 × 9-1/2" PBL</td>
          <td style={{fontSize:"11.5px", color:"var(--text-secondary)"}}>DSI Maintenance</td>
          <td style={{fontSize:"11px", color:"var(--text-tertiary)"}}>05 May 2026</td>
          <td><span className="pill p-initiated"><span className="pill-dot" style={{background:"var(--blue)"}}></span>Initiated</span></td>
        </tr>
        <tr>
          <td><span className="dt-ref">DT-11005312</span></td>
          <td style={{fontSize:"11.5px"}}>2 × 8-1/4" PBL</td>
          <td style={{fontSize:"11.5px", color:"var(--text-secondary)"}}>Saipem Nigeria</td>
          <td style={{fontSize:"11px", color:"var(--text-tertiary)"}}>08 May 2026</td>
          <td><span className="pill p-discrepancy"><span className="pill-dot" style={{background:"var(--amber)"}}></span>Discrepancy</span></td>
        </tr>
        <tr>
          <td><span className="dt-ref">DT-11005287</span></td>
          <td style={{fontSize:"11.5px"}}>1 × 5-1/4" PBL</td>
          <td style={{fontSize:"11.5px", color:"var(--text-secondary)"}}>DSI FZE Yard</td>
          <td style={{fontSize:"11px", color:"var(--text-tertiary)"}}>22 Apr 2026</td>
          <td><span className="pill p-closed"><span className="pill-dot" style={{background:"var(--text-tertiary)"}}></span>Closed</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="card">
    <div className="card-head">
      <div className="card-title">Most dispatched tool types — YTD</div>
    </div>
    <div style={{position:"relative", width:"100%", height:"180px"}}>
      <canvas id="typeChart"></canvas>
    </div>

    <div style={{marginTop:"14px", paddingTop:"12px", borderTop:"1px solid var(--border-light)"}}>
      <div className="card-head" style={{marginBottom:"10px"}}>
        <div className="card-title" style={{fontSize:"12px"}}>Top agents by dispatch count — YTD</div>
      </div>
      <div className="dest-list">
        <div className="dest-row">
          <div className="dest-label" style={{minWidth:"160px"}}>Zhigermunai LLP</div>
          <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#C0392B", width:"75%"}}></div></div>
          <div className="dest-count">18</div>
        </div>
        <div className="dest-row">
          <div className="dest-label" style={{minWidth:"160px"}}>ADES Group</div>
          <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#2471A3", width:"50%"}}></div></div>
          <div className="dest-count">12</div>
        </div>
        <div className="dest-row">
          <div className="dest-label" style={{minWidth:"160px"}}>Target Energy</div>
          <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#1E8449", width:"38%"}}></div></div>
          <div className="dest-count">9</div>
        </div>
        <div className="dest-row">
          <div className="dest-label" style={{minWidth:"160px"}}>Saipem Nigeria</div>
          <div className="dest-bar-track"><div className="dest-bar-fill" style={{background:"#B7770D", width:"25%"}}></div></div>
          <div className="dest-count">6</div>
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