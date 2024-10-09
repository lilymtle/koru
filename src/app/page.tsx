// import component
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Divider } from '@mui/material';

export default function Home() {
  return (
    <main id="main">
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
        <li className="main__card-item">
            <img
              className="card__img w-36 h-36 rounded-full object-cover mb-4"
              src="/assets/images/benefits-1.png"
              alt="photo" />

            <h3 className="card__title">
              Improved Mental Health
            </h3>

            <p className="text-center">
              Practicing gratitude can reduce symptoms of depression and anxiety, promoting a more positive mindset.
            </p>
          </li>

          <Divider sx={{margin: "0", padding: "0"}} />

          <li className="main__card-item">
            <img
              className="card__img w-36 h-36 rounded-full object-cover mb-4"
              src="/assets/images/benefits-2.png"
              alt="photo" />

            <h3 className="card__title">
              Enhanced Relationships
            </h3>

            <p className="text-center">
              Expressing gratitude strengthens relationships by fostering 
              connection and appreciation between individuals.
            </p>
          </li>

          <Divider sx={{margin: "0", padding: "0"}} />


          <li className="main__card-item">
            <img
              className="card__img w-36 h-36 rounded-full object-cover mb-4"
              src="/assets/images/benefits-3.png"
              alt="photo" />

            <h3 className="card__title">
              Better Physical Health
            </h3>

            <p className="text-center">
              Grateful individuals often experience fewer health issues, as 
              gratitude can lead to improved sleep, reduced pain, 
              and healthier lifestyles.
            </p>
          </li>

            <Divider sx={{margin: "0", padding: "0"}} />


          <li className="main__card-item">
            <img
              className="card__img w-36 h-36 rounded-full object-cover mb-4"
              src="/assets/images/benefits-4.png"
              alt="photo" />

            <h3 className="card__title">
              Increased Resilience
            </h3>

            <p className="text-center">
              Gratitude helps people cope better with stress and adversity, 
              enhancing their ability to bounce back from challenges.
            </p>
          </li>

            <Divider sx={{margin: "0", padding: "0"}} />


          <li className="main__card-item">
            <img
              className="card__img w-36 h-36 rounded-full object-cover mb-4"
              src="/assets/images/benefits-5.png"
              alt="photo" />

            <h3 className="card__title">
              Greater Life Satisfaction
            </h3>

            <p className="text-center">
              Regularly acknowledging what you’re thankful for can boost overall happiness and
              contentment, leading to a more fulfilling life.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};