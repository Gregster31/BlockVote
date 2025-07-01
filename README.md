![BlockVote_banner](https://github.com/user-attachments/assets/cd82b910-74f1-4996-9cd7-38008c57b92e)

A secure and transparent decentralized application (dApp) that allows users to cast votes using blockchain technology. Built with a modern web stack and Ethereum smart contracts, it ensures tamper-proof, one-person-one-vote elections.

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **React** (via Vite)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React Icons**
- **Ethers.js** (for blockchain interaction)
- **MetaMask** (for wallet authentication)

### 🔌 Backend / Smart Contracts
- **Solidity** (for voting contract)
- **Hardhat** (for local development, testing & deployment)

### 🔗 Blockchain
- **Ethereum Testnet (e.g. Sepolia or Goerli)**
- **MetaMask Wallet**

---

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Gregster31/BlockVote.git
cd BlockVote
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
SEPOLIA_RPC="YOUR_KEY_HERE"
PRIVATE_KEY="YOUR_KEY_HERE"
```

### 4. Compile and Deploy Smart Contract

```bash
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

Copy the deployed contract address and paste it in CONTRACT_ADDRESS

### 5. Run the Frontend

```bash
npm run dev
```

---

## ✨ Features

- ✅ **Wallet Integration** – Connect MetaMask to authenticate voters.
- ✅ **Candidate Listing** – Live data fetched directly from the smart contract.
- ✅ **Secure Voting** – Vote cast is signed and recorded immutably on the Ethereum blockchain.
- ✅ **One Person, One Vote** – Each address can vote only once.
- ✅ **Live Vote Count** – Real-time updates pulled from blockchain.
- ✅ **Beautiful UI** – Smooth animations and accessible design using Tailwind CSS.
- ✅ **Decentralized** – No backend server required. All voting data is on-chain.

---

## 🧠 Smart Contract Overview

Written in Solidity, the `Voting` smart contract:
- Stores candidate info on-chain
- Allows one vote per Ethereum address
- Prevents double voting
- Exposes public functions to retrieve candidates and vote counts

---

