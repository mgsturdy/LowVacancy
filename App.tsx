import React from 'react';
import { Button, SectionTitle, Card } from './components/UI';
import { StrategyGenerator } from './components/StrategyGenerator';
import { ComparisonChart } from './components/ComparisonChart';
import { Building2, TrendingUp, Users, ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-industrial-950/90 backdrop-blur border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-safety flex items-center justify-center">
            <span className="font-bold text-black text-xl">L</span>
          </div>
          <span className="font-bold text-white tracking-widest uppercase text-lg">Low Vacancy</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-industrial-400 hover:text-white text-sm uppercase tracking-wider font-mono transition-colors">Process</a>
          <a href="#services" className="text-industrial-400 hover:text-white text-sm uppercase tracking-wider font-mono transition-colors">Services</a>
          <a href="#generator" className="text-industrial-400 hover:text-white text-sm uppercase tracking-wider font-mono transition-colors">Tools</a>
          <Button variant="primary" onClick={() => window.location.href = "#contact"}>
            Start Leasing
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-industrial-900 border-b border-industrial-800 p-6 flex flex-col gap-4">
          <a href="#process" className="text-white py-2" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#services" className="text-white py-2" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#generator" className="text-white py-2" onClick={() => setIsOpen(false)}>Tools</a>
          <Button className="w-full">Start Leasing</Button>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => (
  <header className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="inline-block border border-safety/30 bg-safety/10 text-safety px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6">
        New Build Specialists
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-8">
        0% Vacancy.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-500 to-industrial-200">100% Organic.</span>
      </h1>
      <p className="text-industrial-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 border-l-4 border-industrial-700 pl-6">
        We handle the entire lease acquisition lifecycle for property developers. 
        No expensive ads. Just high-converting organic content placed exactly where your renters are scrolling.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}>
          Calculate Your Strategy
        </Button>
        <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          View Services
        </Button>
      </div>
    </div>
    
    {/* Abstract Industrial Background */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-industrial-800 via-industrial-950 to-industrial-950 opacity-50 -z-10" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-industrial-700 to-transparent" />
  </header>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group border border-industrial-800 bg-industrial-900/50 p-8 hover:border-safety transition-colors duration-300">
    <div className="mb-6 text-industrial-400 group-hover:text-safety transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">{title}</h3>
    <p className="text-industrial-400 text-sm leading-relaxed font-mono">{desc}</p>
  </div>
);

const StatsSection: React.FC = () => (
  <section className="py-20 bg-industrial-900 border-y border-industrial-800">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { label: "Lease Up Speed", value: "2.5x", sub: "Faster than market avg" },
        { label: "Cost Reduction", value: "60%", sub: "Lower acquisition cost" },
        { label: "Organic Reach", value: "150k+", sub: "Monthly impressions" },
        { label: "Developer Partners", value: "40+", sub: "Trust Low Vacancy" },
      ].map((stat, i) => (
        <div key={i} className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
          <span className="text-safety text-xs font-mono uppercase tracking-widest mb-1">{stat.label}</span>
          <span className="text-industrial-500 text-xs">{stat.sub}</span>
        </div>
      ))}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-industrial-950 font-sans selection:bg-safety selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <StatsSection />

        <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="The Organic Advantage" 
                subtitle="Renters are blind to banner ads. They trust content. We build an authentic narrative around your development that pulls leases in on autopilot."
              />
              <ul className="space-y-6">
                {[
                  "Algorithmic dominance on TikTok & Reels",
                  "Community integration via local subreddits",
                  "SEO-optimized listing descriptions",
                  "Virtual tour content production"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white">
                    <div className="w-1 h-1 bg-safety box-content p-1 border border-safety/20" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button variant="secondary" className="flex items-center gap-2">
                  See Case Studies <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="h-[400px]">
              <ComparisonChart />
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-6 bg-industrial-950 border-t border-industrial-900">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Full Stack Operations" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<Building2 className="w-8 h-8" />}
                title="Content Production"
                desc="We deploy creators to your site to capture raw, industrial, and finished aesthetic content that stops the scroll."
              />
              <ServiceCard 
                icon={<Users className="w-8 h-8" />}
                title="Community Mgmt"
                desc="We respond to every DM, comment, and inquiry within 15 minutes, converting interest into showings immediately."
              />
              <ServiceCard 
                icon={<TrendingUp className="w-8 h-8" />}
                title="Listing Optimization"
                desc="A/B testing headlines and images across Zillow, Apartments.com, and Facebook Marketplace for max CTR."
              />
            </div>
          </div>
        </section>

        <StrategyGenerator />

        <section id="contact" className="py-24 px-6 border-t border-industrial-800 bg-industrial-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">
              Ready to Fill Your Building?
            </h2>
            <p className="text-industrial-400 mb-10 max-w-xl mx-auto">
              Stop burning cash on PPC. Start building an asset that generates leases organically.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="w-full sm:w-auto" onClick={() => window.location.href = 'mailto:jack@lowvacancy.ca'}>Get A Quote</Button>
              <Button variant="secondary" className="w-full sm:w-auto" onClick={() => window.location.href = 'mailto:jack@lowvacancy.ca'}>Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-industrial-800 bg-industrial-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-industrial-800 flex items-center justify-center">
              <span className="font-bold text-white text-xs">L</span>
            </div>
            <span className="font-bold text-industrial-500 uppercase text-sm tracking-widest">Low Vacancy</span>
          </div>
          <div className="flex gap-6 text-industrial-600 text-sm font-mono">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
          <div className="text-industrial-700 text-xs font-mono">
            © 2024 Low Vacancy Operations.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;