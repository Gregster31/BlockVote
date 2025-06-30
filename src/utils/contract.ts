import artifact from "../../artifacts/contracts/Voting.sol/Voting.json";
import { BrowserProvider, Contract } from "ethers";

const CONTRACT_ADDRESS = "0xC64994C9E243F6405dcC9b2953d2B7Cc6370e3f8"; 

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
