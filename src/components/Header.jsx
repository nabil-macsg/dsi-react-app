// import "./Header.scss";

export default function Header({
  title = "Main Dashboard",
  subtitle = "DSI FZE · Tool Management Platform",
  syncText = "Dynamics synced · 4 min ago",
  showSearch = true,
  showNotification = true,
  showSettings = true,
  rightContent,
   breadcrumb
}) {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="topbar">
      <div className="topbar-left">
        { breadcrumb}
        {title && <>
        <div className="topbar-title">{title}</div>

        <div className="topbar-sub">
          {subtitle} · {today}
        </div>
        </>}
      </div>

      <div className="topbar-right">
        <div className="sync-pill">
          <div className="sync-dot"></div>
          {syncText}
        </div>

        {rightContent ? (
          rightContent
        ) : (
          <>
            {showSearch && (
              <button className="topbar-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            )}

            {showNotification && (
              <button className="topbar-btn has-dot">
                <i className="fa-solid fa-bell"></i>
              </button>
            )}

            {showSettings && (
              <button className="topbar-btn">
                <i className="fa-solid fa-sliders"></i>
              </button>
            )}
          </>
        )}
      </div>
    </header>
  );
}