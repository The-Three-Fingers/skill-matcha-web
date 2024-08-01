import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { profilesSchema } from '@/models/Schema';
import {
  DeleteProfileValidation,
  EditProfileValidation,
  ProfileValidation,
} from '@/validations/ProfileValidation';

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = ProfileValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const profiles = await db
      .insert(profilesSchema)
      .values(parse.data)
      .returning();

    logger.info('A new profile has been created');

    return NextResponse.json({
      id: profiles[0]?.id,
    });
  } catch (error) {
    logger.error(error, 'An error occurred while creating a profile');

    return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = EditProfileValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .update(profilesSchema)
      .set({
        name: parse.data.name,
        lastName: parse.data.lastName,
      })
      .where(eq(profilesSchema.id, parse.data.id));

    logger.info('A profile entry has been updated');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while updating a profile');

    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const json = await request.json();
  const parse = DeleteProfileValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db.delete(profilesSchema).where(eq(profilesSchema.id, parse.data.id));

    logger.info('A profile entry has been deleted');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while deleting a profile');

    return NextResponse.json({}, { status: 500 });
  }
};
