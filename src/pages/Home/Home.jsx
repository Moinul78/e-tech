import React from 'react';
import Shop from '../Shop/Shop';

export default function Home() {
  return (
    <div>
      <div className="bg-primary2 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to E-Tech</h1>
        <p className="text-lg">Discover the latest in tech at amazing prices.</p>
      </div>
      <div>
        <Shop />
      </div>
    </div>
  )
}

