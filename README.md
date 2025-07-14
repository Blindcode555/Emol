# Emologic Router-Enabled with Supabase Integration

## Setup

1. Clone the repository and navigate into the project:
   ```bash
   git clone <repo-url>
   cd emologic-router-enabled
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Run in development mode:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view.

## Deployment to Vercel

1. Push to GitHub (set remote 'origin' to your repo).
2. In Vercel dashboard, import the GitHub repo.
3. Add environment variables in Vercel settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy — Vercel will automatically build and deploy.

## Features

- React Router v6 navigation.
- Supabase client integration for `emousers` table.
- CRUD interface: create user and list users.
