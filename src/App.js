import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ViewLayout from './components/pages/Page1';
import { ActiveSectionProvider } from './context/ActiveSectionContext';

const App = () => {
  return (
    <BrowserRouter>
      <ActiveSectionProvider>
        <ViewLayout />
      </ActiveSectionProvider>
    </BrowserRouter>
  );
};

export default App;
