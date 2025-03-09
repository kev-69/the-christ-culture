import { useState } from 'react'
import Home from './pages/Home'

import Layout from './components/Layout'

function App() {
  return (
    <>
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
    </>
  )
}

export default App
