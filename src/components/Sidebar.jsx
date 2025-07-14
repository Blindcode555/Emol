
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink to="/" end>🏠 Dashboard</NavLink>
      <NavLink to="/create-content">📝 Create Content</NavLink>
      <NavLink to="/library">📚 Content Library</NavLink>
      <NavLink to="/analytics">📊 Analytics</NavLink>
      <NavLink to="/users">👥 Users</NavLink>
      <NavLink to="/settings">⚙️ Settings</NavLink>
    </nav>
  )
}
