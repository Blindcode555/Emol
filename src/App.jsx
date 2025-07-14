
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CreateContent from './components/CreateContent';
import ContentLibrary from './components/ContentLibrary';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function UsersPage() {
  return (
    <div style={{ padding: '1rem' }}>
      <UserForm onUserCreated={() => window.location.reload()} />
      <UserList />
    </div>
  );
}


export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-view">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-content" element={<CreateContent />} />
          <Route path="/library" element={<ContentLibrary />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </div>
  );
}