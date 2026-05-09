import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant p-md mt-auto text-center">
      <p className="typography-body-md text-on-surface-variant">
        &copy; {new Date().getFullYear()} Astro Admin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
