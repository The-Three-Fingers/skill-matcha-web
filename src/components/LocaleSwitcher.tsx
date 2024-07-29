'use client';

import { useLocale } from 'next-intl';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-20">
        <SelectValue defaultValue={locale} />
      </SelectTrigger>
      <SelectContent>
        {AppConfig.locales.map((elt) => (
          <SelectItem key={elt} value={elt}>
            {elt.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
