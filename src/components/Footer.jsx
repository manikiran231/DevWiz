import React from 'react';

export default function Footer() {
  const footerBackground = {
    background: 'linear-gradient(135deg,rgb(83, 50, 94),rgb(83, 50, 94))', // Dark purple gradient
  };

  return (
    <footer className="text-white py-3" style={footerBackground}>
      <div className="container text-center">
        {/* Copyright and Author Info */}
        <p className="mb-0">
          &copy; {new Date().getFullYear()} WordWiz. Made with ❤️ by{' '}
          <a
            href="https://www.linkedin.com/in/tamminaina-manikiran-85b03726a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00aced', textDecoration: 'none' }}
          >
            Manikiran
          </a>
        </p>
      </div>
    </footer>
  );
}
