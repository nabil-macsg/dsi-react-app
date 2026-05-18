import { Link } from 'react-router-dom';

const sections = [
  {
    label: 'Maintenance',
    items: [
      { icon: 'fa-gear', text: 'All Jobs', to: '/pm' },
      { icon: 'fa-file-lines', text: 'Service Form', to: '/pm/add' },
      { icon: 'fa-layer-group', text: 'Strip Down', to: '/pm/strip-down' }
    ]
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-wrap">
          <div
            className="logo-mark"
            style={{
              color: '#2563eb',
              background: 'rgba(37, 99, 235, 0.12)'
            }}
          ><svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path
                d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
                fill="currentColor"
                opacity="0.18"
              />
              <path
                d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg></div>
          <div className="logo-text-wrap">
            <div className="logo-title">Safety Culture</div>
            <div className="logo-sub">Maintainence operations</div>
          </div>
        </div>
      </div>

      <nav className="nav-body">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="nav-section-label">{section.label}</div>

            {section.items.map((item) => (
              <Link
                key={item.text}
                to={item.to}
                className={`nav-item ${item.active ? 'active' : ''}`}
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
          <div className="user-avatar blue-avatar">NU</div>
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