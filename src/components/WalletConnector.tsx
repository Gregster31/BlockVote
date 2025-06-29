import React from 'react';
import { Wallet } from 'lucide-react';

interface Props {
  isConnected: boolean;
  walletAddress: string;
  onConnect: () => void;
}

const WalletConnector: React.FC<Props> = ({ isConnected, walletAddress, onConnect }) => {
  return (
    <div className="flex justify-center mb-12">
      {!isConnected ? (
        <button
          onClick={onConnect}
          className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
        >
          <Wallet className="w-6 h-6 mr-3" />
          Connect MetaMask Wallet
        </button>
      ) : (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-6 py-4 rounded-xl">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-semibold">Connected: </span>
            <span className="ml-2 font-mono text-gray-300">{walletAddress}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnector;
