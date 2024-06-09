import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const GET = async (req, { params }) => {
  try {
    const { searchParams } = new URL(req.url);
    const color = searchParams.get('color');
    const { slug } = params;

    let product = await prisma.Product.findUnique({
      where: { slug },
      include: {
        images: true,
        colors: true,
        sizes: true,
        category: true,
      },
    });

    if (!product) {
      return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 });
    }

    if (color) {
      product.images = product.images.filter(
        (image) => image.color.toLowerCase() === color.toLowerCase()
      );
    }
    product.images.sort((a, b) => (b.primary === true ? 1 : -1));
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
