import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-surface border-b border-outline-variant p-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-h2 text-primary font-bold">Astro Admin</div>
        <nav>
          {/* Navigation links will go here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
