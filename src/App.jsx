import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}
