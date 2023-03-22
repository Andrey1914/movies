import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import LoaderOval from "../Loader/Loader";
import { Main } from "./MainContentStyled";

export default function MainContent() {
  return (
    <Main>
      <Suspense fullback={<LoaderOval />}>
        <Outlet />
      </Suspense>
    </Main>
  );
}
