import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  videos: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, videos }) => {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`Property image ${index + 1}`}
                width={800}
                height={450}
                className="rounded-lg object-cover w-full h-[450px]"
              />
            </div>
          </CarouselItem>
        ))}
        {videos.map((video, index) => (
          <CarouselItem key={`video-${index}`} className="h-full">
            <div className="relative h-full w-full">
              <video
                src={video}
                controls
                className="w-full h-[450px] object-cover rounded-lg"
                onError={(e) => {
                  console.error(`Error loading video: ${video}`, e);
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};