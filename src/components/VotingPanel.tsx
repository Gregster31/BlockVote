import React, { useState } from 'react';
import { Vote, Zap, Users } from 'lucide-react';

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

const VotingPanel = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [voteCount, setVoteCount] = useState({ candidate1: 245, candidate2: 187 });

  const handleVote = (candidateId: number) => {
    setSelectedCandidate(candidateId);
    setVoteCount(prev => ({
      ...prev,
      [`candidate${candidateId}`]: prev[`candidate${candidateId}`] + 1
    }));
    setTimeout(() => setSelectedCandidate(null), 2000);
  };

  const totalVotes = voteCount.candidate1 + voteCount.candidate2;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">2025 Presidential Election</h2>
        <p className="text-gray-400">Cast your vote securely on the blockchain</p>
      </div>

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
                  <span key={index} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm">
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

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Users className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-bold">Live Vote Count</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {candidates.map((candidate) => {
            const candidateVotes = voteCount[`candidate${candidate.id}`];
            const percentage = (candidateVotes / totalVotes) * 100;

            return (
              <div key={candidate.id} className="text-center">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-2">{candidate.name}</h4>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {candidateVotes.toLocaleString()}
                  </div>
                  <p className="text-gray-400">votes</p>

                  <div className="mt-4 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {percentage.toFixed(1)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400">
            Total Votes Cast: <span className="text-white font-semibold">{totalVotes.toLocaleString()}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            🔒 All votes are cryptographically secured and immutable on the blockchain
          </p>
        </div>
      </div>
    </div>
  );
};

export default VotingPanel;
