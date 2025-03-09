import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Layout from './components/Layout'

import Home from './pages/Home'
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";

function App() {
  return (
    <Router>
      <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Collections />} />
            </Routes>
          </Layout>
      </div>
   </Router>
  );
}

export default App;
