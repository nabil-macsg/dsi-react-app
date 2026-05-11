import { Bar, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip } from 'chart.js'
import Toolbar from '../../components/Toolbar'
import './Dashboard.scss'
import Layout from '../../components/Layout'
import Header from '../../components/Header'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip)

const kpis = [
  ['Total tools', '142', '4 added this quarter', 'up', 'fa-screwdriver-wrench', 'icon-red'],
  ['In field', '58', 'Across 12 agents', 'neutral', 'fa-map-pin', 'icon-blue'],
  ['In storage', '49', 'DSI yard — available', 'neutral', 'fa-warehouse', 'icon-green'],
  ['Under maintenance', '27', '6 jobs overdue', 'down', 'fa-gears', 'icon-amber'],
  ['Pending retirement', '8', '3 awaiting approval', 'neutral', 'fa-box-archive', 'icon-gray']
]

const barData = {
  labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'Dispatches', data: [14, 18, 11, 16, 13, 9], backgroundColor: '#C0392B', borderRadius: 4, barPercentage: .5, categoryPercentage: .7 },
    { label: 'Returns', data: [9, 12, 8, 14, 10, 6], backgroundColor: '#2471A3', borderRadius: 4, barPercentage: .5, categoryPercentage: .7 }
  ]
}

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { mode: 'index' } },
  scales: {
    x: { grid: { display: false }, ticks: { font: { family: 'DM Sans', size: 11 }, color: '#9CA3AF' } },
    y: { grid: { color: '#F3F4F6' }, ticks: { font: { family: 'DM Sans', size: 11 }, color: '#9CA3AF', stepSize: 5 }, border: { display: false } }
  }
}

const donutItems = [
  ['In field', 58, '#2471A3'],
  ['In storage', 49, '#1E8449'],
  ['Maintenance', 27, '#B7770D'],
  ['Retirement', 8, '#9CA3AF']
]

const donutData = {
  labels: donutItems.map(x => x[0]),
  datasets: [{ data: donutItems.map(x => x[1]), backgroundColor: donutItems.map(x => x[2]), borderWidth: 0, hoverOffset: 4 }]
}

const donutOptions = { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}` } } } }

export default function Dashboard() {
  return <>
    <Layout>
      <Header/>
      <div className="scroll-body">
      <div className="alert-banner"><div className="alert-icon"><i className="fa-solid fa-triangle-exclamation"></i></div><div className="alert-text"><strong>Quality alert:</strong> Batch HTSEDM417968 seal kits flagged for inspection — do not dispatch until cleared. Issued by QA team · 2 hours ago.</div><div className="alert-dismiss">View alert →</div></div>

      <div className="kpi-row">{kpis.map(([label, value, footer, trend, icon, color]) => <div className="kpi-card" key={label}><div className="kpi-top"><div className="kpi-label">{label}</div><div className={`kpi-icon-wrap ${color}`}><i className={`fa-solid ${icon}`}></i></div></div><div className="kpi-value">{value}</div><div className={`kpi-footer ${trend}`}>{trend === 'up' && <i className="fa-solid fa-arrow-up"></i>}{trend === 'down' && <i className="fa-solid fa-circle-exclamation"></i>}{footer}</div></div>)}</div>

      <div className="mid-row">
        <div className="card"><Toolbar title="Movement activity — dispatches vs returns (last 6 months)" actionText="View all movements →" /><div className="legend-row"><div className="legend-item"><div className="legend-sq" style={{ background: '#C0392B' }} /> Dispatches</div><div className="legend-item"><div className="legend-sq" style={{ background: '#2471A3' }} /> Returns</div></div><div className="chart-box"><Bar data={barData} options={barOptions} /></div></div>
        <div className="card"><Toolbar title="Tools by status" actionText="Full breakdown →" /><div className="donut-wrap"><div className="donut-box"><Doughnut data={donutData} options={donutOptions} /></div><div className="donut-legend">{donutItems.map(([label, count, color]) => <div className="donut-line" key={label}><div className="donut-left"><div className="donut-color" style={{ background: color }} />{label}</div><div className="donut-count">{count}</div></div>)}</div></div></div>
      </div>

      <div className="bot-row"><RegionCard /><MaintenanceCard /><ActivityCard /></div>
      </div>
    </Layout>
  </>
}

function RegionCard() {
  const rows = [['Middle East',62,'#C0392B','78%'],['Central Asia',36,'#2471A3','45%'],['South Asia',24,'#1E8449','30%'],['Africa',20,'#B7770D','25%']]
  return <div className="card"><Toolbar title="Tools by region" actionText="Manage →" /><div className="status-list">{rows.map(([name,count,color,width]) => <div className="status-item" key={name}><div className="status-left"><div className="dot" style={{ background: color }} /><span>{name}</span></div><div className="status-bar-wrap"><div className="status-bar" style={{ background: color, width }} /></div><div className="status-count">{count}</div></div>)}</div></div>
}

function MaintenanceCard() {
  const rows = [['HYD475BP112','4-3/4" PBL · Zhigermunai LLP','Overdue','pill-overdue'],['HYD825BP399','8-1/4" PBL · Al Mansoori','Due in 3 days','pill-due-soon'],['HYD525BP044','5-1/4" PBL · ADES Group','Due in 5 days','pill-due-soon'],['HYD675BP211','6-3/4" PBL · Target Energy','Scheduled','pill-scheduled']]
  return <div className="card"><Toolbar title="Maintenance due" actionText="All jobs →" /><div className="maint-list">{rows.map(([sn,detail,pill,cls]) => <div className="maint-item" key={sn}><div className="maint-left"><div className="maint-sn">{sn}</div><div className="maint-detail">{detail}</div></div><div className={`pill ${cls}`}>{pill}</div></div>)}</div></div>
}

function ActivityCard() {
  const rows = [['act-alert','fa-triangle-exclamation','Quality alert broadcast —','seal kit batch HTSEDM417968','flagged','Today · 08:14 AM · Shafi K.'],['act-dispatch','fa-truck','Dispatch','DT-11005261','confirmed received by Zhigermunai LLP','Yesterday · 03:42 PM · Sujith K.'],['act-maint','fa-gear','Service report completed —','HYD475BP112','· Score 37/37','27 Jan 2026 · 01:09 PM · Ganesh K.'],['act-return','fa-rotate-left','','HYD825BP386','returned to DSI yard — condition: Good','25 Jan 2026 · 11:20 AM · Rahul M.']]
  return <div className="card"><Toolbar title="Recent activity" actionText="Full log →" /><div className="activity-list">{rows.map(([cls,icon,prefix,strong,suffix,time]) => <div className="activity-item" key={time}><div className={`act-icon ${cls}`}><i className={`fa-solid ${icon}`}></i></div><div className="act-body"><div className="act-text">{prefix} <span>{strong}</span> {suffix}</div><div className="act-time">{time}</div></div></div>)}</div></div>
}
