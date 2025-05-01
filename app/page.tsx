import Contact from '@/components/sections/contact';
import FAQSection from '@/components/sections/faq';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
