import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

// The main routes
import MainIndex from "./pages/main/index.tsx";
import MainHome from "./pages/main/home.tsx";

// The accounts routes 
import AccountsLogin from "./pages/accounts/login.tsx";
import AccountsRegister from "./pages/accounts/register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="main" element={<MainIndex />}>
                <Route path="home" element={<MainHome />} />
            </Route>

            <Route path="accounts">
                <Route path="home" element={<MainHome />} />
            </Route>

        </Routes>
    </BrowserRouter>
  </StrictMode>,
);
