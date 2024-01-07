import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssVarsProvider, getInitColorSchemeScript } from '@mui/joy/styles';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, GlobalStyles } from '@mui/joy';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {getInitColorSchemeScript()}
    <CssVarsProvider
      defaultMode="system"
      modeStorageKey="demo_identify-system-mode"
      disableNestedContext
      disableTransitionOnChange
    >
      <CssBaseline />
      <BrowserRouter>
        <GlobalStyles
          styles={{
            ':root': {
              '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
              '--Cover-width': '50vw', // must be `vw` only
              '--Form-maxWidth': '800px',
              '--Transition-duration': '0.4s', // set to `none` to disable transition
            },
          }}
        />
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
)
