import { Link, useLocation } from 'react-router-dom';

const sections = [
  {
    label: 'Overview',
    items: [
      { icon: 'fa-gauge-high', text: 'Dashboard', to: '/' },
    ]
  },
  {
    label: 'Tool Repository',
    items: [
      { icon: 'fa-screwdriver-wrench', text: 'All Tools', to: '/tools' },
      { icon: 'fa-chart-pie', text: 'Repository Insights', to: '/repository-insights' },
      { icon: 'fa-circle-plus', text: 'Register Tool', to: '/tools/add' },
      { icon: 'fa-map-location-dot', text: 'Tool Distribution', to: '/tool-distribution' },
    ]
  },
  {
    label: 'Tool Movement',
    items: [
      { icon: 'fa-truck', text: 'Movements', badge: '7', to: '/movements' },
      { icon: 'fa-paper-plane', text: 'All Dispatch', to: '/dispatch/all' },
      { icon: 'fa-receipt', text: 'Acknowledges and Receipts', to: '/receipts' },
      { icon: 'fa-boxes-stacked', text: 'Spare Parts', to: '/pm/spareparts' }
    ]
  },
  {
    label: 'Asset Lifecycle',
    items: [
      { icon: 'fa-box-archive', text: 'Retirements', to: '/tools/retirements' },
    ]
  }
];

export default function Sidebar() {

  const location = useLocation();

  const isActive = (path) => {

    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-wrap">
          <div className="logo-mark">DSI</div>

          <div className="logo-text-wrap">
            <div className="logo-title">PBL Platform</div>
            <div className="logo-sub">Tool Management System</div>
          </div>
        </div>
      </div>

      <nav className="nav-body">

        {sections.map((section) => (
          <div key={section.label}>

            <div className="nav-section-label">
              {section.label}
            </div>

            {section.items.map((item) => (

              <Link
                key={item.text}
                to={item.to}
                className={`nav-item ${isActive(item.to) ? 'active' : ''}`}
              >

                <i className={`fa-solid ${item.icon}`} />

                {item.text}

                {item.badge && (
                  <span className={`nav-badge ${item.alert ? 'alert' : ''}`}>
                    {item.badge}
                  </span>
                )}

              </Link>

            ))}

          </div>
        ))}

      </nav>

      <div className="sidebar-footer">

        <div className="user-row">

          <div className="user-avatar">
            NU
          </div>

          <div className="user-details">
            <div className="user-name">Nabil Uchummal</div>
            <div className="user-role">QA Supervisor — DSI FZE</div>
          </div>

          <div className="logout-btn">
            <i className="fa-solid fa-arrow-right-from-bracket" />
          </div>

        </div>

      </div>

    </aside>
  );
}