import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

function App (props) {

  return (
    <div>
      Hello World
    </div>
  )
}

root.render(<BrowserRouter>
    <App />
    </BrowserRouter>)