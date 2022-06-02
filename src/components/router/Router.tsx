import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => (
  <LoginUserProvider>
    <Routes>
      {homeRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<HeaderLayout>{route.children}</HeaderLayout>}
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </LoginUserProvider>
));
