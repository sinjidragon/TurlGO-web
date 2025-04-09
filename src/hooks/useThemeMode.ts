import { useState, useEffect } from 'react'

export const useThemeMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  return { isDark, toggleTheme }
}
