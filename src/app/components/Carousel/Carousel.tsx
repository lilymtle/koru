"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ContentCarousel = () => {
    return (
        <section className="w-3/5">
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}>
                <CarouselContent>
                    <CarouselItem className="flex flex-col items-center">
                        <h3 className="main__carousel-slide-title">
                            Daily Prompts
                        </h3>

                        <p className="text-sm text-center text-gray-500">
                            You'll receive thoughtful prompts each day that inspire you to reflect
                            deeply on what you’re grateful for. This helps you focus on the 
                            positive aspects of your life.
                        </p>
                    </CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default ContentCarousel;
