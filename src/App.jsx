import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonPagination from './components/ButtonPagination';
import ScrollPagination from './components/ScrollPagination';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<ButtonPagination />} />
          <Route path="/scroll" element={<ScrollPagination />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </Layout>
  );
}

export default App;