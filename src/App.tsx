import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import FirstView from './pages/FirstView'
import GlobalStyles from './styles/GlobalStyles'

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}

function App() {
  return (
    <Router {...router}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<FirstView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
