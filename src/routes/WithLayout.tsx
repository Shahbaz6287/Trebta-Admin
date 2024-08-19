// src/routes/WithLayout.tsx
import React from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";

interface WithLayoutProps {
  children: React.ReactNode;
}

const WithLayout: React.FC<WithLayoutProps> = ({ children }) => (
  <MasterLayout>{children}</MasterLayout>
);

export default WithLayout;
