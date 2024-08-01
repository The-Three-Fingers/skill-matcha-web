import { PGlite } from '@electric-sql/pglite';
import {
  drizzle as drizzlePg,
  type NodePgDatabase,
} from 'drizzle-orm/node-postgres';
import { migrate as migratePg } from 'drizzle-orm/node-postgres/migrator';
import {
  drizzle as drizzlePglite,
  type PgliteDatabase,
} from 'drizzle-orm/pglite';
import { migrate as migratePglite } from 'drizzle-orm/pglite/migrator';
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants';
import path from 'path';
import { Client } from 'pg';

import schema from '@/models/Schema';

import { Env } from './Env';

type DBSchema = typeof schema;
type RealDB = NodePgDatabase<DBSchema>;
type FakeDB = PgliteDatabase<DBSchema>;

let client;
let drizzle: RealDB | FakeDB;

if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD && Env.DATABASE_URL) {
  client = new Client({
    connectionString: Env.DATABASE_URL,
  });
  await client.connect();

  drizzle = drizzlePg<DBSchema>(client, { schema });
  await migratePg(drizzle as RealDB, {
    migrationsFolder: path.join(process.cwd(), 'migrations'),
  });
} else {
  const global = globalThis as unknown as { client: PGlite };

  if (!global.client) {
    global.client = new PGlite();
    await global.client.waitReady;
  }

  drizzle = drizzlePglite<DBSchema>(global.client, { schema });
  await migratePglite(drizzle, {
    migrationsFolder: path.join(process.cwd(), 'migrations'),
  });
}

export const db = drizzle;
