'use client';

import { useState } from 'react';

import CTASection from './CTA-section';
import FeaturesHighlights from './FeaturesHighlights';
import Footer from './Footer';
import HeroSection from './hero-section';
import LandingFormPage from './LandingFormPage';
import SectionAppear from './SectionAppear';

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

  // TODO в UserCard поменять верстку в том числе адаптивную
  // в data стили поменять
  // проверить все в темной и светлой теме
  // сделать отправку email
  // Footer попарвить отступы
  // карточки Why Choose Us? не одной высоты
  // положить в локали
  // переименовать файлы под стили
  // дописать форму для модалки lead
  // прибраться

  return (
    <>
      <div className="mx-auto flex h-full min-h-screen max-w-screen-xl flex-col items-center justify-start gap-20 px-4 py-20 text-slate-800 dark:text-neutral-200 md:gap-28 lg:gap-28 xl:gap-32">
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
        <Footer />
      </div>

      {isFormOpen && <LandingFormPage onClose={closeForm} />}
    </>
  );
}

export { LandingPage };
