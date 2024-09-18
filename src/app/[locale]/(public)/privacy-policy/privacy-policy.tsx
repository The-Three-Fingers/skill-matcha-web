import Link from 'next/link';
import React from 'react';

import {
  TypographyH1,
  TypographyH3,
  TypographyLarge,
  TypographyList,
  TypographySmall,
} from '@/components/ui/typography';

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto flex h-full max-w-screen-lg flex-col gap-4 lg:gap-6 xl:gap-9 2xl:gap-11">
      {/* Heading Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH1>Privacy Policy</TypographyH1>

        <TypographyLarge>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          SkillMatcha.
        </TypographyLarge>
      </div>

      {/* Information We Collect Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>1. Information We Collect</TypographyH3>
        <TypographySmall>
          We collect several types of information, including:
        </TypographySmall>
        <TypographyList>
          <li>
            <strong>Personal Information</strong>: Such as your name, email
            address, phone number, and any other details you provide when
            creating an account or using the platform.
          </li>
          <li>
            <strong>Usage Data</strong>: We automatically collect data on how
            you interact with the platform, including IP addresses, device
            information, and browsing patterns.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies</strong>: We use cookies,
            web beacons, and similar technologies to track your preferences and
            behavior on the platform.
          </li>
        </TypographyList>
      </div>

      {/* How We Use Your Information Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>2. How We Use Your Information</TypographyH3>
        <TypographySmall>
          We may use your information for various purposes, including:
        </TypographySmall>
        <TypographyList>
          <li>
            To provide, operate, and maintain the platform and its features.
          </li>
          <li>
            To personalize your experience and deliver content relevant to your
            interests.
          </li>
          <li>
            To communicate with you, including sending updates and security
            alerts.
          </li>
          <li>To monitor usage patterns and improve the platform.</li>
          <li>
            To comply with legal obligations or enforce our Terms of Service.
          </li>
        </TypographyList>
      </div>

      {/* Sharing Your Information Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>3. Sharing Your Information</TypographyH3>
        <TypographySmall>
          We may share your information with third parties in the following
          cases:
        </TypographySmall>
        <TypographyList>
          <li>
            <strong>With Service Providers</strong>: We may share your
            information with third-party vendors to help us provide and maintain
            the platform (e.g., hosting, analytics).
          </li>
          <li>
            <strong>For Legal Reasons</strong>: We may disclose your information
            if required by law or to protect our legal rights.
          </li>
          <li>
            <strong>In Case of a Business Transaction</strong>: If we undergo a
            merger, acquisition, or asset sale, your information may be
            transferred as part of that transaction.
          </li>
        </TypographyList>
      </div>

      {/* Data Retention Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>4. Data Retention</TypographyH3>
        <TypographySmall>
          We will retain your personal information for as long as necessary to
          provide the services or as required by law. When we no longer need
          your information, we will securely delete it.
        </TypographySmall>
      </div>

      {/* Security Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>5. Security</TypographyH3>
        <TypographySmall>
          We implement reasonable measures to safeguard your information, but no
          system can guarantee complete security. You are responsible for
          maintaining the security of your account information.
        </TypographySmall>
      </div>

      {/* Your Choices Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>6. Your Choices</TypographyH3>
        <TypographySmall>
          You have certain rights regarding your personal information,
          including:
        </TypographySmall>
        <TypographyList>
          <li>
            <strong>Access and Correction</strong>: You may request access to
            your personal data or ask to correct inaccuracies.
          </li>
          <li>
            <strong>Deletion</strong>: You may request the deletion of your
            account and associated data, subject to certain legal obligations.
          </li>
          <li>
            <strong>Opting Out</strong>: You may opt out of receiving marketing
            communications from us at any time by following the unsubscribe link
            in our emails.
          </li>
        </TypographyList>
      </div>

      {/* Changes to this Privacy Policy Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>7. Changes to this Privacy Policy</TypographyH3>
        <TypographySmall>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices. We will notify you of any significant updates by
          posting the revised policy on the platform.
        </TypographySmall>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col gap-2 xl:gap-4">
        <TypographyH3>8. Contact Information</TypographyH3>
        <TypographySmall>
          If you have any questions or concerns about this Privacy Policy or how
          we handle your information, please contact us at{' '}
          <Link
            className="text-primary"
            href="https://www.linkedin.com/company/skill-matcha/posts/?feedView=all"
          >
            LinkedIn.
          </Link>
        </TypographySmall>
      </div>
    </div>
  );
};

export { PrivacyPolicy };
