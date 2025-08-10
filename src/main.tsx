import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Theme, ThemePanel} from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./MainRouter.tsx";

createRoot(document.getElementById("root")!).render(
    <Theme accentColor="lime" radius="full" appearance="dark">
        <BrowserRouter>
            <StrictMode>
                <MainRouter />
            </StrictMode>
        </BrowserRouter>
        <ThemePanel />
    </Theme>
);