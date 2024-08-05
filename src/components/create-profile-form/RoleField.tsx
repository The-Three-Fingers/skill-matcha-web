import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import type { RoleKey } from '../types';

const RoleField = () => {
  const { control } = useFormContext();
  const t = useTranslations('CreateProfileForm');

  const roleOptions: Record<RoleKey, string> = {
    developer: t('role_options.developer'),
    designer: t('role_options.designer'),
    product_manager: t('role_options.product_manager'),
    founder: t('role_options.founder'),
    marketing_specialist: t('role_options.marketing_specialist'),
    cto: t('role_options.cto'),
    other: t('role_options.other'),
  };

  const roleKeys = Object.keys(roleOptions) as RoleKey[];

  return (
    <FormField
      control={control}
      name="roles"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{t('select_your_role')}</FormLabel>
          </div>

          {roleKeys.map((roleKey) => (
            <FormField
              key={roleKey}
              control={control}
              name="roles"
              render={({ field }) => {
                const isChecked = field.value?.includes(roleKey);
                return (
                  <FormItem
                    key={roleKey}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, roleKey])
                            : field.onChange(
                                field.value?.filter(
                                  (value: RoleKey) => value !== roleKey,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{roleOptions[roleKey]}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RoleField;
