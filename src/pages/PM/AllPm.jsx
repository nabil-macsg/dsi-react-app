import React, { useMemo, useState } from "react";
import "./Pm.scss"; // We'll create this
import Layout from "../../components/LayoutPM";
import Header from "../../components/HeaderPM";
import { Link } from "react-router-dom";

const maintenanceData = [
  {
    jobRef: "MJN-2026-031",
    toolSn: "HYD675BP188",
    toolType: "6-3/4\" PBL Sub",
    jobType: "Strip Down",
    location: "DSI FZE Yard",
    agent: "Saipem Nigeria",
    technician: "Sasikarunan",
    techInitials: "SK",
    techColor: "#C0392B",
    status: "Overdue",
    created: "01 Aug 2025",
    dueDate: "01 Feb 2026",
    priority: "high",
    jobCategory: "stripdown"
  },
  {
    jobRef: "MJN-2026-038",
    toolSn: "HYD950BP019",
    toolType: "9-1/2\" PBL Sub",
    jobType: "Service",
    location: "Agent site",
    agent: "KMG Drilling",
    technician: "Ganeshkumar",
    techInitials: "GK",
    techColor: "#1E8449",
    status: "Overdue",
    created: "30 Jul 2025",
    dueDate: "30 Jan 2026",
    priority: "high",
    jobCategory: "service"
  },
  {
    jobRef: "MJN-2026-047",
    toolSn: "HYD475BP112",
    toolType: "4-3/4\" PBL Sub",
    jobType: "Service",
    location: "DSI FZE Yard",
    agent: "DSI FZE",
    technician: "Sasikarunan",
    techInitials: "SK",
    techColor: "#C0392B",
    status: "In progress",
    created: "23 Jan 2026",
    dueDate: "27 Jul 2026",
    priority: "high",
    jobCategory: "service"
  },
  {
    jobRef: "MJN-2026-052",
    toolSn: "HYD825BP399",
    toolType: "8-1/4\" PBL High Flow",
    jobType: "Service",
    location: "Agent site",
    agent: "Zhigermunai LLP",
    technician: "Azamat Bekov",
    techInitials: "AB",
    techColor: "#2471A3",
    status: "Open",
    created: "06 Jan 2026",
    dueDate: "06 Jul 2026",
    priority: "medium",
    jobCategory: "service"
  },
  {
    jobRef: "SD-2026-012",
    toolSn: "HYD675BP188",
    toolType: "6-3/4\" PBL Sub",
    jobType: "Strip Down",
    location: "DSI FZE Yard",
    agent: "Saipem Nigeria",
    technician: "Sasikarunan",
    techInitials: "SK",
    techColor: "#C0392B",
    status: "In progress",
    created: "10 May 2026",
    dueDate: "24 May 2026",
    priority: "medium",
    jobCategory: "stripdown"
  },
  {
    jobRef: "MJN-2026-061",
    toolSn: "HYD700BP518",
    toolType: "7\" PBL High Torque",
    jobType: "Service",
    location: "DSI FZE Yard",
    agent: "Nile Drilling",
    technician: "Rahul Menon",
    techInitials: "RM",
    techColor: "#8E44AD",
    status: "Completed",
    created: "18 Dec 2025",
    dueDate: "18 Jun 2026",
    priority: "low",
    jobCategory: "service"
  },
  {
    jobRef: "MJN-2026-066",
    toolSn: "HYD350BP127",
    toolType: "3-1/2\" PBL Compact",
    jobType: "Repair",
    location: "DSI Service Bay",
    agent: "PetroServe India",
    technician: "Ganeshkumar",
    techInitials: "GK",
    techColor: "#1E8449",
    status: "Overdue",
    created: "22 Sep 2025",
    dueDate: "22 Mar 2026",
    priority: "high",
    jobCategory: "repair"
  },
  {
    jobRef: "MJN-2026-071",
    toolSn: "HYD875BP602",
    toolType: "8-3/4\" PBL High Flow",
    jobType: "Inspection",
    location: "KazDrill Facility",
    agent: "KazMunay Tools",
    technician: "Ruslan Akhmetov",
    techInitials: "RA",
    techColor: "#2471A3",
    status: "Open",
    created: "11 Jan 2026",
    dueDate: "11 Jul 2026",
    priority: "medium",
    jobCategory: "inspection"
  },
  {
    jobRef: "SD-2026-018",
    toolSn: "HYD600BP289",
    toolType: "6\" PBL Sub",
    jobType: "Strip Down",
    location: "DSI FZE Yard",
    agent: "Al Mansoori",
    technician: "Sujithkumar",
    techInitials: "SJ",
    techColor: "#D35400",
    status: "In progress",
    created: "08 May 2026",
    dueDate: "22 May 2026",
    priority: "medium",
    jobCategory: "stripdown"
  },
  {
    jobRef: "MJN-2026-079",
    toolSn: "HYD775BP455",
    toolType: "7-3/4\" PBL High Torque",
    jobType: "Service",
    location: "Agent site",
    agent: "PetroServe India",
    technician: "Anil Kumar",
    techInitials: "AK",
    techColor: "#16A085",
    status: "Open",
    created: "30 Dec 2025",
    dueDate: "30 Jun 2026",
    priority: "medium",
    jobCategory: "service"
  },
  {
    jobRef: "MJN-2026-084",
    toolSn: "HYD925BP731",
    toolType: "9-1/4\" PBL High Flow",
    jobType: "Repair",
    location: "KazDrill Facility",
    agent: "KazDrill Services",
    technician: "Yerlan Sadykov",
    techInitials: "YS",
    techColor: "#2C3E50",
    status: "Overdue",
    created: "01 Oct 2025",
    dueDate: "01 Apr 2026",
    priority: "high",
    jobCategory: "repair"
  },
  {
    jobRef: "SD-2026-021",
    toolSn: "HYD450BP188",
    toolType: "4-1/2\" PBL Compact",
    jobType: "Strip Down",
    location: "DSI Africa Hub",
    agent: "DSI Africa Hub",
    technician: "Samuel Adeyemi",
    techInitials: "SA",
    techColor: "#7D3C98",
    status: "Completed",
    created: "14 Jan 2026",
    dueDate: "14 Jul 2026",
    priority: "low",
    jobCategory: "stripdown"
  },
];

