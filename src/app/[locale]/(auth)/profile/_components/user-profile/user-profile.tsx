'use client';

import { useAuth } from '@/auth/AuthContext';

export function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h3>You are logged in as</h3>
      <div className="flex flex-col">
        <span>{user.photoURL && <img src={user.photoURL} />}</span>
        <span>{user.displayName}</span>
        <span>{user.email}</span>
      </div>
    </div>
  );
}
