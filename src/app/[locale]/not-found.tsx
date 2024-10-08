import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'notFound',
  });

  return {
    title: t('metaTitle'),
  };
}

const ErrorPage = () => {
  const t = useTranslations('notFound');

  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              <div className="mx-auto mb-9 text-center text-primary">
                <svg
                  className="mx-auto w-full text-center"
                  height="210"
                  viewBox="0 0 474 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 163.051H101.211V191H133.308V163.051H153V136.111H133.308V32H91.2871L25 136.577V163.051ZM101.831 136.111H58.8025V134.869L100.591 68.6445H101.831V136.111Z"
                    stroke="url(#paint0_linear_116:1137)"
                    strokeWidth="3"
                  />
                  <path
                    d="M307 133.051H383.211V161H415.308V133.051H435V106.111H415.308V2H373.287L307 106.577V133.051ZM383.831 106.111H340.803V104.869L382.591 38.6445H383.831V106.111Z"
                    stroke="url(#paint1_linear_116:1137)"
                    strokeWidth="3"
                  />
                  <circle cx="227.5" cy="81.5" r="68.5" fill="currentColor" />
                  <mask
                    id="mask0_116:1137"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="159"
                    y="13"
                    width="137"
                    height="137"
                  >
                    <circle
                      opacity="0.8"
                      cx="227.5"
                      cy="81.5"
                      r="68.5"
                      fill="currentColor"
                    />
                  </mask>
                  <g mask="url(#mask0_116:1137)">
                    <circle
                      cx="227.5"
                      cy="81.5"
                      r="68.5"
                      fill="url(#paint2_radial_116:1137)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_116:1137)">
                      <circle
                        cx="233.543"
                        cy="49.2645"
                        r="28.2059"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_116:1137"
                      x="175.337"
                      y="-8.94141"
                      width="116.412"
                      height="116.412"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="15"
                        result="effect1_foregroundBlur_116:1137"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_116:1137"
                      x1="25"
                      y1="183"
                      x2="126.155"
                      y2="27.0837"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="currentColor" stopOpacity="0" />
                      <stop offset="1" stopColor="currentColor" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_116:1137"
                      x1="307"
                      y1="153"
                      x2="408.155"
                      y2="-2.91631"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="currentColor" stopOpacity="0" />
                      <stop offset="1" stopColor="currentColor" />
                    </linearGradient>
                    <radialGradient
                      id="paint2_radial_116:1137"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(227.5 81.5) rotate(90) scale(73.5368)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                {t('heading')}
              </h3>
              <p className="text-body-color mb-10 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                {t('description')}
              </p>
              <Button asChild>
                <Link href="/">{t('goBack')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

export const dynamic = 'force-dynamic';
