import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { DataDisplay } from '../components/ui/DataDisplay';
import { IdentitySection } from '../components/sections/IdentitySection';
import { BusinessSection } from '../components/sections/BusinessSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { ProjectMapSection } from '../components/sections/ProjectMapSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TechQualitySafetySection } from '../components/sections/TechQualitySafetySection';
import { CareersCTASection } from '../components/sections/CareersCTASection';
import { InquiryCTASection } from '../components/sections/InquiryCTASection';

interface HomePageProps {
  onOpenBrochure: () => void;
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBrochure, onOpenContact }) => {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <HeroSection onOpenBrochure={onOpenBrochure} />

      {/* Section 2: Key Metrics Data Display */}
      <DataDisplay />

      {/* Section 3: Identity */}
      <IdentitySection />

      {/* Section 4: Business Domains */}
      <BusinessSection />

      {/* Section 5: Featured Track Record Projects */}
      <FeaturedProjectsSection onContactRequest={onOpenContact} />

      {/* Section 6: Nationwide Map */}
      <ProjectMapSection />

      {/* Section 7: Process */}
      <ProcessSection />

      {/* Section 8: Tech, Quality, Safety */}
      <TechQualitySafetySection />

      {/* Section 9: Careers CTA */}
      <CareersCTASection />

      {/* Section 10: Inquiry CTA */}
      <InquiryCTASection onOpenBrochure={onOpenBrochure} />
    </div>
  );
};
