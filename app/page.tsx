import Contact from '@/components/sections/contact';
import FAQSection from '@/components/sections/faq';
import Footer from '@/components/sections/footer';
import HowItWorks  from '@/components/sections/howItWorks';
import ShadeDevelopers  from '@/components/sections/shadeDevelopers';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <HeroSection />
      <HowItWorks />
      <ShadeDevelopers />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
