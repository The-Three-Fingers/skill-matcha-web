import CTASection from './CTA-section';
import FeaturesHighlights from './features-highlights';
import FooterSection from './footer-section';
import HeroSection from './hero-section';

// TODO поработать с цветами в темной версии - слишком болотный/милитари цвет.Рассмотреть ближе к черному-серому. Как в chadcn примере

function LandingPage() {
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-start text-slate-800 dark:text-neutral-200">
      <div className="w-full bg-landing bg-[length:45%_100%] bg-right bg-no-repeat">
        <div className="mx-auto max-w-screen-lg px-4 py-9 sm:py-20 lg:py-24 xl:py-28">
          <HeroSection />
        </div>
      </div>

      <FeaturesHighlights />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export { LandingPage };
