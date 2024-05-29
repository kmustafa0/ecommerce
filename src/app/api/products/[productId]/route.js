import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const GET = async (req, { params }) => {
  try {
    const product = await prisma.Product.findUnique({
      where: { id: params.productId },
      include: { images: true, colors: true, sizes: true, category: true },
    });

    if (!product) {
      return new NextResponse(JSON.stringify({ message: 'Product not found' }, { status: 404 }));
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
