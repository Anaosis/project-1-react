import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

serviceWorker.unregister();
