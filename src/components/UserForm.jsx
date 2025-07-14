import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function UserForm({ onUserCreated }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.from('emousers').insert([{ email, name }]);
    setLoading(false);
    if (error) setError(error.message);
    else {
      setEmail('');
      setName('');
      onUserCreated();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h3>Create User</h3>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create User'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
