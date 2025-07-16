
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, CheckCircle, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-roboto-condensed mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            How we'll work with you
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed font-light">
            Our streamlined three-step process ensures we deliver what we promised.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          <Card className="bg-gradient-to-br from-neon-sky-blue/10 to-neon-sky-blue/5 border-neon-sky-blue/30 max-w-sm w-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-sky-blue/20 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 rounded-full bg-neon-sky-blue/20 border border-neon-sky-blue/40 w-fit">
              <Phone className="h-10 w-10 text-neon-sky-blue" />
            </div>
            <CardTitle className="text-2xl font-bold text-neon-sky-blue font-roboto-condensed">
              Kickoff Call
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-300 font-roboto-condensed text-center leading-relaxed">
              Discuss in depth what will be built, define expected deliverables, create a timeline, and discuss pricing.
            </CardDescription>
          </CardContent>
        </Card>

        <ArrowRight className="h-48 w-48 text-neon-sky-blue hidden lg:block animate-pulse" />

          <Card className="bg-gradient-to-br from-neon-sky-blue/10 to-neon-sky-blue/5 border-neon-sky-blue/30 max-w-sm w-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-sky-blue/20 animate-slide-in-left">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-neon-sky-blue/20 border border-neon-sky-blue/40 w-fit">
                {/* Replace with Computer and Keyboard icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="7" y="18" width="10" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="9" y="16" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold text-neon-sky-blue font-roboto-condensed">
                Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 font-roboto-condensed text-center leading-relaxed">
                Updates delivered on a private discord channel iterating on your feedback.
              </CardDescription>
            </CardContent>
          </Card>


     

          <ArrowRight className="h-48 w-48 text-neon-sky-blue hidden lg:block animate-pulse" />

          <Card className="bg-gradient-to-br from-neon-sky-blue/10 to-neon-sky-blue/5 border-neon-sky-blue/30 max-w-sm w-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-sky-blue/20 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-neon-sky-blue/20 border border-neon-sky-blue/40 w-fit">
                <CheckCircle className="h-10 w-10 text-neon-sky-blue" />
              </div>
              <CardTitle className="text-2xl font-bold text-neon-sky-blue font-roboto-condensed">
                Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 font-roboto-condensed text-center leading-relaxed">
                The final product will be demoed and delivered. We also provide future updates to your application for a monthly fee.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
