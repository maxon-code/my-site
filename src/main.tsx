import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Theme, ThemePanel} from "@radix-ui/themes";

createRoot(document.getElementById('root')!).render(
    <Theme accentColor="lime" radius="full" appearance="dark">
  <StrictMode>
    <App />
  </StrictMode>
        <ThemePanel></ThemePanel>
    </Theme>
)
