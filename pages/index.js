import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import resolutioImage from "../public/logo_linear_rectangle.jpg";
import ImageVerification from "../components/home/ImageVerification";
import InitiateDispute from "../components/home/InitiateDispute";
import OurTeam from "../components/home/OurTeam";
import ResEd from "../components/home/ResEd";
import Meta from "../components/seo/Meta";

const Home = () => {
  return (
    <div>
      <Meta
        title="resolutio"
        keywords="NFT theft, NFT search, NFT scam, NFT rights, NFT duplication, NFT disputes, Blockchain dispute resolution, Sneha Vijyan, NFT, resolutio, Zareen Reza, Res Ed, Res Educate, Bestin John, Anish Praveen, Ogubuike Alexandra Ozioma"
        description="A club/home for NFT Community(artists, collectors, developers) where the community collectively owns and operates the platform.Resolutio provides the environment for the Community to come together, engage, and uplift themselves, to help each other and protect each other from harm.Resolutio provides the resources and tools, and extends help to the Community so they can promote and protect each other. [resolutio protects, but by helping the community protect themselves]"
      />
      <Box sx={{ textAlign: "center", mt:'2rem'}}>
        <Image src={resolutioImage} alt="resolutio" height={'36rem'} width={'256rem'} />
        <Typography variant="body1">
          International Dispute Resolution Made Accessible for All
        </Typography>
        <Typography variant="h5" bold>
          AFFORDABLE.  FAST. DECENTRALISED.
        </Typography>

      </Box>
      {/* <ImageVerification /> */}
      <InitiateDispute />
      {/* <ResEd /> */}
      <OurTeam />
    </div>
  );
};

export default Home;
