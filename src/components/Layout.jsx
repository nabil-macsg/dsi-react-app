import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
  return <div className="shell"><Sidebar /><main className="main"><Header /><div className="scroll-body">{children}</div></main></div>
}
