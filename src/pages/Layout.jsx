import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h1>Role-Based Authentication System (RBAC)</h1>
        <p>Welcome to the RBAC system. This system provides access control based on user roles, allowing administrators and users to have different access levels.</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
