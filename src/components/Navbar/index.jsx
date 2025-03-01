import Link from 'next/link';
import React from 'react';
import InputSearch from './InputSearch';
import UserActionButton from './UserActionButton';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-wrap justify-between items-center p-4 gap-2">
        {/* Brand Logo */}
        <Link href="/" className="font-bold text-2xl flex-shrink-0">
          WILDANIMELIST
        </Link>

        {/* Search Bar - Hidden on Small Screens */}
        <div className="hidden md:block md:flex flex-grow  md:justify-center">
          <InputSearch />
        </div>

        {/* Desktop User Actions */}
        <div className="hidden md:block">
          <UserActionButton />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>

      {/* Mobile Search Bar - Visible Only on Small Screens */}
      <div className="md:hidden px-4 pb-4 pt-0">
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
