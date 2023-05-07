import MessagePlatform from "../strapi/MessagePlatform";
import AboutMe from "../components/AboutMeSection/AboutMe";

import { VStack } from "@chakra-ui/react";
import InfoSection from "../components/SecondSection/InfoSection";
function MainPage() {
  return (
    <VStack align="center" direction="column" gap={20} mt="100px">
      <AboutMe />

      <InfoSection />
      <MessagePlatform />
    </VStack>
  );
}
export default MainPage;
