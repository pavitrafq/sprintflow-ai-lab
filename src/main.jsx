import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d1d3e98f33b5b84a44afb8c02e81f563@o4510912281051136.ingest.us.sentry.io/4510912294420480",
  integrations: [],
  tracesSampleRate: 1.0,
});
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
