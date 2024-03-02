import CategoryNavigation from '@/components/CategoryNavigation';
import Discount from '@/components/Discount';
import LatestCollections from '@/components/LatestCollections';
import PopularProducts from '@/components/PopularProducts';
import { EmblaCarousel } from '@/components/Slider/Slider';
import SocialMediaPosts from '@/components/SocialMediaPosts';

export default function Home() {
  return (
    <>
      <CategoryNavigation />
      <EmblaCarousel />
      <LatestCollections />
      <PopularProducts />
      <Discount />
      <SocialMediaPosts />
    </>
  );
}
