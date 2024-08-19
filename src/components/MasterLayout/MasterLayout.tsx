import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default MasterLayout;
