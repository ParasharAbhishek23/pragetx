import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <ThemeToggle />
      <main>
        <HeroSection />
        <ImageGallery />
      </main>
    </div>
  );
}
