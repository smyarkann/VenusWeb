import React from 'react';
import HeaderComp from './HeaderComp'; // Senin header componentin

function Layout({ children }) {
  return (
    <div>
      <HeaderComp />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
