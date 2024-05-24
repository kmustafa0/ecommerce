import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const { id, alt, link } = body;

    if (!id) {
      return new NextResponse(JSON.stringify({ message: 'id is required!' }, { status: 400 }));
    }

    const updatedImage = await prisma.HeroImage.update({
      where: { id },
      data: { alt, link },
    });

    return new NextResponse(JSON.stringify(updatedImage), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
