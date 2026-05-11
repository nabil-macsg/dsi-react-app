import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip } from 'chart.js';
import Toolbar from '../../components/Toolbar';
import './Dashboard.scss'; // Create this file for styling
import Layout from '../../components/Layout';
import Header from '../../components/Header';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip);

const toolsData = [
  {
    sn: "HYD475BP112",
    type: "PBL Sub",
    size: '4-3/4"',
    status: "In storage",
    region: "Middle East",
    agent: "DSI FZE Yard",
    lastService: "27 Jan 2026",
    nextDue: "27 Jul 2026",
    dueSeverity: "ok",
    cost: "42,500",
  },
  {
    sn: "HYD825BP399",
    type: "PBL High Flow",
    size: '8-1/4"',
    status: "In field",
    region: "Central Asia",
    agent: "Zhigermunai LLP",
    lastService: "06 Jan 2026",
    nextDue: "06 Jul 2026",
    dueSeverity: "warn",
    cost: "68,000",
  },
  {
    sn: "HYD525BP044",
    type: "PBL Sub",
    size: '5-1/4"',
    status: "Under maintenance",
    region: "Middle East",
    agent: "ADES Group",
    lastService: "10 Oct 2025",
    nextDue: "10 Apr 2026",
    dueSeverity: "overdue",
    cost: "48,000",
  },
  {
    sn: "HYD675BP211",
    type: "PBL Sub",
    size: '6-3/4"',
    status: "In field",
    region: "Middle East",
    agent: "Target Energy",
    lastService: "15 Nov 2025",
    nextDue: "15 May 2026",
    dueSeverity: "warn",
    cost: "55,000",
  },
  {
    sn: "HYD950BP033",
    type: "PBL Sub",
    size: '9-1/2"',
    status: "In storage",
    region: "Middle East",
    agent: "DSI FZE Yard",
    lastService: "02 Dec 2025",
    nextDue: "02 Jun 2026",
    dueSeverity: "ok",
    cost: "82,000",
  },
];

export default function RepositoryInsights() {
  // KPI Data
  const totalTools = toolsData.length;
  const inStorage = toolsData.filter(t => t.status === "In storage").length;
  const inField = toolsData.filter(t => t.status === "In field").length;
  const underMaint = toolsData.filter(t => t.status === "Under maintenance").length;
  const overdue = toolsData.filter(t => t.dueSeverity === "overdue").length;

  const kpis = [
    ['Total Tools', totalTools.toString(), 'In repository', 'neutral', 'fa-screwdriver-wrench', 'icon-purple'],
    ['In Storage', inStorage.toString(), 'Ready to deploy', 'up', 'fa-warehouse', 'icon-green'],
    ['In Field', inField.toString(), 'With agents', 'neutral', 'fa-map-pin', 'icon-blue'],
    ['Under Maintenance', underMaint.toString(), `${overdue} overdue`, 'down', 'fa-gears', 'icon-amber'],
    ['Avg Tool Value', '$58.9k', 'Based on 5 tools', 'neutral', 'fa-dollar-sign', 'icon-gray'],
  ];

  // Status Distribution (Doughnut)
  const statusData = {
    labels: ['In Storage', 'In Field', 'Under Maintenance'],
    datasets: [{
      data: [inStorage, inField, underMaint],
      backgroundColor: ['#1E8449', '#2471A3', '#B7770D'],
      borderWidth: 0,
      hoverOffset: 8
    }]
  };

  const statusOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: { legend: { display: false } }
  };

  // Size Distribution (Bar)
  const sizeCount = {
    '4-3/4"': 1,
    '5-1/4"': 1,
    '6-3/4"': 1,
    '8-1/4"': 1,
    '9-1/2"': 1,
  };

  const barData = {
    labels: Object.keys(sizeCount),
    datasets: [{
      label: 'Tools by Size',
      data: Object.values(sizeCount),
      backgroundColor: '#2471A3',
      borderRadius: 4,
      barPercentage: 0.6
    }]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#9CA3AF' } },
      y: { grid: { color: '#F3F4F6' }, ticks: { color: '#9CA3AF', stepSize: 1 } }
    }
  };

  return (
    <Layout>
      <Header 
      title='Repository Insights'
      subtitle='Overview of tool inventory, condition & utilization • Updated today'
      />
      <div className="scroll-body">
        

        {/* KPI ROW */}
        <div className="kpi-row">
          {kpis.map(([label, value, footer, trend, icon, color]) => (
            <div className="kpi-card" key={label}>
              <div className="kpi-top">
                <div className="kpi-label">{label}</div>
                <div className={`kpi-icon-wrap ${color}`}>
                  <i className={`fa-solid ${icon}`} />
                </div>
              </div>
              <div className="kpi-value">{value}</div>
              <div className={`kpi-footer ${trend}`}>
                {trend === 'up' && <i className="fa-solid fa-arrow-up" />}
                {trend === 'down' && <i className="fa-solid fa-arrow-down" />}
                {footer}
              </div>
            </div>
          ))}
        </div>

        {/* MID ROW - Charts */}
        <div className="mid-row">
          {/* Status Distribution */}
          <div className="card">
            <Toolbar title="Tools by Current Status" actionText="View full inventory →" />
            <div className="donut-wrap">
              <div className="donut-box">
                <Doughnut data={statusData} options={statusOptions} />
              </div>
              <div className="donut-legend">
                {['In Storage', 'In Field', 'Under Maintenance'].map((label, i) => (
                  <div className="donut-line" key={label}>
                    <div className="donut-left">
                      <div className="donut-color" style={{ background: ['#1E8449', '#2471A3', '#B7770D'][i] }} />
                      {label}
                    </div>
                    <div className="donut-count">
                      {[inStorage, inField, underMaint][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Size Distribution */}
          <div className="card">
            <Toolbar title="Tools by Size" actionText="View all sizes →" />
            <div className="chart-box" style={{ height: "220px" }}>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>

        {/* TOOLS TABLE */}
        <div className="card" style={{ marginTop: "24px" }}>
          <Toolbar title="Recent Tools in Repository" actionText="View all tools →" />
          <table className="repo-table">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Type & Size</th>
                <th>Status</th>
                <th>Current Location</th>
                <th>Last Service</th>
                <th>Next Due</th>
                <th>Value (USD)</th>
              </tr>
            </thead>
            <tbody>
              {toolsData.map(tool => (
                <tr key={tool.sn}>
                  <td><strong>{tool.sn}</strong></td>
                  <td>{tool.type} <span style={{ color: "#666" }}>{tool.size}</span></td>
                  <td>
                    <span className={`status-pill ${tool.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tool.status}
                    </span>
                  </td>
                  <td>{tool.agent}</td>
                  <td>{tool.lastService}</td>
                  <td className={tool.dueSeverity === 'overdue' ? 'overdue' : ''}>
                    {tool.nextDue}
                  </td>
                  <td>${tool.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}