'use client';

import { useState } from 'react';

import CTASection from './CTA-section';
import FeaturesHighlights from './features-highlights';
import FooterSection from './footer-section';
import LandingFormPage from './form-modal';
import HeroSection from './hero-section';
import SectionAppear from './section-appear';

function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onSignUp = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  // sm - 640
  // md - 768
  // lg - 1024
  // xl - 1280

  // TODO:
  // дописать форму для модалки lead
  // текст модалки в локалях (+форма)
  // прибраться

  // сделать отправку email
  // в data контент/текст для карточек подредактировать
  // карточки в линии вполтную по высоте и не видно границ на экранах больше ~md, скорректировать стили

  return (
    <>
      <div className="mx-auto flex h-full min-h-screen max-w-screen-xl flex-col items-center justify-start gap-20 px-4 py-20 text-slate-800 dark:text-neutral-200 md:gap-24 lg:gap-28 xl:gap-32">
        <HeroSection onSignUp={onSignUp} />
        <CTASection onSignUp={onSignUp} />

        <SectionAppear>
          <FeaturesHighlights />
        </SectionAppear>

        {/* {showDemoInterface && (
          <SectionAppear>
            <div className="center-content w-full">
              <Image
                src={interfaceSrc}
                alt="interface"
                className="my-4 w-4/5 max-w-screen-xl object-cover sm:my-6 xl:my-8"
              />
            </div>
          </SectionAppear>
        )} */}
        <FooterSection />
      </div>

      {isFormOpen && <LandingFormPage onClose={closeForm} />}
    </>
  );
}

export { LandingPage };
