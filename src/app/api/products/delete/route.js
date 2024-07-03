import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return new NextResponse(
        JSON.stringify({ message: 'Product id is required!' }, { status: 400 })
      );
    }

    await prisma.product.delete({
      where: { id },
    });

    return new NextResponse(JSON.stringify({ message: 'Product deleted successfully' }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
