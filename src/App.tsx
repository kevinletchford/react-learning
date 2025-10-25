// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import CopyToClipboard from './examples/copyToClipboard'

// Lazy-load examples
const Counter = lazy(() => import('./examples/counter'))
const ClickAway = lazy(() => import('./examples/clickAway'))

const App = () => (
  <Router>
    <div className="app-grid">
    <nav>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/clickAway">Click Away</Link></li>
        <li><Link to="/copyToClipboard">Copy to Clipboard</Link></li>
      </ul>
    </nav>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/clickAway" element={<ClickAway />} />
          <Route path="/copyToClipboard" element={<CopyToClipboard />} />
        </Routes>
      </Suspense>
    </div>
    </div>
  </Router>
)

export default App