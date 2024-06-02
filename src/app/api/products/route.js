import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const GET = async () => {
  try {
    const products = await prisma.Product.findMany({
      include: {
        images: true,
        colors: {
          include: {
            images: true,
          },
        },
        sizes: true,
        category: true,
      },
    });
    return new NextResponse(JSON.stringify({ products }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
