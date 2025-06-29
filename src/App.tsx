import React, { useState } from 'react';
import { Wallet, Vote, Shield, Users, Zap } from 'lucide-react';

const BlockchainVotingApp = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voteCount, setVoteCount] = useState({ candidate1: 245, candidate2: 187 });
  
  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      party: "Progressive Alliance",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      slogan: "Building Tomorrow Together",
      platform: ["Clean Energy", "Healthcare Reform", "Education"]
    },
    {
      id: 2,
      name: "Michael Chen",
      party: "Innovation Party",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      slogan: "Technology for Everyone",
      platform: ["Digital Rights", "Economic Growth", "Infrastructure"]
    }
  ];

  const handleConnectWallet = () => {
    setIsConnected(true);
    setWalletAddress('0x742d...8f3a');
  };

  const handleVote = (candidateId) => {
    setSelectedCandidate(candidateId);
    setVoteCount(prev => ({
      ...prev,
      [`candidate${candidateId}`]: prev[`candidate${candidateId}`] + 1
    }));
    
    setTimeout(() => setSelectedCandidate(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SecureVote
            </h1>
          </div>
          <p className="text-xl text-gray-300">Decentralized Voting Platform</p>
          <div className="flex items-center justify-center mt-2 text-green-400">
            <Zap className="w-4 h-4 mr-1" />
            <span className="text-sm">Powered by Ethereum Blockchain</span>
          </div>
        </header>

        {/* Wallet Connection */}
        <div className="flex justify-center mb-12">
          {!isConnected ? (
            <button
              onClick={handleConnectWallet}
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

        {/* Main Voting Section */}
        {isConnected && (
          <div className="space-y-12">
            {/* Election Info */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">2025 Presidential Election</h2>
              <p className="text-gray-400">Cast your vote securely on the blockchain</p>
            </div>

            {/* Candidates Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className={`relative bg-gray-800/30 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                    selectedCandidate === candidate.id
                      ? 'border-green-400 shadow-2xl shadow-green-400/25 animate-pulse'
                      : 'border-gray-700 hover:border-blue-400'
                  }`}
                >
                  {selectedCandidate === candidate.id && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                      Vote Recorded!
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-purple-400/50"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
                        <Vote className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{candidate.name}</h3>
                    <p className="text-purple-400 font-semibold">{candidate.party}</p>
                    <p className="text-gray-400 italic">"{candidate.slogan}"</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Platform:</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.platform.map((item, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleVote(candidate.id)}
                    disabled={selectedCandidate === candidate.id}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-green-600 disabled:to-green-700 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-xl"
                  >
                    {selectedCandidate === candidate.id ? (
                      <span className="flex items-center justify-center">
                        <Zap className="w-5 h-5 mr-2 animate-spin" />
                        Vote Submitted!
                      </span>
                    ) : (
                      `Vote for ${candidate.name}`
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Vote Count Display */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Live Vote Count</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="text-center">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-2">{candidate.name}</h4>
                      <div className="text-4xl font-bold text-blue-400 mb-2">
                        {voteCount[`candidate${candidate.id}`].toLocaleString()}
                      </div>
                      <p className="text-gray-400">votes</p>
                      
                      {/* Vote percentage bar */}
                      <div className="mt-4 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{
                            width: `${(voteCount[`candidate${candidate.id}`] / (voteCount.candidate1 + voteCount.candidate2)) * 100}%`
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        {((voteCount[`candidate${candidate.id}`] / (voteCount.candidate1 + voteCount.candidate2)) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400">
                  Total Votes Cast: <span className="text-white font-semibold">{(voteCount.candidate1 + voteCount.candidate2).toLocaleString()}</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  🔒 All votes are cryptographically secured and immutable on the blockchain
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            Powered by Ethereum • Built with React & Ethers.js
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlockchainVotingApp;