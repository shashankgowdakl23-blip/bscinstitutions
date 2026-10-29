import React from 'react';

// Import partner logos
import aditya from '/images/partner-section/aditya-birla-capital.png'
import hdfcBank from '/images/partner-section/hdfc-bank-limited.png'
import hdfcLogo from '/images/partner-section/Hdfc-Logo-Main.svg'
import SBI from '/images/partner-section/SBI_Mutual_Fund.png'
import SBILife from '/images/partner-section/sbi-life-insurance.png'
import StarHealth from '/images/partner-section/star-health-insurance.png'
import TATAAig from '/images/partner-section/tata-aig-insurance.png'

const PartnersSection: React.FC = () => {
  const logos = [
    { src: aditya, name: "Aditya Birla Capital" },
    { src: hdfcBank, name: "HDFC Bank" },
    { src: hdfcLogo, name: "HDFC" },
    { src: SBI, name: "SBI Mutual Fund" },
    { src: SBILife, name: "SBI Life Insurance" },
    { src: StarHealth, name: "Star Health Insurance" },
    { src: TATAAig, name: "TATA AIG Insurance" },
  ];

  // Duplicate logos for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Trusted </span> Partners
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We collaborate with India's leading financial institutions to provide you the best opportunities
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
          <div className="py-10">
            <div className="flex items-center">
              <div className="flex-shrink-0 animate-marquee">
                <div className="flex items-center gap-12 md:gap-20 px-6">
                  {infiniteLogos.map((logo, index) => (
                    <div
                      key={`${index}-${logo.name}`}
                      className="flex-shrink-0 flex items-center justify-center group"
                    >
                      <div className="relative p-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:shadow-md">
                        <img
                          className="h-12 md:h-16 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                          src={logo.src}
                          alt={logo.name}
                          loading={index > 10 ? 'lazy' : 'eager'}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background/80 via-background/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background/80 via-background/50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
