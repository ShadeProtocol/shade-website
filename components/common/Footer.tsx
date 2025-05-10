'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070e17] text-white py-12 px-6 md:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shade</h3>
            <p className="text-gray-400">
              Seamless on-chain and offline payments for Web3.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Merchant Dashboard</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Invoice Creation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">API/SDK Access</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Transaction Processing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">API Reference</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">SDK Guide</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Sales</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Partnerships</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© 2023 Shade. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white">Terms</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;