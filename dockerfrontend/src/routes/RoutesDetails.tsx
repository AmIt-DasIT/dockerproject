import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { routes } from "../pages";


const DynamicComponent = lazy(() => import("./DynamicComponent"))

export default function RoutesDetails() {
    return (
        <Routes>
            {routes.map(({ path, Component }, key) => (
                <Route
                    path={path}
                    key={key}
                    element={<DynamicComponent Component={Component} path={path} />}
                />
            ))}
        </Routes>
    )
}