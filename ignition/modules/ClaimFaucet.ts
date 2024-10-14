// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClaimFaucetModule = buildModule("ClaimFaucetModule", (m) => {
  const ClaimFaucetModule = m.contract("ClaimFaucet", ["DLTToken", "DLT"]);

  return { ClaimFaucetModule };
});

export default ClaimFaucetModule;


// ClaimFaucetModule#ClaimFaucet - 0x2fa2B71e6D853D077F3380C66f8A079956C95ee7