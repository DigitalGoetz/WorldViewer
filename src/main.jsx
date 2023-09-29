import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Ion } from "cesium";

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZjBkNTg5Ny00OTUxLTQ5YmYtYTE3MS03Mzk1NTAyNzQ2NDIiLCJpZCI6MTY5MjYyLCJpYXQiOjE2OTU5OTcxMDZ9.T1HYKcbOVN8hl-rPaTrf1knlB-5ZX29tIbMwD1tYGBQ";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
