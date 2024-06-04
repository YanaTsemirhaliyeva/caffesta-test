import React from 'react'
import ReactDOM from 'react-dom/client'
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory} basename={import.meta.env.BASE_URL}>
      <App />
    </HistoryRouter>
  </React.StrictMode>,
)
