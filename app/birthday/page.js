import BirthdayHero from "../components/BirthdayHero";
import PhotoGallery from "../components/PhotoGallery";
import WishesSection from "../components/WishesSection";
import ClosingSection from "../components/ClosingSection";
import AudioPlayer from "../components/AudioPlayer";
import Sparks from "../components/Sparks";
import { photos, wishes, videos } from "../data/config";

export default function BirthdayPage() {
  const gallery = [...videos, ...photos];
  
  return (
    <>
      <main className="page-enter relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <Sparks />
        <BirthdayHero />
        <PhotoGallery photos={gallery} />
        <WishesSection wishes={wishes} />
        <ClosingSection />
      </main>
      <AudioPlayer />
    </>
  );
}
