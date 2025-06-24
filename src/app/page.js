
import HeroSection from '@/components/main/HeroSection';
import ServiceIntroSection from '@/components/main/ServiceIntroSection';
import BestItemsSection from '@/components/main/BestItemsSection';
import RecentTagsSection from '@/components/main/RecentTagsSection';

export default function Home() {
    return (
        <div className='relative w-full min-h-screen flex flex-col items-center justify-between'>
            <HeroSection />
            <ServiceIntroSection />
            <BestItemsSection />
            <RecentTagsSection />
        </div>
    );
}
