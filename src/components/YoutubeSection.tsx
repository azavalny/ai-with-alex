
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";

// Sample YouTube video data - replace with actual video IDs
const youtubeVideos = [
  { id: "ZlYTvoMT6i0", title: "Wine Management Database" },
  { id: "yxTtMNWqnMA", title: "Webscraping LinkedIn" },
  { id: "cDF7KIbRS24", title: "University Wide Chat App" },
  { id: "8l2-HogOodo", title: "Predicting the Super Bowl Winner" },
  { id: "Kn8Hsz1YT78", title: "AI Trash Detection" },
];

const YoutubeSection = () => {
  return (
    <section id="youtube" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-roboto-condensed mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Featured apps
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed font-light">
            Examples of different web apps and AI tools we can build
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {youtubeVideos.map((video, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-sky-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-sky-blue/10 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${video.title} on YouTube`}
                        className="block"
                      >
                        <div className="relative aspect-video rounded-t-lg overflow-hidden group cursor-pointer">
                          <img 
                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-4 rounded-full bg-neon-sky-blue/80 group-hover:bg-neon-sky-blue transition-colors duration-300">
                              <Play className="h-8 w-8 text-midnight-blue fill-current" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-neon-sky-blue font-roboto-condensed">
                            {video.title}
                          </h3>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-900/80 border-neon-sky-blue/30 text-neon-sky-blue hover:bg-neon-sky-blue/20" />
            <CarouselNext className="bg-gray-900/80 border-neon-sky-blue/30 text-neon-sky-blue hover:bg-neon-sky-blue/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
