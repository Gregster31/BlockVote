import React, { useState } from 'react';
import { Shield, Zap } from 'lucide-react';
import WalletConnector from './components/WalletConnector';
import VotingPanel from './components/VotingPanel';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BlockVote
            </h1>
          </div>
          <p className="text-xl text-gray-300">Decentralized Voting Platform</p>
          <div className="flex items-center justify-center mt-2 text-green-400">
            <Zap className="w-4 h-4 mr-1" />
            <span className="text-sm">Powered by Ethereum Blockchain</span>
          </div>
        </header>

        <WalletConnector
          isConnected={isConnected}
          walletAddress={walletAddress}
          onConnect={(address) => {
            setIsConnected(true);
            setWalletAddress(address);
          }}
        />

        {isConnected && <VotingPanel />}
        
        <footer className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            Powered by Ethereum • Built with React & Ethers.js
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
