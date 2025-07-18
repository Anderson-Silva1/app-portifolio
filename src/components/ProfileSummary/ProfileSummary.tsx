import { Content } from "../Content";
import { IntroHeader } from "./IntroHeader";
import { IntroDescription } from "./IntroDescription";
import { CallToActionButton } from "./CallToActionButton";
import { SocialLinks } from "./SocialLinks";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const ProfileSummary = () => {
  return (
    <main>
      <Content>
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 pb-8">
          <div className="mt-16 flex flex-col gap-4 text-center md:mt-0">
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
