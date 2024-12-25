const Testimonials = () => {
  return (
    <div className="mb-16">
      <h1 className="sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 inline-block shadow-lg p-3 drop-shadow-xl font-bold up border-l-8 border-green-500 pl-3 mb-8">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* card 1 */}
        <div className="card bg-white dark:bg-[#1a242e] px-4 w-96 shadow-xl rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
              alt=""
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sabbir Hossain</h2>
            <p className="text-gray-500 dark:text-gray-400">
              "As a first-time volunteer, I was nervous, but the experience was
              amazing! The impact I could make was beyond what I expected."
            </p>
          </div>
        </div>
        <div className="card bg-white dark:bg-[#1a242e] px-4 w-96 shadow-xl rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
              alt=""
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Ayesha Khan</h2>
            <p className="text-gray-500 dark:text-gray-400">
              "This site is a bridge between passion and purpose. I've found
              meaningful opportunities to give back and connect with others."
            </p>
          </div>
        </div>
        <div className="card bg-white dark:bg-[#1a242e] px-4 w-96 shadow-xl rounded-xl">
          <div className="flex justify-center pt-3">
            <img
              className="w-20 h-20 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
              alt=""
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Istiak Ahmed</h2>
            <p className="text-gray-500 dark:text-gray-400">
              "I truly appreciate how easy it is to find volunteer opportunities
              that align with my skills and interests. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
