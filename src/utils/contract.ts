import artifact from "../../artifacts/contracts/Voting.sol/Voting.json";
import { BrowserProvider, Contract } from "ethers";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; 

export async function getCandidates() {
  const provider = new BrowserProvider(window.ethereum);
  const abi = artifact.abi;
  const contract = new Contract(CONTRACT_ADDRESS, abi, provider);

  const count = await contract.getCandidateCount();
  const candidates = [];

  for (let i = 0; i < count; i++) {
    const candidate = await contract.getCandidate(i);
    candidates.push(candidate);
  }

  return candidates;
}
