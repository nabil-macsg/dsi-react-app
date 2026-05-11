import Sidebar from './Sidebar'


export default function Layout({ children,header }) {
  return <div className="shell"><Sidebar /><main className="main">{children}</main></div>
}
