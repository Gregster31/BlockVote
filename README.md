<p align="center">
  <img src="https://github.com/user-attachments/assets/cd82b910-74f1-4996-9cd7-38008c57b92e" alt="BlockVote_banner" />
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/Built%20with-Ethers.js-purple" alt="Built with Ethers.js" height="24">
    <img src="https://img.shields.io/badge/Powered%20by-Ethereum-3c3c3d" alt="Powered by Ethereum" height="24">
    <img src="https://img.shields.io/badge/Smart%20Contracts-Hardhat-yellow" alt="Hardhat" height="24">
    <img src="https://img.shields.io/badge/Frontend-React-blue" alt="React" height="24">
    <img src="https://img.shields.io/badge/Web3%20Wallet-MetaMask-f6851b" alt="MetaMask" height="24">
    <img src="https://img.shields.io/badge/Network-Sepolia%20Testnet-5c4ee5" alt="Ethereum Testnet" height="24">
  </a>
</p>

<p align="center">
  <em>DApp that allows users to cast votes using blockchain technology, ensuring tamper-proof, one-person-one-vote elections.</em>
</p>

---

## 🎥 Demo

<p align="center">
  <a href="https://www.youtube.com/watch?v=j6zuWR3-y0A" target="_blank">
    <img src="https://img.youtube.com/vi/j6zuWR3-y0A/0.jpg" alt="Watch the demo video" width="640">
  </a>
</p>

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

