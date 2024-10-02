import Bentodemo from "./bento-grid";

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" id="features">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          The ultimate time saver
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            <p>
              With leadiculous you can save <strong>100+ hours / month</strong> of manual research. Focus on what matters most.
            </p>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};
