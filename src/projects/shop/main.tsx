import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import ShopApp from './ShopApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Theme panelBackground="solid">
            <ShopApp />
        </Theme>
    </React.StrictMode>
)
