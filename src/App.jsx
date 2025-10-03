import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { themeConfig } from './theme/themeConfig';
import './App.css';
import MemberSearch from './pages/MemberSearch';

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MemberSearch />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;

