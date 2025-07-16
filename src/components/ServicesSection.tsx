
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, MessageSquare, Globe, Smartphone, Calendar } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Shift Booking & Check-out Bots",
    description: "Automated scheduling and booking systems that handle reservations, appointments, and shift management."
  },
  {
    icon: Users,
    title: "Lead Scrapers",
    description: "Advanced data collection tools that identify and gather high-quality leads from social media."
  },
  {
    icon: MessageSquare,
    title: "Mass Messaging Tools",
    description: "Intelligent bulk communication systems with personalization capabilities and automated follow-up for maximum engagement."
  },
  {
    icon: Bot,
    title: "Web Agents",
    description: "Sophisticated AI agents that can navigate websites, extract data, perform tasks, and interact with web interfaces autonomously."
  },
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Bespoke web applications built with modern technologies, optimized for performance, scalability, and user experience."
  },
  {
    icon: Smartphone,
    title: "Custom Applications",
    description: "Tailored software solutions designed to solve specific business challenges with cutting-edge AI integration and automation."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-roboto-condensed mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed font-light">
            AI adoption is a lot harder than it looks. We'll guide you through it.
          </p>
          <br/>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed font-light">
            We bring a decade of expertise in software development from Fortune 500 companies to build custom AI automation solutions with a clear ROI for your needs. 
          </p>
          <br/>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed font-light">
          From productivity improvements, lead generation, sales, and operations, we can help you automate the repetitive parts of your life and business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-800 hover:border-neon-sky-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-sky-blue/10 backdrop-blur-sm animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-neon-sky-blue/20 border border-neon-sky-blue/30">
                    <service.icon className="h-8 w-8 text-neon-sky-blue" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-neon-sky-blue font-roboto-condensed">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-roboto-condensed leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
