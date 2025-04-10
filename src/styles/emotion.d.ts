import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    typography: {
      fontFamily: {
        primary: string
      }
      fontWeight: {
        regular: number
        medium: number
        semibold: number
        bold: number
      }
      fontSize: {
        xs: string
        sm: string
        base: string
        lg: string
        xl: string
      }
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    borderRadius: {
      small: string
      medium: string
      large: string
    }
    colors: {
      primary: string
      secondary: string
      background: string
      surface: string
      border: string
      text: {
        primary: string
        secondary: string
        disabled: string
      }
      error: string
      success: string
      warning: string
      info: string
    }
  }
}
