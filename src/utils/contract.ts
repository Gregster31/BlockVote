import artifact from "../../artifacts/contracts/Voting.sol/Voting.json";
import { BrowserProvider, Contract } from "ethers";

const CONTRACT_ADDRESS = "0xCba911F7a58b1A90DA84632258E5898285803c2D"; 

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
