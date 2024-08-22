import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { SendLeadForm } from '@/validations/lead-email-form';

import { getFirebaseAdminApp } from '../../firebase';

export async function POST(request: NextRequest) {
  try {
    const db = getFirestore(getFirebaseAdminApp());

    const requestData = await request.json();
    const parse = SendLeadForm.safeParse(requestData);

    if (!parse.success) {
      return NextResponse.json(parse.error.format(), { status: 422 });
    }

    const newLead = {
      id: parse.data.email,
      createdAt: FieldValue.serverTimestamp(),
    };

    try {
      await db.collection('leadEmails').doc(parse.data.email).create(newLead);
    } catch (error: any) {
      // If the error is due to a duplicate email, return a 422 status code
      if (error.code === 6) {
        return NextResponse.json(
          { error: 'Request already sent with this email' },
          {
            status: 422,
          },
        );
      }
    }

    return NextResponse.json('success', { status: 200 });
  } catch (error) {
    return NextResponse.json(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
