import React from 'react';
import { store } from 'Internals/store';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './style/core.css';

// if (module.hot) {
//   module.hot.accept();
// }

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
