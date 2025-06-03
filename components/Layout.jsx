import React from 'react';
import HeaderComp from './HeaderComp'; // Senin header componentin
import Footer from './Footer'; // Senin header componentin

function Layout({ children }) {
  return (
    <div>
      <HeaderComp />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
