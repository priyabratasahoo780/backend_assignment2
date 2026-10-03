 // Navbar home, dashboard, about

import React from 'react';
import Link from 'next/link';
export default function Dashboard() {
  return (
    <div className='border flex justify-around'>
      <Link href="/">Home</Link>
      <Link href="/dashboard/dashboard">Dashboard</Link>
      <Link href="/dashboard/about">About</Link>
    </div>
  );
}
