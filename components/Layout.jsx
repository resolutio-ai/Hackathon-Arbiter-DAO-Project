import { Box, Container } from "@mui/material";
import Script from "next/script";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <Box className="root">
        <AppHeader />
        <Container component="main" className="content">
          <ScrollToTop />
          {children}
        </Container>
        <AppFooter />
      </Box>
    </>
  );
};

export default Layout;
