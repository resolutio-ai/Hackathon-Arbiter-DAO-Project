import { ethers } from "ethers";

import {
    disputePoolAddress
} from '../config';

import {voting} from "../Artifacts/contracts/VotingTwo.sol/VotingTwo.json";

async function createBallot(disputeId) { 
    //call to the smartContract
    let txn = await voterContract.createBallot(disputeId);
    await txn.wait();
  }

  async function vote (voteOption, ballotId){
    let txn = await voterContract.vote(1, 0);
    await txn.wait()
  }

  async function computeWinner (ballotId){
    let txn = await voterContract.computeWinner(ballotId);
    await txn.wait();
  }
  
  async function getWinner (ballotId){
    return await voterContract.getWinner(ballotId);
  }