// src/utils/blockchainHelpers.ts
import { BrowserProvider, ethers } from "ethers";
import VotingContractABI from "../../artifacts/contracts/Voting.sol/Voting.json";

// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;
// const CONTRACT_ADDRESS = import.meta.env.CONTRACT_ADDRESS!;
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";


export async function getProviderAndContract() {
    if (!window.ethereum) throw new Error("MetaMask not installed");
    const provider = new BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingContractABI.abi, await signer);
    return { contract, signer };
}

export async function getCandidates() {
    const { contract } = await getProviderAndContract();
    const count = await contract.getCandidateCount();
    const promises = [];
    for (let i = 0; i < count; i++) {
        promises.push(contract.getCandidate(i));
    }
    const rawCandidates = await Promise.all(promises);
    return rawCandidates.map((c, index) => ({
        id: index,
        name: c.name,
        party: c.party,
        image: c.imageURL,
        slogan: c.slogan,
        platform: c.platform,
    }));
}

export async function voteForCandidate(candidateId: number) {
    const { contract } = await getProviderAndContract();
    const tx = await contract.vote(candidateId);
    await tx.wait();
}

export async function hasVoted(address: string) {
    const { contract } = await getProviderAndContract();
    return await contract.hasVoted(address);
}

export async function getVoteCounts() {
    const { contract } = await getProviderAndContract();
    const count = await contract.getCandidateCount();
    const promises = [];
    for (let i = 0; i < count; i++) {
        promises.push(contract.getVoteCount(i));
    }
    const counts = await Promise.all(promises);
    return counts.map((c) => parseInt(c.toString()));
}

export const truncateAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};