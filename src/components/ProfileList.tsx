import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { profilesSchema } from '@/models/Schema';

import { DeleteProfileEntry } from './DeleteProfileEntry';
import { EditableProfileEntry } from './EditableProfileEntry';

const ProfileList = async () => {
  const profiles = await db
    .select()
    .from(profilesSchema)
    .orderBy(profilesSchema.createdAt);

  logger.info('Get all profiles entries');

  return (
    <div className="mt-5" data-testid="guestbook-list">
      {profiles.map((elt) => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          <DeleteProfileEntry id={elt.id} />

          <EditableProfileEntry
            id={elt.id}
            name={elt.name}
            lastName={elt.lastName}
          />
        </div>
      ))}
    </div>
  );
};

export { ProfileList };
