'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/icon/Button';
import { ThemeToggle } from '@/components/ui/theme/ThemeToggle';


const Header: React.FC = () => {
  
  const handleConnectWallet = () => {
    alert('Connecting wallet...');
  };

  return (
      <header className="py-4 px-6 md:px-24 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#21a0a4]">
          <Link href="/">Shade123</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#how-to-use" className="text-white hover:text-[#3ddde1]">
            How to Use
          </Link>
          <Link href="#docs" className="text-white hover:text-[#3ddde1]">
            Docs
          </Link>
          <Link href="#sdk" className="text-white hover:text-[#3ddde1]">
            SDK
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <div>Test</div>
          <Button 
            onClick={handleConnectWallet} 
            variant="primary" className="rounded-full py-2 px-5 font-bold"
          >
            <span className="font-bold" style={{ fontWeight: 700 }}>Connect Wallet</span>
          </Button>
        </div>
      </header>
    );
};

export default Header;