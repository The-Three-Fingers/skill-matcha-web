import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from '@/components/ui/dialog';

import { RoleForm } from './role-form';
import type { PreferenceFields } from './types';

const SearchPreferenceDialog = ({
  children,
  index,
  onSubmit,
  searchPreference,
}: {
  children: React.ReactNode;
  index?: number;
  onSubmit: (data: PreferenceFields) => void;
  searchPreference?: PreferenceFields;
}) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogPortal>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(event) => event.preventDefault()}
        onEscapeKeyDown={(event) => event.preventDefault()}
      >
        <RoleForm
          onSubmit={onSubmit}
          index={index}
          initialValues={searchPreference}
        />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { SearchPreferenceDialog };