export default function AllPm() {
  const [search, setSearch] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredJobs = useMemo(() => {
    return maintenanceData.filter((job) => {
      const matchesSearch =
        !search ||
        job.jobRef.toLowerCase().includes(search.toLowerCase()) ||
        job.toolSn.toLowerCase().includes(search.toLowerCase()) ||
        job.agent.toLowerCase().includes(search.toLowerCase()) ||
        job.technician.toLowerCase().includes(search.toLowerCase());

      const matchesType = !jobTypeFilter || job.jobType === jobTypeFilter;
      const matchesStatus = !statusFilter || job.status === statusFilter;
      const matchesLocation = !locationFilter || job.location === locationFilter;

      return matchesSearch && matchesType && matchesStatus && matchesLocation;
    });
  }, [search, jobTypeFilter, statusFilter, locationFilter]);

  const toggleRow = (jobRef) => {
    setSelectedRows((prev) =>
      prev.includes(jobRef) ? prev.filter((id) => id !== jobRef) : [...prev, jobRef]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === filteredJobs.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredJobs.map((j) => j.jobRef));
    }
  };

  return (
    <Layout>
      <Header
        title="Maintenance Jobs"
        subtitle="All maintenance requests · DSI FZE · 27 active jobs"
        syncText=""
        rightContent={
          <>
            <button className="topbar-btn"><i className="fa-solid fa-download"></i></button>
            <button className="topbar-btn"><i className="fa-solid fa-sliders"></i></button>
            <button className="add-btn">

              <i className="fa-solid fa-plus"></i> <Link to="/pm/add"> New Job</Link>
            </button>
          </>
        }
      />

      <div className="scroll-body">
        <div className="pm-page">

          {/* MINI KPI ROW */}
          <div className="mini-kpi-row">
            <div className="mini-kpi">
              <div className="mki-icon i-amber"><i className="fa-solid fa-gears"></i></div>
              <div><div className="mki-val">27</div><div className="mki-label">Total active jobs</div></div>
            </div>
            <div className="mini-kpi">
              <div className="mki-icon i-red"><i className="fa-solid fa-circle-exclamation"></i></div>
              <div><div className="mki-val">6</div><div className="mki-label">Overdue</div></div>
            </div>
            <div className="mini-kpi">
              <div className="mki-icon i-blue"><i className="fa-solid fa-file-lines"></i></div>
              <div><div className="mki-val">19</div><div className="mki-label">Service jobs</div></div>
            </div>
            <div className="mini-kpi">
              <div className="mki-icon i-purple"><i className="fa-solid fa-layer-group"></i></div>
              <div><div className="mki-val">8</div><div className="mki-label">Strip down jobs</div></div>
            </div>
            <div className="mini-kpi">
              <div className="mki-icon i-green"><i className="fa-solid fa-building"></i></div>
              <div><div className="mki-val">14</div><div className="mki-label">At DSI</div></div>
            </div>
            <div className="mini-kpi">
              <div className="mki-icon i-blue"><i className="fa-solid fa-map-pin"></i></div>
              <div><div className="mki-val">13</div><div className="mki-label">At agent site</div></div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="filters-bar">
            <div className="search-wrap">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className="search-input"
                type="text"
                placeholder="Search serial no., technician, agent…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select className="filter-sel" value={jobTypeFilter} onChange={(e) => setJobTypeFilter(e.target.value)}>
              <option value="">All job types</option>
              <option value="Service">Service</option>
              <option value="Strip Down">Strip Down</option>
            </select>

            <select className="filter-sel" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="">All locations</option>
              <option value="DSI FZE Yard">DSI FZE Yard</option>
              <option value="Agent site">Agent site</option>
            </select>

            <select className="filter-sel" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All statuses</option>
              <option value="Open">Open</option>
              <option value="In progress">In progress</option>
              <option value="Overdue">Overdue</option>
              <option value="Pending approval">Pending approval</option>
              <option value="Completed">Completed</option>
            </select>

            <div className="filters-right">
              <span className="result-count">Showing {filteredJobs.length} jobs</span>
            </div>
          </div>

          {/* TABS */}
          <div className="tab-bar">
            <div className="tab active">All jobs <span className="tab-count">27</span></div>
            <div className="tab">Overdue <span className="tab-count" style={{ background: "#C0392B", color: "#fff" }}>6</span></div>
            <div className="tab">In progress <span className="tab-count normal">11</span></div>
            <div className="tab">Open / Pending <span className="tab-count normal">10</span></div>
            <div className="tab">Pending approval <span className="tab-count normal">4</span></div>
            <div className="tab">Completed <span className="tab-count normal">2</span></div>
          </div>

          {/* TABLE */}
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "4px", padding: "0" }}></th>
                  <th>Job ref</th>
                  <th>Tool serial</th>
                  <th>Tool type / size</th>
                  <th>Job type</th>
                  <th>Location</th>
                  <th>Agent</th>
                  <th>Assigned technician</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Due date</th>
                  <th style={{ width: "70px" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job.jobRef} className={job.status === "Overdue" ? "overdue-row" : ""}>
                    <td style={{ padding: "0" }}>
                      <div className={`priority-bar pri-${job.priority}`}></div>
                    </td>
                    <td className="mono" style={job.status === "Overdue" ? { color: "#C0392B" } : {}}>
                      {job.jobRef}
                    </td>
                    <td className="mono">{job.toolSn}</td>
                    <td>{job.toolType}</td>
                    <td>
                      <span className={`pill ${job.jobCategory === "stripdown" ? "p-stripdown" : "p-service"}`}>
                        <span className="pill-dot"></span>
                        {job.jobType}
                      </span>
                    </td>
                    <td><span className="pill p-dsi">{job.location}</span></td>
                    <td style={{ fontSize: "11.5px", color: "var(--text-secondary)" }}>{job.agent}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div className="tech-avatar" style={{ background: job.techColor }}>
                          {job.techInitials}
                        </div>
                        <span style={{ fontSize: "12px" }}>{job.technician}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`pill ${job.status === "Overdue" ? "p-overdue" : job.status === "In progress" ? "p-inprog" : job.status === "Open" ? "p-open" : "p-pending"}`}>
                        <span className="pill-dot"></span>
                        {job.status}
                      </span>
                    </td>
                    <td className="date-ok">{job.created}</td>
                    <td className={job.status === "Overdue" ? "date-overdue" : "date-warn"}>
                      {job.dueDate}
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="row-btn"><i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                        <button className="row-btn"><i className="fa-solid fa-user-plus"></i></button>
                        <button className="row-btn"><i className="fa-solid fa-ellipsis"></i></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            <div className="page-info">Page 1 of 3 · 27 total jobs</div>
            <div className="page-btns">
              <button className="page-btn"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}