import React, { ReactNode } from "react";
import "@/styles/globals.css";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return <div className="main-layout">{children}</div>;
}
