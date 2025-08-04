import { Content } from "../Content";
import { IntroHeader } from "./IntroHeader";
import { IntroDescription } from "./IntroDescription";
import { CallToActionButton } from "./CallToActionButton";
import { SocialLinks } from "./SocialLinks";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const ProfileSummary = () => {
  return (
    <main className="bg-background1">
      <Content>
        <div className="profile-summary-container mt-24 flex flex-col items-center justify-center gap-8 pb-8 md:pb-24">
          <div className="flex flex-col gap-4 text-center md:mt-0">
            <IntroHeader />
            <IntroDescription />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <CallToActionButton />
            <SocialLinks />
          </div>
          <ScrollDownIndicator />
        </div>
      </Content>
    </main>
  );
};
