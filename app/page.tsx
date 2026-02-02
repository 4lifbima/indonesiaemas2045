import { HeroSection } from "@/components/sections/HeroSection";
import { VisiSection } from "@/components/sections/VisiSection";
import { AgendaSection } from "@/components/sections/AgendaSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { KegiatanSection } from "@/components/sections/KegiatanSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisiSection />
      <AgendaSection />
      <TimelineSection />
      <MediaSection />
      <KegiatanSection />
    </>
  );
}
