import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

// The main routes
import MainIndex from "./pages/main/index.tsx";
import MainHome from "./pages/main/home.tsx";

// The accounts routes 
import AccountsIndex from "./pages/accounts/index.tsx";
import AccountsLogin from "./pages/accounts/login.tsx";
import AccountsRegister from "./pages/accounts/register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="main" element={<MainIndex />}>
                <Route path="home" element={<MainHome />} />
            </Route>

            <Route path="accounts" element={<AccountsIndex />}>
                <Route path="login" element={<AccountsLogin />} />
                <Route path="register" element={<AccountsRegister />} />
            </Route>

        </Routes>
    </BrowserRouter>
  </StrictMode>,
);
