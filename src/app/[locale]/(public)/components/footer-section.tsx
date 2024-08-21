import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { TypographyH4 } from '@/components/ui/typography';

export default async function FooterSection() {
  const t = await getTranslations('externalLinks');

  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-8 p-10 text-center text-foreground lg:pt-14">
      <div className="flex flex-col gap-2">
        <TypographyH4>© {year} SKILLMATCHA</TypographyH4>
        <Link href="/" className="hover:text-primary-500 transition">
          {t('termsOfService')}
        </Link>

        <Link href="/" className="hover:text-primary-500 transition">
          {t('privacyPolicy')}
        </Link>
      </div>

      <div className="flex justify-center">
        {/* <a
          href="/"
          className="group block size-fit transition"
        >
          <Facebook className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
        </a>
        <a
          href="/"
          className="group block size-fit transition"
        >
          <Twitter className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
        </a> */}

        <a
          href="https://www.linkedin.com/company/the-three-fingers/about"
          className="group block size-fit transition"
          target="_blank"
          // rel="noopener noreferrer"
          aria-label="Visit our LinkedIn page"
        >
          <Linkedin className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition" />
        </a>
      </div>
    </footer>
  );
}
