import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const catName = params.name.toLowerCase();
  try {
    const categoryProducts = await prisma.Category.findUnique({
      where: { name: params.name || catName },
      include: {
        products: {
          include: {
            images: true,
            sizes: true,
          },
        },
      },
    });

    if (!categoryProducts) {
      return new NextResponse(JSON.stringify({ message: 'Category not found' }, { status: 404 }));
    }

    return new NextResponse(JSON.stringify(categoryProducts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(({ message: 'Something went wrong! ' }, { status: 500 }));
  }
};
