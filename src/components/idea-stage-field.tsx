import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useIdeaStages } from '@/hooks/queries/use-idea-stages';

import { Combobox } from './ui/combobox';

const IdeaStageField = ({ className }: { className?: string }) => {
  const { control } = useFormContext();

  const t = useTranslations('profileForm');
  const { data: ideaStages = [] } = useIdeaStages();

  const ideaStagesOptions = ideaStages.map((ideaStage) => ({
    label: ideaStage.name,
    value: ideaStage.id,
  }));

  return (
    <FormField
      control={control}
      name="ideaStage"
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{t('ideaStageLabel')}</FormLabel>
          <FormControl>
            <Combobox
              isSearchable={false}
              options={ideaStagesOptions}
              className="flex"
              isClearable
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { IdeaStageField };
