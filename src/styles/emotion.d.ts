import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      background: string
      surface: string
      text: {
        primary: string
        secondary: string
        disabled: string
      }
      border: string
      error: string
      success: string
    }
    borderRadius: {
      small: string
      medium: string
      large: string
    }
    typography: {
      fontFamily: string
      fontWeights: {
        regular: number
        medium: number
        bold: number
      }
    }
  }
}
