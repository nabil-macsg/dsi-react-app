const sections = [
  { label: 'Overview', items: [{ icon: 'fa-gauge-high', text: 'Dashboard', active: true }, { icon: 'fa-bell', text: 'Alerts', badge: '3', alert: true }] },
  { label: 'Tool Repository', items: [{ icon: 'fa-screwdriver-wrench', text: 'All Tools' }, { icon: 'fa-chart-pie', text: 'Repository Insights' }, { icon: 'fa-circle-plus', text: 'Register Tool' }] },
  { label: 'Tool Movement', items: [{ icon: 'fa-truck', text: 'Movements', badge: '7' }, { icon: 'fa-paper-plane', text: 'New Dispatch' }, { icon: 'fa-boxes-stacked', text: 'Spare Parts' }] },
  { label: 'Maintenance', items: [{ icon: 'fa-gear', text: 'All Jobs' }, { icon: 'fa-file-lines', text: 'Service Form' }, { icon: 'fa-layer-group', text: 'Strip Down' }] },
  { label: 'Asset Lifecycle', items: [{ icon: 'fa-box-archive', text: 'Retirements' }, { icon: 'fa-earth-asia', text: 'Regions & Agents' }] }
]

export default function Sidebar() {
  return <aside className="sidebar">
    <div className="sidebar-logo"><div className="logo-wrap"><div className="logo-mark">DSI</div><div className="logo-text-wrap"><div className="logo-title">PBL Platform</div><div className="logo-sub">Tool Management System</div></div></div></div>
    <nav className="nav-body">
      {sections.map(section => <div key={section.label}>
        <div className="nav-section-label">{section.label}</div>
        {section.items.map(item => <div key={item.text} className={`nav-item ${item.active ? 'active' : ''}`}><i className={`fa-solid ${item.icon}`}></i>{item.text}{item.badge && <span className={`nav-badge ${item.alert ? 'alert' : ''}`}>{item.badge}</span>}</div>)}
      </div>)}
    </nav>
    <div className="sidebar-footer"><div className="user-row"><div className="user-avatar">SK</div><div className="user-details"><div className="user-name">Shafi Karunan</div><div className="user-role">QA Supervisor — DSI FZE</div></div><div className="logout-btn"><i className="fa-solid fa-arrow-right-from-bracket"></i></div></div></div>
  </aside>
}
