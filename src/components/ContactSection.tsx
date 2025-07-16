
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-midnight-blue scroll-mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white font-roboto-condensed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Ready to transform your ideas into reality?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

          <Button 
            size="lg" 
            className="bg-neon-sky-blue hover:bg-neon-sky-blue/80 text-midnight-blue font-roboto-condensed font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-sky-blue/25"
            asChild
          >
            <a href="mailto:aimlwithalex@gmail.com?subject=Software Automation Inquiry?body=Hi, I'm interested in seeing what you can build for me. I want to automate "
            >
              Get in touch
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-neon-sky-blue/10 to-neon-sky-blue/5 border border-neon-sky-blue/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-sky-blue/20">
            <h3 className="text-2xl font-bold mb-2 text-neon-sky-blue font-roboto-condensed text-center">
              Custom Pricing
            </h3>
            <p className="text-gray-300 text-center mb-6 font-roboto-condensed text-sm">
              Development fee + monthly maintenance fee
            </p>
            
            <ul className="space-y-4 text-gray-300 font-roboto-condensed">
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-neon-sky-blue mr-3 flex-shrink-0" />
                <span>Develop your AI bot, app, or website</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-neon-sky-blue mr-3 flex-shrink-0" />
                <span>Custom low code and coded solutions</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 text-neon-sky-blue mr-3 flex-shrink-0" />
                <span>Direct messaging and updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
