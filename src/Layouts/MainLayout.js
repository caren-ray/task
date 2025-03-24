import React from "react";
const MainLayout = ({ children }) => {
  return <main>
    <h1>main route</h1>
    <h2>my second header</h2>
    {children}
    </main>;
};

export default MainLayout;
