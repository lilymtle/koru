// import data
import { gratitudeBenefits } from "./data/gratitudeBenefits";

// import components
import Link from "next/link";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Divider } from '@mui/material';
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <main id="main" className="mb-4">
      <div className="w-full flex flex-col gap-4 p-4">
        <h1 className="text-4xl text-gray-600 font-bold self-center leading-snug">
          Rooted in <span className="uppercase">reflection</span>, 
          blossoming in <span className="uppercase">growth</span>.
        </h1>

        <p>
          Koru connects you to the Māori concept of growth and renewal, 
          inviting daily reflections to foster gratitude and mindfulness.
        </p>
        
      </div>

      <section className="main__quote">
        <FormatQuoteIcon sx={{fontSize: "40px"}} />
        <h2 className="text-3xl text-center mb-4">
          Gratitude unlocks the fullness of life.
          It turns what we have into enough, and more.
        </h2>
        
        <p className="italic">
        — Melody Beattie
        </p>
      </section>

      <section className="main__benefits text-gray-500 h-content p-4">
        <h2 className="text-2xl uppercase font-bold text-center mb-4">
          Why Gratitude?
        </h2>

        <ul className="main__card-list">
          {gratitudeBenefits.map(benefit => (
            <li key={benefit.id} className="main__card-item">
              <img
                className="card__img w-36 h-36 rounded-full object-cover mb-4"
                src={benefit.image}
                alt="photo" />

              <h3 className="main__card-title">
                {benefit.title}
              </h3>

              <p className="text-center">
                {benefit.description}
              </p>

              <Divider sx={{margin: "0", padding: "0"}} />
            </li>
          ))}
        </ul>
      </section>

      <section className="main__cta flex flex-col items-center gap-4">
        <h2 className="text-2xl uppercase text-gray-500 font-bold text-center">
          Nurture Gratitude in Your Life with Koru
        </h2>

        <Carousel />

        <Link href="/register">
          <p className="main__cta-btn text-center uppercase">
            Get started
          </p>
        </Link>
      </section>
    </main>
  );
};