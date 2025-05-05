import Contact from '@/components/sections/contact';
import FAQSection from '@/components/sections/faq';
import Footer from '@/components/sections/footer';
import HowItWorks  from '@/components/sections/howItWorks';
import ShadeDevelopers  from '@/components/sections/shadeDevelopers';

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <HowItWorks />
      <ShadeDevelopers />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
