import React from 'react';

function Footer() {
  return (
    <footer className="page-footer blue lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} React Food
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/13RedFox/react-food"
            target="_blank"
            rel="noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
