import CTASection from './CTA-section';
import FeaturesHighlights from './features-highlights';
import FooterSection from './footer-section';
import HeroSection from './hero-section';

function LandingPage() {
  // sm - 640
  // md - 768
  // lg - 1024
  // xl - 1280
  // 2xl - '1536px',

  // TODO:
  // api модалки sendLead

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-start text-slate-800 dark:text-neutral-200">
      <div className="w-full bg-primary/15 bg-landing bg-[length:45%_100%] bg-right bg-no-repeat">
        <div className="mx-auto max-w-screen-lg px-4 py-16 lg:py-32">
          <HeroSection />
        </div>
      </div>

      <CTASection />

      <FeaturesHighlights />

      <FooterSection />
    </div>
  );
}

export { LandingPage };
