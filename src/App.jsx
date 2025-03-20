import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import DashboardHome from './pages/Dashboard/Home';
import DashboardLayout from './pages/Dashboard/Layout';
import DashboardSettings from './pages/Dashboard/Settings';
import Home from './pages/Home';
import Post from './pages/Post';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/post/123">Post</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/settings">Dashboard Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
