import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { COMING_SOON_TEXT } from "../constants/strings";
import comingSoonImage from "../public/coming_soon.svg";
import { ethers } from "ethers";
import {
    disputePoolAddress
} from '../Integration/config'
import dispute from '../Integration/Artifacts/contracts/DisputePool.sol/Disputepool.json'

const ComingSoon = (createDispute) => {

  return (
    <Box
      sx={{ mx: "auto", mb: "2rem", textAlign: "center", maxWidth: "500px" }}
    >
      <h1>{COMING_SOON_TEXT}</h1>
      <button onClick={() => createDispute("url")}>click me to test dispute creation</button>
      <Image src={comingSoonImage} alt="coming Soon Image" />
    </Box>
  );
};

export default ComingSoon;