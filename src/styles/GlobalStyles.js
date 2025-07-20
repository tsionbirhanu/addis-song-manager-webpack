import { Global, css } from "@emotion/react"
import React from "react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 16px;
        line-height: 1.5;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f9fafb;
        color: #111827;
      }

      #root {
        min-height: 100vh;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
      }

      input, textarea, select {
        font-family: inherit;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul, ol {
        list-style: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `}
  />
)
