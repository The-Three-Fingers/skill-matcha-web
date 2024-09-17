import {
  TypographyH1,
  TypographySmall,
  TypographyH3,
  TypographyList,
  TypographyLarge,
} from '@/components/ui/typography';
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 xl:gap-9 2xl:gap-11 mx-auto p-4 h-full max-w-screen-lg px-4">
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH1>Terms of Service</TypographyH1>

        <TypographyLarge>
          Welcome to SkillMatcha! By using our application, you agree to the
          following terms and conditions. Please read them carefully.
        </TypographyLarge>
      </div>

      {/* Acceptance Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>1. Acceptance</TypographyH3>
        <TypographySmall>
          By accessing or using SkillMatcha, you agree to comply with these
          Terms of Service and our Privacy Policy. If you do not agree with
          these terms, please do not use our application.
        </TypographySmall>
      </div>

      {/* Eligibility Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>2. Eligibility</TypographyH3>
        <TypographySmall>
          To use SkillMatcha, you must be at least 18 years old and not a
          convicted felon or sex offender. You are responsible for ensuring that
          your use of the app complies with applicable laws.
        </TypographySmall>
      </div>

      {/* User Accounts Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>3. User Accounts</TypographyH3>
        <TypographySmall>
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to notify us immediately of any
          unauthorized use of your account.
        </TypographySmall>
      </div>

      {/* Acceptable Use Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>4. Acceptable Use</TypographyH3>
        <TypographySmall>
          You agree to use SkillMatcha for lawful purposes only and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use of the app.
        </TypographySmall>
      </div>

      {/* Prohibited Activities Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>5. Prohibited Activities</TypographyH3>
        <TypographyList>
          <li>Engaging in harassment, threats, or bullying.</li>
          <li>Posting illegal, inappropriate, or harmful content.</li>
          <li>Soliciting money from other users.</li>
          <li>Using SkillMatcha for commercial purposes or spam.</li>
        </TypographyList>
      </div>

      {/* Content Ownership Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>6. Content Ownership</TypographyH3>
        <TypographySmall>
          By using SkillMatcha, you retain ownership of any content that you submit, post, or display on the platform, including but not limited to profile photos, text, and interactions.
          However, by submitting content to the platform, you grant SkillMatcha a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, display, reproduce, modify, adapt, publish, and distribute your content in connection with the operation of the service.
          <br /><br />
          You are solely responsible for the content that you create and share. You agree that your content will not violate any laws, infringe on the intellectual property rights of others, or contain material that is offensive, defamatory, or otherwise harmful.
          <br />
          SkillMatcha reserves the right to remove or block any content that violates these terms or is deemed inappropriate.
          <br /><br />
          In the event that you terminate your account, the license you granted us will continue for any public content you submitted, as it may have already been shared or integrated into the platform.
        </TypographySmall>
      </div>

      {/* Safety Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>7. Safety and Interactions</TypographyH3>
        <TypographySmall>
          SkillMatcha is committed to promoting a safe and respectful environment, but we do not guarantee user behavior.
          While we provide tools to report and block inappropriate content or users, it is ultimately your responsibility to take appropriate safety measures when interacting with others through the platform.
          <br /><br />
          SkillMatcha does not conduct criminal background checks on its users and does not verify the accuracy of information provided by users.
          <br />
          You are responsible for your interactions, both on the platform and offline.
          When engaging with other users, particularly in person, exercise caution, trust your instincts, and follow all local safety regulations.
          <br /><br />
          We encourage you to follow our safety guidelines, which include meeting in public spaces, informing friends or family of your plans, and conducting thorough due diligence before meeting someone in person.
          If you feel threatened or unsafe, please report the incident to local law enforcement as well as to our support team.
        </TypographySmall>
      </div>

      {/* Modifications and Termination Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>8. Modifications and Termination</TypographyH3>
        <TypographySmall>
          We reserve the right to modify or discontinue our services at any time. We may terminate or suspend your account if you violate these Terms of Service.
        </TypographySmall>
      </div>

           {/* Limitation of Liability Section */}
           <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>9. Limitation of Liability</TypographyH3>
        <TypographySmall>
          SkillMatcha provides its services on an "as-is" and "as-available" basis, and we expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          <br /><br />
          Under no circumstances shall SkillMatcha, its affiliates, or its employees be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          <br />
          - Your access to or use of, or inability to access or use, the service.
          <br />
          - Any conduct or content of any third party on the service, including without limitation, any defamatory, offensive, or illegal conduct of other users or third parties.
          <br />
          - Any unauthorized access, use, or alteration of your transmissions or content.
          <br /><br />
          To the extent permitted by law, our liability for any claim arising out of your use of SkillMatcha will be limited to the amount you paid us, if any, for accessing the service.
          <br />
          Some jurisdictions do not allow limitations on implied warranties, so the above limitations may not apply to you.
        </TypographySmall>
      </div>

      {/* Governing Law Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>10. Governing Law</TypographyH3>
        <TypographySmall>
          These terms are governed by the laws of the jurisdiction in which you reside, unless otherwise required by applicable laws. 
          Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in your local jurisdiction, unless otherwise specified by mandatory local laws.
          <br /><br />
          In cases where the applicable law differs based on your location, SkillMatcha reserves the right to comply with those mandatory legal requirements while maintaining its rights and obligations under these Terms.
        </TypographySmall>
      </div>
    </div>
  );
};

export { TermsOfUse };
