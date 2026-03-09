import type { ReactNode } from "react";

type EmployerLayoutProps = {
  children: ReactNode;
};

export default function EmployerLayout({ children }: EmployerLayoutProps) {
  return <>{children}</>;
}
