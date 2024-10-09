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

      <section className="main-benefits text-white h-content p-4">
        <h2 className="text-2xl uppercase font-bold mb-4">
          Why Gratitude?
        </h2>

        <div className="main-card bg-white text-gray-500 p-4 rounded">
          <h3 className="text-xl font-bold uppercase">
            Title
          </h3>

          <p>
            Text
          </p>
        </div>
      </section>
    </main>
  );
};