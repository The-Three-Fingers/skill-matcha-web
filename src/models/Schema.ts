import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const profilesSchema = pgTable('profiles', {
  id: serial('id'),
  name: text('name').notNull(),
  lastName: text('last_name').notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});
