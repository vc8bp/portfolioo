import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import("@/components/Model/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-8" id="scroll-container" >
      <div className='inset-0 pointer-events-none fixed z-50' >
        <ModelViewer />
      </div>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}