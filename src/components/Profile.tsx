import { eq } from 'drizzle-orm';

import { db } from '@/libs/DB';
import { profilesSchema } from '@/models/Schema';

import { DeleteProfileEntry } from './DeleteProfileEntry';
import { EditableProfileEntry } from './EditableProfileEntry';

const Profile = async () => {
  const profile = await db.query.profilesSchema.findFirst({
    where: eq(profilesSchema.id, 1),
  });

  if (!profile) return null;

  return (
    <div className="mt-5" data-testid="guestbook-list">
      <div key={profile.id} className="mb-1 flex items-center gap-x-1">
        <DeleteProfileEntry id={profile.id} />

        <EditableProfileEntry
          id={profile.id}
          name={profile.name}
          lastName={profile.lastName}
        />
      </div>
    </div>
  );
};

export { Profile };
