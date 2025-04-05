import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import FirstView from './pages/FirstView'
import AdoptionPage from './pages/adoption/AdoptionPage'
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
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path="/education" element={<div>교육 페이지</div>} />
          <Route path="/mypage" element={<div>마이 페이지</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
