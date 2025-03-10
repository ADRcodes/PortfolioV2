import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/main.css'
import '/src/styles/imageSlider.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
