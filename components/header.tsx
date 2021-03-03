import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Header = (): React.ReactElement => {
  const { user } = useUser();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link href="/api/user/silent-login">
                  <a>Silent login</a>
                </Link>
              </li>

              <li>
                <Link href="/api/user/management-api">
                  <a>JSON Management API</a>
                </Link>
              </li>

              <li>
                <Link href="/api/user/profile-refetch">
                  <a>JSON profile (refetch)</a>
                </Link>
              </li>

              <li>
                <Link href="/api/user/profile">
                  <a>JSON Profile</a>
                </Link>
              </li>

              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>

              <li>
                <Link href="/profile-ssr">
                  <a>Profile (SSR)</a>
                </Link>
              </li>

              <li>
                <Link href="/api/auth/logout">
                  <a>Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <a href="/api/auth/login" data-testid="login">
                Login
              </a>
            </li>
          )}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 60rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
