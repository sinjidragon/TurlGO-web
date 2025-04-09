import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={theme => css`
        @font-face {
          font-family: 'Pretendard';
          src: local('Pretendard');
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Pretendard';
          src: local('Pretendard Medium');
          font-weight: 500;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Pretendard';
          src: local('Pretendard Bold');
          font-weight: 700;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
        }

        body {
          font-family: ${theme.typography.fontFamily};
          background-color: ${theme.colors.background};
          color: ${theme.colors.text.primary};
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        button {
          font-family: inherit;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
        }

        input {
          font-family: inherit;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}
    />
  )
}

export default GlobalStyles
