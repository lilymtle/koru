type GratitudeBenefit = {
    id: number;
    title: string;
    description: string;
    image: string
};

export const gratitudeBenefits: GratitudeBenefit[] = [
    {
        id: 1,
        title: "Improved Mental Health",
        description: "Practicing gratitude can reduce symptoms of depression and anxiety, promoting a more positive mindset.",
        image: "/assets/images/benefits-1.png"
    },
    {
        id: 2,
        title: "Enhanced Relationships",
        description: "Expressing gratitude strengthens relationships by fostering connection and appreciation between individuals.",
        image: "/assets/images/benefits-2.png"
    },
    {
        id: 3,
        title: "Better Physical Health",
        description: "Grateful individuals often experience fewer health issues, as gratitude can lead to improved sleep, reduced pain, and healthier lifestyles.",
        image: "/assets/images/benefits-3.png"
    },
    {
        id: 4,
        title: "Increased Resilience",
        description: "Gratitude helps people cope better with stress and adversity, enhancing their ability to bounce back from challenges.",
        image: "/assets/images/benefits-4.png"
    },
    {
        id: 5,
        title: "Greater Life Satisfaction",
        description: "Regularly acknowledging what you’re thankful for can boost overall happiness and contentment, leading to a more fulfilling life.",
        image: "/assets/images/benefits-5.png"
    }
];