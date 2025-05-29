// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

// Lazy-load examples
const Counter = lazy(() => import('./examples/counter'))

const App = () => (
  <Router>
    <div className="app-grid">
    <nav>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Suspense>
    </div>
    </div>
  </Router>
)

export default App