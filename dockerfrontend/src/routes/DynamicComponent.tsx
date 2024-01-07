import { lazy } from "react";

const BreadcrumbsWithIcon = lazy(() => import("../components/Common/BreadcrumbsWithIcon"));

type DynamicComponentType = {
  Component: () => JSX.Element;
  path: string;
}

export default function DynamicComponent({ Component, path }: DynamicComponentType) {

  return (
    <div className="p-8">
      {path !== "/" && <BreadcrumbsWithIcon path={path} />}
      <Component />
    </div>
  );
}

