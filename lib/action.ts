'use server';

import { auth } from '@/auth';
import { writeClient } from '@/sanity/lib/write-client';
import slugify from 'slugify';

export const createPitch = async (state: any, form: FormData, pitch: string) => {
  const session = await auth();
  if (!session) return {
    error: 'Not Signed In',
    status: 'ERROR',
  };
  const { title, description, category, link } = Object.fromEntries(
    Array.from(form)
      .filter(([key]) => key !== 'pitch')
  );
  const slug = slugify(title as string, { lower: true, strict: true });
  try {
    const startup = {
      title, description, image: link,
      category,
      views: 0,
      slug: {
        _type: slug,
        current: slug
      },
      author: {
        _type: 'reference',
        _ref: session?.id,
      },
      pitch
    };
    const result = await writeClient.create({
      _type: 'startup',
      ...startup,
    });
    return {
      ...result,
      error: '',
      status: 'SUCCESS',
    };
  } catch (error) {
    console.error(error);
    return {
      error: JSON.stringify(error),
      status: 'ERROR',
    }
  }
};
