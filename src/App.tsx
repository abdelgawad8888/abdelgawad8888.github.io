import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import './styles/overrides.css'
import ResumePage from './pages/Resume'
import ResumeBar from './components/ResumeBar'

/**
 * App
 * Main router + global style overrides import
 * Adds Resume route and global sticky ResumeBar
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      {/* Global sticky resume actions */}
      <ResumeBar />
    </HashRouter>
  )
}
