import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden scroll-mt-20">
      {/* Enhanced background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-sky-blue/10 via-midnight-blue to-neon-sky-blue/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-sky-blue/5 to-neon-sky-blue/15"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-neon-sky-blue/8 via-transparent to-midnight-blue"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-neon-sky-blue/15 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-2/3 right-1/6 w-80 h-80 bg-neon-sky-blue/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-neon-sky-blue/8 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-neon-sky-blue/12 rounded-full blur-3xl opacity-35"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white font-roboto-condensed tracking-tight mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            AI with Alex
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-roboto-condensed font-light leading-relaxed">
            Building AI-driven software and automation tools
          </p>
          
          <a
            href="mailto:aimlwithalex@gmail.com?subject=Software Automation Inquiry?body=Hi, I'm interested in seeing what you can build for me. I want to automate "
            className="inline-flex items-center px-6 py-3 rounded-full bg-neon-sky-blue/20 border border-neon-sky-blue/30 mb-12 hover:bg-neon-sky-blue/30 transition-colors duration-200"
          >
            <span className="text-neon-sky-blue font-roboto-condensed font-medium">
              Get in touch
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
