import React from 'react';
import Header from '@/components/common/Header';


import Accordion from '@/components/common/Accordion';
import Button from '@/components/ui/Button';


export default function Home() {
  return (
    <main className="bg-[#070e17] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-[#070e17] text-[#070e17] dark:text-white">
        <div className="absolute top-0 right-0 z-0">
        </div>
        <div className="relative z-10 pl-8 pr-24 pt-20 pb-32 text-left">
          <h1
            className="font-bold text-[#070e17] dark:text-white text-left text-4xl md:text-7xl lg:text-[108px] leading-[0.95] tracking-[-0.09em] max-w-[1177px] mb-8 font-dm-sans"
            style={{
              fontFamily: "'DM Sans', 'Inter', sans-serif",
              letterSpacing: '-9px',
              lineHeight: 0.95,
              maxWidth: '1177px',
              textAlign: 'left'
            }}
          >
            Seamless on-chain and<br />
            offline payments for<br />
            Web3.
          </h1>
          <p className="text-xl md:text-2xl text-[#070e17] dark:text-white max-w-3xl mb-8 text-left">
            Powering borderless transactions for DApps, merchants, and DeFi platforms.
          </p>
          <Button variant="primary" className="rounded-full py-2 px-5 font-bold text-left">
            View the Docs
          </Button>
        </div>
      </section>
      
      {/* Feature Section 1 */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="bg-[#0b131e] text-[#3ddde1] w-fit px-4 py-1 rounded-full mb-4">
            1.
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Merchant Dashboard with Wallet-Based Registration
          </h2>
          <p className="text-xl md:text-2xl text-white">
            Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/img_serverroomisometricinternetequipmentindustrydatacenter_1.png" alt="Server room isometric" className="w-full h-auto"
          />
        </div>
      </section>
      
      {/* Feature Section 2 */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2">
          <img 
            src="/images/img_serverroomisometricinternetequipmentindustrydatacenter_1_479x643.png" alt="Server room isometric" className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="bg-[#0b131e] text-[#3ddde1] w-fit px-4 py-1 rounded-full mb-4">
            2
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Custom Invoice Creation with Token-Level Control and Optional Email Notifications
          </h2>
          <p className="text-xl md:text-2xl text-white">
            Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.
          </p>
        </div>
      </section>
      
      {/* Feature Section 3 */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="bg-[#0b131e] text-[#3ddde1] w-fit px-4 py-1 rounded-full mb-4">
            3
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Secret Key Mechanism for Secure API/SDK Access
          </h2>
          <p className="text-xl md:text-2xl text-white">
            Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/img_serverroomisometricinternetequipmentindustrydatacenter_1.png" alt="Server room isometric" className="w-full h-auto"
          />
        </div>
      </section>
      
      {/* Feature Section 4 */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2">
          <img 
            src="/images/img_serverroomisometricinternetequipmentindustrydatacenter_1_479x643.png" alt="Server room isometric" className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="bg-[#0b131e] text-[#3ddde1] w-fit px-4 py-1 rounded-full mb-4">
            4
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Smart Contract-Based Transaction Processing and Revenue Fee Capture
          </h2>
          <p className="text-xl md:text-2xl text-white">
            Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.
          </p>
        </div>
      </section>
      
      {/* How it works Section */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="/images/img_group_1_645x1249.png" alt="Background graphic" className="w-full h-auto" />
        </div>
        <div className="relative z-10">
          <div className="bg-[#0b131e] text-[#3ddde1] w-fit px-4 py-1 rounded-full mb-4 mx-auto">
            How it works
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 dark:text-white">
            From wallet to checkout <br />in minutes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#070e17] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white text-center mb-2">1.</h3>
              <h4 className="text-3xl font-bold text-white text-center mb-4">Connect Wallet</h4>
              <p className="text-white text-center">
                Sign up instantly using your crypto wallet — no passwords or paperwork.
              </p>
            </div>
            
            <div className="bg-[#070e17] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white text-center mb-2">2.</h3>
              <h4 className="text-3xl font-bold text-white mb-4">Create & Share Invoices</h4>
              <p className="text-white">
                Use the dashboard or SDKs to generate customizable crypto invoices.
              </p>
            </div>
            
            <div className="bg-[#070e17] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white text-center mb-2">3.</h3>
              <h4 className="text-3xl font-bold text-white mb-4">Get Paid & Withdraw</h4>
              <p className="text-white">
                Receive on-chain payments, track status in real-time, and withdraw anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Developers Section */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Shade Developers
          </h2>
          <p className="text-xl text-white mb-8">
            With our ready-to-use and developer friendly APIs, SDKs and plugins, you
            can easily integrate to Shade to your website or app for FREE to start
            receiving payments in a breeze.
          </p>
          <Button variant="primary" className="rounded-full py-2 px-5 font-bold">
            See Documentation
          </Button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/img_developerscodeimgsvg.png" alt="Developer code" className="w-full h-auto"
          />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-[#070e17] px-6 md:px-24 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Frequently asked questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion title="How to get started with Shade" />
          <Accordion title="How do I get Invoice?" />
          <Accordion title="How are payments processed?" />
          <Accordion title="Who are Merchants?" />
          
          <div className="mt-8 text-center">
            <Button 
              className="py-2 px-5 font-bold rounded-lg text-black border-black hover:bg-[#3ddde1] hover:text-black transition-colors dark:bg-[#3ddde1] dark:text-white dark:border-0"
            >
              See More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}