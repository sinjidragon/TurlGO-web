import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
import ThemeToggle from './components/common/ThemeToggle'

// React Router v7 설정 부분
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
}

// ThemeToggle을 관리하는 컴포넌트
const ThemeToggleManager = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const location = useLocation()
  
  // FirstView에서는 ThemeToggle을 보여주지 않음
  if (location.pathname === '/') return null
  
  return <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/education" element={<div>교육 페이지</div>} />
            <Route path="/mypage" element={<div>마이 페이지</div>} />
          </Route>
        </Routes>
        <ThemeToggleManager isDark={isDark} toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  )
}

export default App
