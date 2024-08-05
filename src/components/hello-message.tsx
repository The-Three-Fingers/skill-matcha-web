import { getTranslations } from 'next-intl/server';

const HelloMessage = async () => {
  const t = await getTranslations('Dashboard');

  return (
    <p>
      {/* 👋 {t('hello_message', { email: user?.emailAddresses[0]?.emailAddress })} */}
      👋 {t('hello_message', { email: 'test@test.test' })}
    </p>
  );
};

export { HelloMessage };
