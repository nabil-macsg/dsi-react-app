export default function Toolbar({ title, actionText }) {
  return <div className="card-head"><div className="card-title">{title}</div>{actionText && <div className="card-link">{actionText}</div>}</div>
}
