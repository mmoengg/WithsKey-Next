
import HeroSection from '@/components/main/HeroSection';
import ServiceIntroSection from '@/components/main/ServiceIntroSection';
import BestItemsSection from '@/components/main/BestItemsSection';
import RecentTagsSection from '@/components/main/RecentTagsSection';

export default function Home() {
    return (
        <div className='relative w-full min-h-screen fcc flex-col'>
            <HeroSection />
            <ServiceIntroSection />
            <div className="w-full flex">
                <BestItemsSection />
                <RecentTagsSection />
            </div>
        </div>
    );
}
