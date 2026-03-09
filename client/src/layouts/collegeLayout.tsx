import type { ReactNode } from "react";

type CollegeLayoutProps = {
  children: ReactNode;
};

export default function CollegeLayout({ children }: CollegeLayoutProps) {
  return <>{children}</>;
}
