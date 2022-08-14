import { ethers } from "ethers";
import { disputeContract } from "../config";
import dispute from '../Artifacts/contracts/DisputePool.sol/Disputepool.json'

async function createDispute(url) {
    const price = "0.1";
    //set the amount of Matic to be collected
    const stake = ethers.utils.parseUnits(price, "ether");

    //call to the smartContract
    const createDisputeTx = await disputeContract.createDispute(url, { value: stake });

    //Wait for transcation to be mined
    await createDisputeTx.wait();
  }

  async function getAddress(disputeId) { 
    //call to the smartContract
    const addressesForADispute = await disputeContract.getAddress(disputeId);
    return addressesForADispute;   
  }

  async function closeDispute(disputeId) {    
    await disputeContract.closeDispute(disputeId);   
  }

  async function resolveDispute(disputeId, winner) {
    //call to the smartContract
    let txn = await disputeContract.resolveDispute(disputeId, winner); 
    await txn.wait();
  }

  async function getRandomArbiters(disputeId){
    //get random numbers from random cntract

    let tx = await disputeContract.getRandomArbiters(0, 2, 4, disputeId);
    await tx.wait();

    let arbiters = await disputeContract.getAddAddress(1);
    return arbiters;
  }

  export {createDispute, getRandomArbiters, resolveDispute, closeDispute, getAddress};
