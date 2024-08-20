import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { TypographyH4 } from '@/components/ui/typography';

export default function FooterSection() {
  const t = useTranslations('landing');

  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-8 border-t-2 border-t-neutral-500 p-10 text-center text-neutral-500 lg:pt-14">
      <div className="s:gap-g3X600 max:gap-g3X1920 s:flex-row gap-g3X0 flex flex-col">
        <TypographyH4>© {year} SkillMatcha</TypographyH4>
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
          href="https://www.linkedin.com/company/the-three-fingers/about/?viewAsMember=true"
          className="group block size-fit transition"
          target="_blank"
          // rel="noopener noreferrer"
          aria-label="Visit our LinkedIn page"
        >
          <Linkedin className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition" />
        </a>
        {/* <Tooltip title="Closed HR Community">
          <a
            href="/"
            className="group block size-fit"
          >
            <People className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
          </a>
        </Tooltip> */}
      </div>
    </footer>
  );
}
