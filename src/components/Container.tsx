import { ethers } from 'ethers';
import React, { useEffect } from 'react';

type Props = {};

const Container = (props: Props) => {
  useEffect(() => {
    connectMetamask();
  }, [])

  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
    // Prompt user for account connections
    const result = await provider.send("eth_requestAccounts", []);
    console.log({ result })
    const signer = provider.getSigner();
    debugger
    console.log("Account:", await signer.getAddress());
  }

  return <div>
    Dummy
  </div>;
};

export default Container