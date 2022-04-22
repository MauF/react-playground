import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoutes} from "./routes";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    {createRoutes()}
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
