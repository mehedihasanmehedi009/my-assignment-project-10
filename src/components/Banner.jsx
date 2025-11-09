 import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const videos = [
  "https://static.vecteezy.com/system/resources/previews/070/733/594/mp4/blue-door-animation-opening-and-closing-on-white-wall-with-transparent-background-free-video.mp4",
  "https://cdn.pixabay.com/video/2021/09/22/89273-614024119_tiny.mp4",
  "https://cdn.pixabay.com/video/2025/04/07/270544_tiny.mp4"
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <div className="w-full flex justify-center p-4 relative">
      <div className="max-w-7xl w-full relative overflow-hidden bg-black rounded-2xl shadow-2xl">
        {/* Carousel slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {videos.map((src, i) => (
            <div key={i} className="w-full shrink-0 relative h-[58vh]">
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                current === i ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
