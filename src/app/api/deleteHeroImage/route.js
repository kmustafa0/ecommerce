import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';
import { deleteImageFromFirebase } from '@/utils/firebase';

export const DELETE = async (req) => {
  try {
    const body = await req.json();
    const { id, src } = body;

    if (!id || !src) {
      return new NextResponse(
        JSON.stringify({ message: 'id and src are required!' }, { status: 400 })
      );
    }
    await deleteImageFromFirebase(src);

    await prisma.HeroImage.delete({
      where: { id },
    });

    return new NextResponse(JSON.stringify({ message: 'Image deleted successfully' }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
