'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SchemeMatchingSection from './components/SchemeMatchingSection';
import EligibilitySection from './components/EligibilitySection';
import SahayakSection from './components/SahayakSection';
import AlertsSection from './components/AlertsSection';
import GovtUpdatesSection from './components/GovtUpdatesSection';
import EmergencySection from './components/EmergencySection';
import Footer from './components/Footer';

export default function JanSaathiPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SchemeMatchingSection />
        <EligibilitySection />
        <SahayakSection />
        <AlertsSection />
        <GovtUpdatesSection />
        <EmergencySection />
      </main>
      <Footer />
    </>
  );
}
