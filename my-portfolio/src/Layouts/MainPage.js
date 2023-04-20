import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagePlatform from "../strapi/MessagePlatform";
import AboutMe from "../components/AboutMeSection/AboutMe";
import ThankYouNote from "../pages/ThankYouNote";
import { Flex } from "@chakra-ui/react";
import InfoSection from "../components/SecondSection/InfoSection";
function MainPage() {
  return (
    <Flex align="center" direction="column" gap={20} mt="100px">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/ThankYouNote" element={<ThankYouNote />} />
        </Routes>
        <InfoSection />
        <MessagePlatform />
      </BrowserRouter>
    </Flex>
  );
}
export default MainPage;