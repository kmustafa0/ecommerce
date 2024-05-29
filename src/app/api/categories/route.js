import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const GET = async () => {
  try {
    const category = await prisma.Category.findMany({
      include: {
        products: true,
      },
    });
    return new NextResponse(JSON.stringify({ category }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
