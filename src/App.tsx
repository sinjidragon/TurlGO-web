import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import FirstView from './pages/FirstView'
import AdoptionPage from './pages/adoption/AdoptionPage'
import GlobalStyles from './styles/GlobalStyles'
import { useThemeMode } from './hooks/useThemeMode'
import { lightTheme, darkTheme } from './styles/theme'

// React Router v7 설정 부분
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}

function App() {
  const { isDark, toggleTheme } = useThemeMode()
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Router {...router}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<FirstView />} />
          <Route path="/login" element={<Login isDark={isDark} onThemeToggle={toggleTheme} />} />
          <Route path="/register" element={<Register isDark={isDark} onThemeToggle={toggleTheme} />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/education" element={<div>교육 페이지</div>} />
            <Route path="/mypage" element={<div>마이 페이지</div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
