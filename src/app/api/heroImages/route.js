import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log(body);
    const src = body.src;

    if (!src) {
      return new NextResponse(JSON.stringify({ message: 'src is required!' }, { status: 400 }));
    }

    const newImage = await prisma.HeroImage.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(newImage), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};

export const GET = async () => {
  try {
    const images = await prisma.heroImage.findMany();
    return new NextResponse(JSON.stringify({ images }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
