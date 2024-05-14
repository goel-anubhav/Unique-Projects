// Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Common header */}
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Common footer */}
      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
