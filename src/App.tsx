import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UiPage } from 'pages/UiPage/index.ts';
import { HomePage } from 'pages/HomePage/index.ts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ui" element={<UiPage />} />
    </Routes>
  );
};

export default App;