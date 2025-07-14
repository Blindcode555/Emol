import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('emousers').select('*');
    if (!error) setUsers(data);
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  if (loading) return <p>Loading users...</p>;
  if (!users.length) return <p>No users found.</p>;

  return (
    <div>
      <h3>User List</h3>
      <table>
        <thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}><td>{u.id}</td><td>{u.name}</td><td>{u.email}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
