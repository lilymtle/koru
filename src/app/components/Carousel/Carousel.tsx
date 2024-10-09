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
        <section className="w-3/5 my-4 md:w-9/12 md:my-8">
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}>
                <CarouselContent>
                    <CarouselItem className="flex flex-col items-center">
                        <h3 className="carousel__slide-title">
                            Daily Prompts
                        </h3>

                        <p className="text-sm text-center text-gray-500">
                            You'll receive thoughtful prompts each day that inspire you to reflect
                            deeply on what you’re grateful for. This helps you focus on the 
                            positive aspects of your life.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center">
                        <h3 className="carousel__slide-title">
                            Secure Privacy
                        </h3>

                        <p className="text-sm text-center text-gray-500">
                            Rest assured that your thoughts and reflections are stored securely 
                            and privately. You can be completely honest without worrying about 
                            judgment.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center">
                        <h3 className="carousel__slide-title">
                            Mobile Accessibility
                        </h3>

                        <p className="text-sm text-center text-gray-500">
                            Access your journal on your phone, allowing you to jot down your thoughts anytime, 
                            anywhere.
                        </p>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="carousel__btn" />
                <CarouselNext className="carousel__btn" />
            </Carousel>
        </section>
    );
};

export default ContentCarousel;
