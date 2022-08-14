import { ethers } from "ethers";
import dispute from '../Integration/Artifacts/contracts/DisputePool.sol/Disputepool.json';


let disputePoolAddress = "0x93BF57d7b817a0a05da8527FC1c10C4872ED5C47"
const arbiterContractAddress = "0x6d9763d7CB4B642c898dd7B23fAa09609E953C56";

async function createDisputeContractInstance() {
    const { ethereum } = window;

    //if none is found, it means that a user does not  
    if (!ethereum) {
        return;
    }

    //Get wallet provider and signer
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    //contract initialization: create an instance of the contract
    return new ethers.Contract(disputePoolAddress, dispute.abi, signer);
}

async function createArbiterContractInstance() {
    const { ethereum } = window;

    //if none is found, it means that a user does not  
    if (!ethereum) {
        return;
    }

    //Get wallet provider and signer
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    //contract initialization: create an instance of the contract
    return new ethers.Contract(arbiterContractAddress, arbiter.abi, signer);
}

let disputeContract = await createDisputeContractInstance();
let arbiterContract = await createArbiterContractInstance();


export { disputeContract, arbiterContract }