'use client';

import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Stack />
        <Services />
        <Projects />
        <FAQ />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </I18nProvider>
  );
}
