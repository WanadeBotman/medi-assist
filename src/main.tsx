<<<<<<< HEAD
/* ============================================================
   FILE: main.tsx
   Path: src/main.tsx
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import "./index.css";*/
import App from './App.tsx'
>>>>>>> 9ca543bf54eb1e15727feee8b461ef9f8bb6a6bb

   This is the entry point of the React app. It mounts the
   <App /> component into the #root div in index.html.

   React.StrictMode helps catch bugs during development by
   intentionally double-invoking certain functions. It has
   no effect in production builds.

   BACKEND NOTE: No changes needed in this file.
   ============================================================ */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/global.css';
import App from './App';

/* Mount the React app into the root HTML element */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);